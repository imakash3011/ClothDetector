const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('./src', {
    index: "index.html"
}))

app.listen(port, () => console.log(`Cloth Detector listening on port ${port}!`))