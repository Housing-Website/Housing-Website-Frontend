import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";

import os from "os";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_NAME:", process.env.DB_NAME);

const TIMEOUT = 120000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

const formatDate = (date) => {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  let year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

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

app.post("/submit", async (req, res) => {
  console.log("여기까지들어옴?");
  const { name, phone, visitDate, message } = req.body;
  console.log("Received request:", { name, phone, visitDate, message });

  try {
    const formattedVisitDate = formatDate(visitDate);
    console.log("Formatted Date:", formattedVisitDate);

    const [result] = await pool.execute(
      `
      INSERT INTO counsel_inquiries (name, phone, visit_date, message)
      VALUES (?, ?, ?, ?)
      `,
      [name, phone, formattedVisitDate, message]
    );

    console.log("Insert Result:", result);
    res.status(200).json({ message: "문의가 성공적으로 등록되었습니다." });
  } catch (error) {
    console.error("데이터 삽입 중 오류 발생:", error);
    res.status(500).json({ error: "문의 등록 중 오류가 발생했습니다." });
  }
});

app.use((err, req, res, next) => {
  console.error("서버 에러:", err);
  res.status(500).send("서버 오류 발생");
});

const server = app.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});

server.setTimeout(TIMEOUT); // 타임아웃 설정 (예: 2분)
