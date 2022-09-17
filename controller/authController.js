const authModel = require('../model/authModel')

const login = (req, res)=>{
        let {email, password} = req.body;
        res.send(email)
}
const signup = async(req, res) =>{
        let {username, email, password} = req.body;
        if(!username || !email || !password){   
                        res.send({success:false,message:"some thing is missing"})
                        return
        }
        else{
                const signUpResult = new authModel({username,email,password})
                let result = await signUpResult.save()
                res.send({success:true, message:"Successfully account created"})
        }
}

const getAuthdata = async (req, res) =>{
        let result =  await authModel.find()
        res.send(result)
}         


module.exports = {login, signup, getAuthdata}
