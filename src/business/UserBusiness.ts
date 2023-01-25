import { UserDatabase } from "../data/UserDatabase"
import { CustomError } from "../error/CustomError";
import { CreateUserDTO, InputUserDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";

export class UserBusiness{

    createUser=async({name,email,password}:InputUserDTO):Promise<void>=>{
        try{
            if(!name||!email||!password){
                throw new CustomError(400, "Body invalid! name or email or password.");
            }
            if(password.length <= 6){
                throw new CustomError(400, "Password must be at least 7 characters");
            }
            const id = generateId()
    
            const userDatabase = new UserDatabase()

            const insertUser: CreateUserDTO={
                id:id,
                name:name,
                email:email,
                password:password
            }

            await userDatabase.createUser(insertUser)

        }catch(err:any){
            throw new CustomError(err.statusCode, err.message)
        }
       
        
    }

    getAllUsers = async () =>{
        try{
            const userDatabase = new UserDatabase()
            const user = await userDatabase.getAll()

            return user

        }catch(err){
            throw new CustomError(err.statusCode, err.message)
        }
    }
}