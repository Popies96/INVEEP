import { DataTypes } from "sequelize";
import sequelizemetaModel from "./sequelizemeta.js";
import { User } from "./users.js";

export default function initModels(sequelize) {
  const sequelizemeta = sequelizemetaModel(sequelize, DataTypes);
  const users = User(sequelize);

  return {
    sequelizemeta,
    users,
  };
}
