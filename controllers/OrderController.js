const { Order, Game, OrderGame } = require("../models/index");

const OrderController ={
    async create(req,res){
        try {
            const order = await Order.create(req.body);
            order.addGame(req.body.GameId);
            res.status(201).send({ msg:"Pedido creado con éxito",order});
        } catch (error) {
          console.error(error);
          res.status(500).send(error);  
        }
    },
    /*async getAll(req,res){
        try {
            const orders = await Order.findAll({
                include:[{ model: Game,attributes:["name"], through: { attributes: [] } }]
            });
            res.send({ msg:"Todos los pedidos",orders});
        } catch (error) {
          console.error(error);
          res.status(500).send(error);  
        }
    }*/
}

module.exports = OrderController;