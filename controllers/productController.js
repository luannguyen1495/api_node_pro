const product= require("../models/product")

const productController = {
    getAll : (req,res)=>{
        product.getAll((err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json(data)
            }
        });
    },
    find :(req,res)=>{
        product.find(req.params.id,(err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json(data)
            }
        });
    },
    add : (req,res)=>{
       
        req.body.anh_sp = req.get('host')+`/${req.file.filename}`;
        product.create(req.body,(err,data)=>{
            if(err){
                res.send(err);
            } else{
                res.status(200).json({mess:"OK"})
            }
        });
    }
}

module.exports = productController;