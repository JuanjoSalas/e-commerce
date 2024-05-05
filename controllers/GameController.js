const { Game, Genre, GenreGame, User, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const GameController = {
  async create(req, res) {
    try {
      const game = await Game.create(req.body);
      game.addGenre(req.body.GenreId);
      res.status(201).send({ msg: game.name + " creado con éxito", game });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  /*async update(req, res) {
    try {
      await Game.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const game = await Game.findByPk(req.params.id);
      game.setGenres(req.body.GenreId);
      res.status(201).send({ msg: "Juego de mesa actualizado con éxito" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "No ha sido posible actualizar el juego de mesa" });
    }
  },*/
  /*async delete(req, res) {
    try {
      await Game.destroy({
        where: {
          id: req.params.id,
        },
      });
      await GenreGame.destroy({
        where: {
          GameId: req.params.id,
        },
      });
      res.send({ msg: "El juego de mesa se ha eliminado con éxito" });
    } catch (error) {
      console.log(error);
    }
  },*/
  /*async getAll(req, res) {
    try {
      const games = await Game.findAll({
        include: [
          { model: Genre, attributes: ["name"], through: { attributes: [] } },
        ],
      });
      res.send(games);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },*/
};

module.exports = GameController;
