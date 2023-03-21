const { cleanEnv, str, port } = require("envalid");
require("dotenv").config();

const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "production"] }),
  PORT: port(),
  DATABASE_URL: str(),
});

module.exports = env;
