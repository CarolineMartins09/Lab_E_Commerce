import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { InputPurchaseDTO} from "../model/purchaseDTO";

export class PurchaseController {
    createProduct = async (req: Request, res: Response) => {
        try {
            const { userId, productId, qty } = req.body;

            const insertPurchase:InputPurchaseDTO = {
                userId: userId,
                productId: productId,
                qty:qty
            }
            const purchaseBusiness = new PurchaseBusiness()

            await purchaseBusiness.createPurchase(insertPurchase)

            res.status(200).send("Purchase created successfully!")
        } catch (err: any) {
            res.status(err.statusCode || 400).send(err.message || err.sqlMessage)
        }
    }
}