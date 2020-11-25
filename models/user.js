const { DataTypes } = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


module.exports = User;