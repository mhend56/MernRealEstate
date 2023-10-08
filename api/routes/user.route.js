import express from 'express';
import { test } from '../controllers/user.controller.js';
const router = express.Router();
router.get('/test', test);
export default router;
// app.get('/test', (req, res) => {
//   res.send('Hello world');
// });
