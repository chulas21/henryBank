require('dotenv').config({ path: __dirname + '/.env' });
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_TABLE } = process.env;
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_TABLE}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, './../models'))
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, './../models', file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const {User, Account, Transfer, Contact} = sequelize.models;

//realciones de user con cuenta
// User.belongsToMany(User, { as: 'Contacts', through: Contact, foreignKey: 'userId' });

//Con esta relacion se crea la tabla intermedia contactLists
Contact.belongsTo(User)
User.hasMany(Contact)

User.hasMany(Account);
Account.belongsTo(User);

//relacion de cuenta con trnasaccion.

// Transfer.belongsTo(Account, {as: "CVUorigen"});
// Transfer.belongsTo(Account, {as: "CVUdestino"});
// // Transfer.hasOne(Account);



module.exports = {
  ...sequelize.models,
  conn: sequelize,
 };
