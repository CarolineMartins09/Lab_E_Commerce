import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { InputProductDTO } from "../model/productDTO"

export class ProductController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const { name, price, imageUrl } = req.body;

            const input: InputProductDTO = {
                name: name,
                price: price,
                imageUrl: imageUrl
            }

            const productBusiness = new ProductBusiness()

            await productBusiness.createProduct(input)

            res.status(200).send("Product created successfully!")
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }

    getAllProducts = async (req: Request, res: Response) => {
        try {


            const productBusiness = new ProductBusiness()

            const products = await productBusiness.getAllProducts()

            res.status(200).send(products)
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}