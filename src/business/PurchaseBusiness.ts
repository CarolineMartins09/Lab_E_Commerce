import { ProductDataBase } from "../data/ProductDatabase";
import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { CustomError } from "../error/CustomError";
import { InputPurchaseDTO, InsertPurchaseDTO } from "../model/purchaseDTO";
import { generateId } from "../services/idGenerator";

export class PurchaseBusiness {

    createPurchase = async ({ userId, productId, qty }: InputPurchaseDTO) => {
        try {

            if (!userId || !productId || !qty) {
                throw new CustomError(400, "Body invalid! userId or productId or qty.");
            }

            const productDatabase = new ProductDataBase()

            const priceProduct = await productDatabase.price(productId)

            const totalPrice = priceProduct.price * qty

            const id = generateId()

            const purchaseDatabase = new PurchaseDatabase()
            
            const createPurchase: InsertPurchaseDTO = {
                id: id,
                userId: userId,
                productId: productId,
                qty: qty,
                totalPrice: totalPrice
            }
            await purchaseDatabase.create(createPurchase)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    getAllPurchase=async(user_id:any)=>{
        try{

            const purchaseDatabase = new PurchaseDatabase()

            const userPurchase = await purchaseDatabase.getAll(user_id)
            console.log(userPurchase);
            
            if(!userPurchase){
                throw new CustomError(404, "ID inválido.");
            }
            return (userPurchase)

        }catch(err){
            throw new CustomError(err.statusCode, err.message)
        }

    }
}