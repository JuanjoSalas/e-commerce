const { User } = require("../models/index");
const bcrypt = require ('bcryptjs');

const UserController ={
    async create(req,res){
        try {
            const password = await bcrypt.hash(req.body.password,10)
            const user = await User.create({...req.body.password,role:"user"})
            res.status(201).send({ msg:"Usuario creado con éxito",user})
        } catch (error) {
          console.error(error)
          res.status(500).send(error)  
        }
    }
}

module.exports = UserController;