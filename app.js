const express = require("express");

const app = express();
app.set('trust proxy', true)

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/api/whoami", (req, res) => {
  const { ip: ipaddress, headers } = req;
  const language = headers["accept-language"];
  const software = headers["user-agent"];

  res.send({ ipaddress, language, software });
});

app.listen(4000, () => {
  console.log("server up");
});
