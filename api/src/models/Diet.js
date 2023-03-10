const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("diet", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    diets: {
      type: DataTypes.STRING
    }
  })
}