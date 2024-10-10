import express from "express";
import cors from "cors";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5001;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD, // .env에서 가져온 비밀번호
  database: process.env.DB_NAME,
});

app.use(cors());
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

app.post("/submit-inquiry", async (req, res) => {
  const { name, phone, visitDate, message } = req.body;

  try {
    const formattedVisitDate = formatDate(visitDate);

    const [result] = await pool.execute(
      `
      INSERT INTO counsel_inquiries (name, phone, visit_date, message)
      VALUES (?, ?, ?, ?)
      `,
      [name, phone, formattedVisitDate, message]
    );

    res.status(200).json({ message: "문의가 성공적으로 등록되었습니다." });
  } catch (error) {
    console.error("데이터 삽입 중 오류 발생:", error);
    res.status(500).json({ error: "문의 등록 중 오류가 발생했습니다." });
  }
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버 실행 중 http://localhost:${PORT}`);
});
