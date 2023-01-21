import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";

export class ProductController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const { name, price, imageUrl } = req.body;

            const productBusiness = new ProductBusiness()

            await productBusiness.createProduct({ name, price, imageUrl })

            res.status(200).send("Product created successfully!")
        } catch (err: any) {
            res.status(400).send(`${err.message}`)
        }
    }

    getAllProducts = async(req:Request, res:Response)=>{
        try{
       

        const productBusiness = new ProductBusiness()

       const products= await productBusiness.getAllProducts()

            res.status(200).send(products)
        }catch(err:any){
            res.status(400).send(`${err.message}`)
    }
}}