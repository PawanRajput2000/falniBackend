const registration = require("../Model/registration")


let Singup  = async(req,res)=>{

    try {
        let body = req.body 

    let data = await registration.create(body)
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
            return res.json({status : false , data : err.message})
        }
        return res.json({status : true , data : data })
        
    }catch(err){
        console.log(err.message)
        return res.json({status : false, data : err.message })

    }
}



module.exports = {Singup,login}