import express from 'express';
import { signup } from '../controllers/user.controller.js'; 

const router = express.Router();
router.post('/signup', (req, res) => {

export default router;