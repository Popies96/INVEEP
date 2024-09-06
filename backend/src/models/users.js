import { DataTypes } from "sequelize";

export function User(sequelize) {
  return sequelize.define(
    "users",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "username",
      },
      lastName:{
        type: DataTypes.STRING(255),
        allowNull:false,

      },
      phone:{
        type:DataTypes.STRING(8),
        allowNull:false,
      },
      websiteUrl:{
       type:DataTypes.STRING(255),
       allowNull:true
      },

      cin: {
        type: DataTypes.STRING(8),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: "email",
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      profile_image: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("shop_owner", "visitor"), 
        allowNull: false,
        defaultValue: "visitor", 
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "username",
          unique: true,
          using: "BTREE",
          fields: [{ name: "username" }],
        },
        {
          name: "email",
          unique: true,
          using: "BTREE",
          fields: [{ name: "email" }],
        },
      ],
    }
  );
}
