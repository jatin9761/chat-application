import express from 'express';
import dotenv from 'dotenv';
const app = express()
dotenv.config();
const PORT = process.env.PORT || 5002;

app.get('/', (req, res) => {
  res.send('my name is jatin sharma and i am a full stack developer');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
