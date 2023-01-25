import { CustomError } from "../error/CustomError";
import { CreateUserDTO } from "../model/userDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "labecommerce_users";

    createUser = async ({ id, name, email, password }:CreateUserDTO ) => {
        try {

            await UserDatabase.connection.insert({
                id: id,
                name: name,
                email: email,
                password: password
            }).into(UserDatabase.TABLE_NAME)

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    getAll = async () => {
        try {

            const result = await UserDatabase.connection.select().from(UserDatabase.TABLE_NAME)

            return (result)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}