'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.belongsTo(models.Trip, { foreignKey: "tripId" });
    }
  };
  Day.init({
    date: DataTypes.DATEONLY,
    journal: DataTypes.STRING,
    tripId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Day',
  });
  return Day;
};