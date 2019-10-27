const express = require('express');

const app = express();
const port = 8000;

require('./routes')(app);

app.listen(port, () => {
  console.log(`The server is running on on port ${port}`);
});
