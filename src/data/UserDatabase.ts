import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
   private static TABLE_NAME= "labecommerce_users";

    create =async({id,name,email,password}:any):Promise<void>=>{
        await UserDatabase.connection
        .insert({id,name,email,password}).into(UserDatabase.TABLE_NAME)

    }
}