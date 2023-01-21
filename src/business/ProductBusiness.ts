import { ProductDataBase } from "../data/ProductDatabase";

export class ProductBusiness{
    
    createProduct=async({name, price, imageUrl}:any):Promise<void>=>{
        try{
            if(!name||!price ||!imageUrl){
                throw new Error("Body invalid! name or price or imageUrl.");
            }
          
            const id = Date.now().toString()
    
            const productDatabase = new ProductDataBase()
    
            await productDatabase.create({
                id,
                name,
                price,
                imageUrl
            })
    
        }catch(err:any){
            throw new Error(err.message);
        }   
    }

    getAllProducts = async () =>{
        try{
            const productsDatabase = new ProductDataBase()
            const products = await productsDatabase.getAll()

            return products

        }catch(err){
            throw new Error(err.message);
        }
    }
}
