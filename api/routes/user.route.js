import express from 'express';
const router = express.Router();
router.get('/test', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});
export default router;
// app.get('/test', (req, res) => {
//   res.send('Hello world');
// });
