const express = require("express");
const app = express();
var cors = require('cors')
let port = process.env.PORT;

if (port == null || port == "") {
    port = 8000;
}

app.use(cors())

app.use(express.static("public"), cors())

app.listen(port, () => console.log(`Server listening on port: ${port}`));