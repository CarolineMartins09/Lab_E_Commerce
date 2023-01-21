import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { ProductDataBase } from "../data/ProductDatabase";

export class PurchaseController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const { userId, productId, qty } = req.body;

            const purchaseBusiness = new PurchaseBusiness()

            // const priceProduct:any = await ProductBusiness.price(productId)
            
            // const soma:any = priceProduct*qty

            await purchaseBusiness.createPurchase({ userId, productId, qty})

            res.status(200).send("Purchse created successfully!")
        } catch (err: any) {
            res.status(400).send(`${err.message}`)
        }
    }}