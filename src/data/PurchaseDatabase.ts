import { CustomError } from "../error/CustomError";
import { InsertPurchaseDTO } from "../model/purchaseDTO";
import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase {
    private static TABLE_NAME = "labecommerce_purchases";


    create = async ({ id, userId, productId, qty, totalPrice }: InsertPurchaseDTO) => {
        try {

            await PurchaseDatabase.connection.insert({
                id: id,
                user_id: userId,
                product_id: productId,
                quantity: qty,
                total_price: totalPrice

            }).into(PurchaseDatabase.TABLE_NAME)

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }

    }

    getAll = async (user_id:string) => {
        try {
            // const result = await PurchaseDatabase.connection.raw(`
            //     SELECT * FROM ${PurchaseDatabase.TABLE_NAME} WHERE user_id=${user_id}
            // `)

            const result = await PurchaseDatabase.connection.select()
            .from(PurchaseDatabase.TABLE_NAME)
            .where({user_id:user_id})

            return (result[0])
            
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

}