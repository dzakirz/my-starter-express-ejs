const app = require("./app");
const env = require("./utils/validateEnv");

app.listen(env.PORT, () => {
  console.log(`running on http://localhost:${env.PORT}/`);
});
