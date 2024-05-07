const { Game, Genre, GenreGame, User, Sequelize } = require("../models/index");
const { Op } = Sequelize;

const GameController = {
  async create(req, res, next) {
    try {
      const game = await Game.create(req.body);
      game.addGenre(req.body.GenreId);
      res.status(201).send({ msg: game.name + " creado con éxito", game });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
      next(error)
    }
  },
  async update(req, res) {
    try {
      await Game.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      const game = await Game.findByPk(req.params.id);
      game.setGenres(req.body.GenreId);
      res.status(201).send({ msg: "Juego de mesa actualizado con éxito",game });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ msg: "No ha sido posible actualizar el juego de mesa" });
    }
  },
  async delete(req, res) {
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
  },
  async getAll(req,res){
    try {
        const games = await Game.findAll({
            include:[{ model: Genre,attributes:["name"], through: { attributes: [] } }]
        });
        res.send({ msg:"Todos los juegos",games});
    } catch (error) {
      console.error(error);
      res.status(500).send(error);  
    }
  },
  async getById(req,res) {
    try {
      const game = await Game.findByPk(req.params.id,{
        include:[{ model: Genre,attributes:["name"], through: { attributes: [] } }]
      });
      res.send({ msg: "Aqui tienes el juego de mesa",game});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "No ha sido posible mostrar el juego de mesa" }); 
    }
  },
  async getByName(req,res) {
  try {
    const game = await Game.findOne({ where: { name: req.params.name }},{
        include:[{ model: Genre,attributes:["name"], through: { attributes: [] } }]
      });
   res.send({ msg: "Aqui tienes el juego de mesa",game});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "No ha sido posible mostrar el juego de mesa" }); 
    }
  },
  async getByPrice(req,res) {
    try {
      const game = await Game.findOne({ where: { price: req.params.price }},{
        include:[{ model: Genre,attributes:["name"], through: { attributes: [] } }]
      });
      res.send({ msg: "Aqui tienes los juegos de mesa por ese precio",game});
    } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "No ha sido posible mostrar los juegos de mesa con ese precio" }); 
    }
  },
  async orderPrice(req,res) {
    try {
      const game = await Game.findAll({ 
        order: [['price', 'DESC']],
        include:[{ model: Genre,attributes:["name"], through: { attributes: [] } }]
      });
      res.send({ msg: "Aqui tienes los juegos de mesa por precio",game});
    } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "No ha sido posible mostrar los juegos de mesa por precio" }); 
    }
  }
};

module.exports = GameController;
