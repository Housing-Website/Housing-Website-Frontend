import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import session from "express-session";
import { createRequire } from "module";
import bcrypt from 'bcrypt';

const require = createRequire(import.meta.url);
const MySQLStore = require('express-mysql-session')(session);

// 환경 변수 로드
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8800;

// MySQL 연결 풀 생성
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "your_database",
});

// CORS 및 JSON 처리 미들웨어 설정
app.use(cors({ origin: "*" }));
app.use(express.json());

// MySQL 세션 스토어 옵션 설정
const sessionStore = new MySQLStore({
  expiration: 1000 * 60 * 60 * 2, 
  clearExpired: true,             
  checkExpirationInterval: 1000 * 60 * 10, 
  createDatabaseTable: true,    
}, pool); // MySQL 연결 풀 전달

// 세션 설정
app.use(session({
  key: 'session_cookie_name',
  secret: process.env.SESSION_SECRET || 'default_secret',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 2 } // 세션 쿠키 만료 시간 2시간
}));

// 날짜 포맷팅 함수
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (`0${d.getMonth() + 1}`).slice(-2);
  const day = (`0${d.getDate()}`).slice(-2);
  return `${year}-${month}-${day}`;
};

// MySQL 연결 확인
async function checkDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL 데이터베이스에 성공적으로 연결되었습니다.");
    connection.release();
  } catch (error) {
    console.error("MySQL 데이터베이스 연결 오류:", error);
  }
}

checkDbConnection();

// 세션 체크 API
app.get("/session-check", (req, res) => {
  if (req.session.user) {
    return res.status(200).json({ message: "로그인 되어 있습니다." });
  } else {
    return res.status(401).json({ message: "로그인 되어 있지 않습니다." });
  }
});

// 문의 조회 API
app.get("/inquiries", async (req, res) => {
  try {
    const [rows] = await pool.execute(`SELECT name, phone, visit_date, message FROM counsel_inquiries`);
    res.status(200).json(rows); 
  } catch (error) {
    console.error("데이터 조회 중 오류 발생:", error);
    res.status(500).json({ error: "데이터 조회 중 오류가 발생했습니다." });
  }
});

// 문의 데이터 등록 API
app.post("/submit", async (req, res) => {
  const { name, phone, visitDate, message } = req.body;

  try {
    const formattedVisitDate = formatDate(visitDate);
    await pool.execute(
      `INSERT INTO counsel_inquiries (name, phone, visit_date, message) VALUES (?, ?, ?, ?)`,
      [name, phone, formattedVisitDate, message]
    );

    res.status(200).json({ message: "문의가 성공적으로 등록되었습니다." });
  } catch (error) {
    console.error("데이터 삽입 중 오류 발생:", error);
    res.status(500).json({ error: "문의 등록 중 오류가 발생했습니다." });
  }
});

// 로그인 API
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await pool.execute(
      `SELECT * FROM admin_login WHERE username = ?`,
      [username]
    );

    if (rows.length > 0) {
      const user = rows[0];
      const match = await bcrypt.compare(password, user.password); // 비밀번호 비교

      if (match) {
        req.session.user = { username }; // 로그인 시 세션에 사용자 정보 저장
        res.status(200).json({ message: "로그인 성공" });
      } else {
        res.status(401).json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
      }
    } else {
      res.status(401).json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
    }
  } catch (error) {
    console.error("로그인 중 오류 발생:", error);
    res.status(500).json({ error: "로그인 중 오류가 발생했습니다." });
  }
});

// 로그아웃 API
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "로그아웃 중 오류가 발생했습니다." });
    }
    res.status(200).json({ message: "로그아웃 성공" });
  });
});

// 에러 핸들링 미들웨어
app.use((err, req, res, next) => {
  console.error("서버 에러:", err);
  res.status(500).send("서버 오류 발생");
});

// 서버 실행
const server = app.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});

// 타임아웃 설정
const TIMEOUT = 120000;
server.setTimeout(TIMEOUT);
