const express = require('express');
const app = express();
const port = 7865;

// Middleware to log server start message
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Route handling
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
