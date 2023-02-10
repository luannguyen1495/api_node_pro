const category = require("../models/category")

const categoryController = {
    getAll : (req,res)=>{
        category.getAll((err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json(data)
            }
        });
    },
    find :(req,res)=>{
        category.find(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json(data)
            }
        });
    },
    add : (req,res)=>{
        category.create(req.body,(err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json({mess:"OK"})
            }
        });
    }
}

module.exports = categoryController;