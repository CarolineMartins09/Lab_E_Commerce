import express from "express";
import { ProductController } from "../controller/ProductController";


export const productRouter = express.Router();

const productController = new ProductController()

productRouter.post("/products", productController.createProduct)

productRouter.get("/products", productController.getAllProducts)