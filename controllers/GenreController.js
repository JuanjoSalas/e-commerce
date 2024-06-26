const { Genre, Game, GenreGame } = require("../models/index");

const GenreController = {
  async create(req, res) {
    try {
      const genre = await Genre.create(req.body);
      res.status(201).send({ msg: genre.name + " creado con éxito", genre });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      await Genre.update(req.body,{
        where: {
          id: req.params.id,
        },
      });
      const genre = await Genre.findByPk(req.params.id)
      genre.setGames(req.body.GameId);
      res.send({ msg: "El genero se ha actualizado con éxito",genre});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "No ha sido posible actualizar el genero" });
    }
  },
  async delete(req, res) {
    try {
      await Genre.destroy({
        where: {
          id: req.params.id
        }
      })
      await GenreGame.destroy({
        where: {
          GenreId: req.params.id
        }
      })
      res.send({ msg: 'El genero se ha eliminado con éxito'})
    } catch (error) {
      console.log(error)
    }
  },
  async getAll(req,res) {
    try {
        const genres = await Genre.findAll({
          include:[{ model: Game,attributes:["name"], through: { attributes: [] } }]
        });
        res.send({ msg:"Todos los géneros",genres});
      } catch (error) {
      console.error(error);
      res.status(500).send(error);  
    }
  },
  async getById(req,res) {
    try {
        const genre = await Genre.findByPk(req.params.id,{
          include:[{ model: Game,attributes:["name"], through: { attributes: [] } }]
        });
      res.send({ msg:"Aqui tienes el género",genre});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg:"No ha sido posible mostrar el genero" });
    }
  },
  async getByName(req,res) {
    try {
      const genre = await Genre.findOne({ where: { name: req.params.name }},{
        include:[{ model: Game,attributes:["name"], through: { attributes: [] } }]
      });
      res.send({ msg: "Aqui tienes el género",genre});
    } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "No ha sido posible mostrar el genero" }); 
    }
  }
};

module.exports = GenreController;
