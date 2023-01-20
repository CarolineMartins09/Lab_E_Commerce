import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   private static TABLE_NAME= "labecommerce_users";

    createUser =async({id,name,email,password}:any)=>{
        try{

            await UserDatabase.connection.insert({
                id:id,
                name:name,
                email:email,
                password:password}).into(UserDatabase.TABLE_NAME)
    
        }catch(e:any){
            throw new Error(`${e.message}  erro user base`); 
        }

}}