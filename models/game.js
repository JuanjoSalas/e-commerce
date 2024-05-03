'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Game.belongsToMany(models.Genre,{
        through:models.GenreGame
      })
      Game.belongsToMany(models.Order,{
        through:models.OrderGame
      })
    }
  }
  Game.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    players: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    company: DataTypes.STRING,
    reference: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};