import { ProductDataBase } from "../data/ProductDatabase";
import { CreateProductDTO, InputProductDTO } from "../model/productDTO";
import { generateId } from "../services/idGenerator";

export class ProductBusiness {

    createProduct = async ({ name, price, imageUrl }: InputProductDTO): Promise<void> => {
        try {
            if (!name || !price || !imageUrl) {
                throw new Error("Body invalid! name or price or imageUrl.");
            }

            const id = generateId()

            const productDatabase = new ProductDataBase()

            const product: CreateProductDTO = {
                id: id,
                name: name,
                price: price,
                imageUrl: imageUrl
            }

            await productDatabase.create(product)

        } catch (err: any) {
            throw new Error(err.message);
        }
    }

    getAllProducts = async () => {
        try {
            const productsDatabase = new ProductDataBase()
            const products = await productsDatabase.getAll()

            return products

        } catch (err) {
            throw new Error(err.message);
        }
    }
}
