const jwt = require('jsonwebtoken');
const User = require('../../model/user');

const signUp = (req,res)=>{
    let newUser = new User();

    newUser.name = req.body.name;
    newUser.id=req.body.id;
    newUser.pw=req.body.pw;

    User.findOne({id: req.body.id},(err,user)=>{
        if(err) {
            console.log(err);
            res.status(500).end();
            return;
        }
        if(user==null){
            newUser.save((err) => {
                if(err){
                    console.log(err);
                    res.status(500).end();
                    return;
                }
                res.status(200).end();
            });
        } else{
            res.status(403).json({"message":"existing id!"}).end();
        }
    });
};
const login = (req,res)=>{
    User.findOne({id:req.body.id,pw:req.body.pw},(err,user)=>{
        if(err){
            console.log(err);
            res.status(500).end();
            return;
        }
        if(user == null){
            res.status(403).json({"message":"not existing id!"}).end();
            return;
        }
        else{
            const payload = {id: user.id,pw:user.pw};
            const JWT_SECRET = process.env.JWT_SECRET;
            const option = {expiresIn:"1d",algorithm:"HS256"};

            jwt.sign(payload,JWT_SECRET,option,(err,token)=>{
                if(err){
                    console.log(err);
                    res.status(500);
                    return;
                }
                res.status(200).json({token:token});
            })
        }
    });
};

exports.signUp = signUp;
exports.login=login;