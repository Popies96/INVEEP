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
      cin: {
        type: DataTypes.BIGINT,
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
      }
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
