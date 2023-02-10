const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const conn = require('./config/database');
const userController = require('./controllers/userController');
const generateToken = require('./helpers/generateToken');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
app.post('/api/register',userController.register);
app.post('/api/login',userController.login);

app.post('/token',(req,res)=>{
    const refreshToken = req.body.refreshToken;
 
    if(!refreshToken) return res.status(401);

    try {
        var decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);
        console.log(decoded);
        const token = generateToken({userName:decoded.userName});
        return res.json(token);
    } catch (error) {
        
        return res.status(403).json({'mes':error})
    }

})
app.listen(4000,()=>{
    console.log('AuthService listing:4000')
})