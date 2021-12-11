const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ name: "hosein" });
});

const PORT = 3001;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://127.0.0.1:${PORT}`)
);