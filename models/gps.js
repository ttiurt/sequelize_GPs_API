'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GPs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GPs.init({
    circuit: DataTypes.STRING,
    laps: DataTypes.INTEGER,
    winner: DataTypes.STRING,
    winningCnstrc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GPs',
  });
  return GPs;
};