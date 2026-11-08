import { db } from "./db.js"


export const addContact = (req,res)=>{
    const sql = 'insert into contact (name,email,message) values(?,?,?)'

    const {name,email,msg} = req.body



     if(!name || !email || !msg){
            return res.json({msg:"All fiels are required"})
        }


    db.query(sql,[name,email,msg],(error,results)=>{
        
       

        if(error){
            return res.json({msg:"Server Error"})
        }

        else{
            return res.json({
                msg:"Message successfully sent"
            })
        }
    })
}