import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
export class UserController {
    createUser=async(req:Request, res:Response)=>{
        try{
        const {name,email,password} = req.body;

        const userBusiness = new UserBusiness()

        await userBusiness.createUser({name, email, password})

            res.status(200).send("User created successfully!")
        }catch(err:any){
            res.status(400).send(`${err.message}`)
    }
}}