import { UserDatabase } from "../data/UserDatabase"

export class UserBusiness{
    createUser=async({name,email,password}:any):Promise<void>=>{

        if(!name||!email||!password){
            throw new Error("Body invalid! name or email or password");
        }
        if(password.length>6){
            throw new Error("Password must be at least 7 characters");
        }
        const id = Date.now().toString()

        const userDatabase = new UserDatabase()
        await userDatabase.create({
            id,
            name,
            email,
            password
        })
    }
}