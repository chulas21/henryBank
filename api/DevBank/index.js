const server = require("./src/app");
const { conn } = require("./src/database/db");
const { Users } = require("./src/database/db");

conn
  .authenticate()
  .then(() => {
    return conn.sync({ force: false });
  })
  .then(() => {
    return server.listen(3000, () => {
      console.log("Connection has been established successfully at port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
