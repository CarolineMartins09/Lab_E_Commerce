import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { ProductDataBase } from "../data/ProductDatabase";
import { InputPurchaseDTO, InsertPurchaseDTO } from "../model/purchaseDTO";

export class PurchaseController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const { userId, productId, qty } = req.body;

            
            const purchaseBusiness = new PurchaseBusiness()

            // const priceProduct:any = await purchaseBusiness.price(productId)
            
            // const soma:any = priceProduct*qty
            const insertPurchase:InputPurchaseDTO = {
                userId: userId,
                productId: productId,
                qty:qty
            }

            await purchaseBusiness.createPurchase(insertPurchase)

            res.status(200).send("Purchase created successfully!")
        } catch (err: any) {
            res.status(400).send(`${err.message}`)
        }
    }
}