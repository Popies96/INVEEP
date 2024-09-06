import { DataTypes } from "sequelize";

export default function (sequelize) {
  return sequelize.define(
    "sequelizemeta",
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      tableName: "sequelizemeta",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "name" }],
        },
        {
          name: "name",
          unique: true,
          using: "BTREE",
          fields: [{ name: "name" }],
        },
      ],
    }
  );
}
