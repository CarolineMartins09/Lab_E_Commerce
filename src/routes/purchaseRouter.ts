import express from "express";
import { PurchaseController } from "../controller/PurchaseController";

export const purchaseRouter = express.Router();

const purchaseController = new PurchaseController()

purchaseRouter.post("/purchase", purchaseController.createProduct)