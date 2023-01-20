import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness{

    createUser=async({name,email,password}:any):Promise<void>=>{
        try{
            if(!name||!email||!password){
                throw new Error("Body invalid! name or email or password");
            }
            if(password.length <= 6){
                throw new Error("Password must be at least 7 characters");
            }
            const id = Date.now().toString()
    
            const userDatabase = new UserDatabase()
    
            await userDatabase.createUser({
                id,
                name,
                email,
                password
            })

        }catch(err:any){
            throw new Error(err.message);
        }
       
        
    }

    getAllUsers = async () =>{
        try{
            const userDatabase = new UserDatabase()
            const user = await userDatabase.getAll()

            return user

        }catch(err){
            throw new Error(err.message);
        }
    }
}