const express = require('express');
const router = express.Router();

router.post('/verify', (req, res, next) => {
  console.log(req.body);
  res.status(200).json({ message: 'Data Sent Successfully 👌 👌 🔥 ' });
  next();
});

module.exports = router;
