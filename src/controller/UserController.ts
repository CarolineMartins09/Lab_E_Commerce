import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InputUserDTO } from "../model/userDTO"
export class UserController {
    createUser = async (req: Request, res: Response) => {
        try {
            const { name, email, password } = req.body;

            const input: InputUserDTO = {
                name,
                email,
                password
            }

            const userBusiness = new UserBusiness()

            await userBusiness.createUser(input)

            res.status(200).send("User created successfully!")
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            const userBusiness = new UserBusiness()

            const users = await userBusiness.getAllUsers()

            res.status(200).send(users)
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}