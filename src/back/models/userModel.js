const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {

      id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

     cin: {
      type: DataTypes.INTEGER,
       allowNull: false,
      },
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
     password: {
      type: DataTypes.STRING,
      allowNull: false,
      },
});

module.exports = User;
