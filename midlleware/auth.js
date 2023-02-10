
const jwt = require('jsonwebtoken');
const isAuth = (req,res,next)=>{
    const auth = req.header('Authorization');

    if(!auth) return res.status(401).json({'mes':'?'})
    const token = auth.split(' ')[1];
    
    try {
        var decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        req.userName = decoded.userName;
        next();
    } catch (error) {
        return res.status(403).json({'mes':error})
    }
    
}

module.exports = isAuth;