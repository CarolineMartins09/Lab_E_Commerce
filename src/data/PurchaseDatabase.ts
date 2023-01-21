import { BaseDatabase } from "./BaseDatabase";

export class PurchaseDatabase extends BaseDatabase{
    private static TABLE_NAME = "labecommerce_purchases";


    create=async({id, userId, productId, qty,totalPrice}:any)=>{
        try {

            await PurchaseDatabase.connection.insert({
                id: id,
                user_id: userId,
                product_id: productId,
                quantity: qty,
                total_price: totalPrice
                
            }).into(PurchaseDatabase.TABLE_NAME)

        } catch (e: any) {
            throw new Error(`${e.message}  erro purchase`);
        }

    }
   
}