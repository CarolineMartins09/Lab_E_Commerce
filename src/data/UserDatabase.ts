import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   private static TABLE_NAME= "labecommerce_users";

    createUser =async({id,name,email,password}:any)=>{
        // try{

            // await UserDatabase.connection.raw(`
            // INSERT INTO ${UserDatabase.TABLE_NAME} 
            // (id,name,email,password)
            // VALUES (${id},${name},${email},${password})
            
            // `)

            await UserDatabase.connection.insert({
                id:id,
                name:name,
                email:email,
                password:password}).into("labecommerce_users")
    
        // }catch(e:any){
        //     throw new Error(`${e.message}  erro user base`); 
        // }

}}