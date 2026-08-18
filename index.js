const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>🌐 Hello World! Your Node application is successfully running on Render!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is actively running on port ${PORT}`);
});
