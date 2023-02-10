const uploadFile = require("../config/file");
const categoryController = require("../controllers/categoryController");
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");
const isAuth = require("../midlleware/auth")
module.exports = (app)=>{
    app.get('/api/danh_muc',isAuth,categoryController.getAll);
    app.get('/api/danh_muc/:id',categoryController.find);
    app.post('/api/danh_muc',categoryController.add);
    app.get('/api/product',productController.getAll);
    app.post('/api/product',uploadFile.single('uploaded_file'),productController.add);
   
}