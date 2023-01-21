import { PurchaseDatabase } from "../data/PurchaseDatabase";

export class PurchaseBusiness{

    createPurchase =async ({userId, productId, qty}:any)=>{
        try{
            
            if(!userId || !productId || !qty){
                throw new Error("Body invalid! userId or productId or qty");
            }
           
            const id = Date.now().toString()
    
            const purchaseDatabase = new PurchaseDatabase()
    
            await purchaseDatabase.create({
                id,
                userId,
                productId,
                qty
            })
        }catch(e:any){
            throw new Error(e.message);
        }
    }
}