const registration = require("../Model/registration")


let Singup  = async(req,res)=>{

    try {
        
         console.log(req.body)
        let {FullName,Email,Password} = req.body 
        if (!FullName) {
            return res.status(400).send({ status: false, data: "fullname is require" })
        }
        if (!Email) {
            return res.status(400).send({ status: false, data: "Email is require" })
        } if (!Password) {
            return res.status(400).send({ status: false, data: "Password is require" })
        }

    let data = await registration.create(req.body)
    return res.json({status : true , data : data})

    }catch(err){
        console.log(err.message)
        return res.json({status : false , data : err.message})
    }
}

const login = async (req,res)=>{
    try{
        let body = req.body
        let data= await registration.findOne(body)
        if(!data){
            return res.json({status : false , data : "user not found"})
        }
        return res.json({status : true , data : data })
        
    }catch(err){
        console.log(err.message)
        return res.json({status : false, data : err.message })

    }
}



module.exports = {Singup,login}