const auth = require("./routes/auth");

const express = require("express");
const https = require("https");
const config = require("config");

const app = express();

let key = fs.readFileSync(__dirname + "/./certs/selfsigned.key");
let cert = fs.readFileSync(__dirname + "/./certs/selfsigned.crt");
let options = { key: key, cert: cert };

if (!config.get("jwtPrivateKey")) {
  console.log("fatal error: jwtPrivateKey is not defined");
  process.exit(1);
}

app.use(express.json());
app.use("/api/auth", auth);

let server = https.createServer(options, app);
const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`https server listen on ${port}`));
