import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';



const app = express()
dotenv.config();
const PORT = process.env.PORT || 5002;
const URI =process.env.MONGODB_URI;

try{
  mongoose.connect(URI);
  console.log("MongoDB connected"); 

}catch (error){
 console.log(error);
}

app.get('/', (req, res) => {
  res.send('my name is jatin sharma and i am a full stack developer');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
