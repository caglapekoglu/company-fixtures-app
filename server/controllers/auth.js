const AuthSchema = require("../models/auth.js")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const register = async(req,res)=>{
    try{
        const {username,password,id}=req.body;
        const user = await AuthSchema.findOne({username:req.body.username}) //tc adresine göre user bul
        if(user){
            return res.status(500).json({msg:"Böyle bir kullanıcı zaten var!"})
        }
        if(password.length<6){
            return res.status(500).json({msg:"Şifreniz 6 karakterden küçük olamaz!"})

        }
        const passwordHash= await bcrypt.hash(password,12) //Şifre hashlendi
        const newUser = await AuthSchema.create({username,password:passwordHash,id})
        const token = jwt.sign({id: newUser._id},"SECRET_KEY", {expiresIn:'1h'})
        res.status(200).json({
            status:"OK",
            newUser,
            token
        })
    } catch(error){
        return res.status(500).json({msg: error.message})
    }
}

const login = async(req,res)=>{
    try{
        const {tc,password}=req.body
        const user = await AuthSchema.findOne({tc: tc})
        if(!user){
            return res.status(401).json({msg:"Böyle bir kullanıcı bulunamadı."})
        }
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare){
            return res.status(401).json({msg:"Girilen şifre yanlış."})
        }
        const token = jwt.sign({id: user._id},"SECRET_KEY", {expiresIn:'1h'})
        res.status(200).json({
            status:"OK",
            user,
            token
        })
    } catch(error){
        return res.status(500).json({msg: error.message})
    }
}

const logout = (req, res) => {
    try {
      res.status(200).json('Logged Out');
    } catch (error) {
      next(err);
    }
  };
  
// function isEmail(emailAdress){
//     let regex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if (emailAdress.match(regex))
//     return truel
//     else
//         return false;
// }
module.exports={login,register,logout}