const express = require("express");
const app = express();
const port = 8017;
const hostname = "localhost";

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, hostname, () => {
	console.log(`Example app listening on port ${port}`);
});
