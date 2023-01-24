import { BaseDatabase } from "../data/BaseDatabase";
import { ProductDataBase } from "../data/ProductDatabase";
import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { InputPurchaseDTO } from "../model/purchaseDTO";
import { generateId } from "../services/idGenerator";

export class PurchaseBusiness{

    createPurchase =async ({userId, productId, qty}:InputPurchaseDTO)=>{
        try{
            
            if(!userId || !productId || !qty){
                throw new Error("Body invalid! userId or productId or qty");
            }
           
            const productDatabase = new ProductDataBase()

            const priceProduct:any= await productDatabase.price(productId)
            console.log(priceProduct);
            
            const soma:any = priceProduct*qty
            console.log(soma);
        
            const id = generateId()

            const purchaseDatabase = new PurchaseDatabase()
    
            await purchaseDatabase.create({
                id:id,
                userId:userId,
                productId:productId,
                qty:qty,
                soma:soma
            })
        }catch(e:any){
            throw new Error(e.message);
        }
    }
}