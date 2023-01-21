import { ProductDataBase } from "../data/ProductDatabase";
import { PurchaseDatabase } from "../data/PurchaseDatabase";

export class PurchaseBusiness{

    createPurchase =async ({userId, productId, qty}:any)=>{
        try{
            
            if(!userId || !productId || !qty){
                throw new Error("Body invalid! userId or productId or qty");
            }
           
            const productDatabase = new ProductDataBase()

            const priceProduct:any = await productDatabase.price(productId)
            
            const soma:any = priceProduct*qty
            
            const id = Date.now().toString()
            const purchaseDatabase = new PurchaseDatabase()
    
            await purchaseDatabase.create({
                id,
                userId,
                productId,
                qty,
                soma
            })
        }catch(e:any){
            throw new Error(e.message);
        }
    }
}