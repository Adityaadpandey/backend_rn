const jwt = require("jsonwebtoken");
const JWT_SECRECT = "Aditya";

const fetchUser =(req, res, next) =>{
    //  get the user from jwt server and id to req object 
    const token = req.header('auth-token');
    if (!token){
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRECT);
        req.user = data.user;
        // res.json(data);
        // req.send(req.user);
    next()
    } catch (error) {
        res.status(401).send({error:"Please authenticate using a valid token"})
    }
    
}

module.exports = fetchUser;