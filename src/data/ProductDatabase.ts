import { CustomError } from "../error/CustomError";
import { CreateProductDTO } from "../model/productDTO";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase {
    private static TABLE_NAME = "labecommerce_products";

    create = async ({ id, name, price, imageUrl }: CreateProductDTO) => {
        try {

            await ProductDataBase.connection.insert({
                id: id,
                name: name,
                price: price,
                image_url: imageUrl
            }).into(ProductDataBase.TABLE_NAME)

        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    getAll = async () => {
        try {

            const result = await ProductDataBase.connection.select().from(ProductDataBase.TABLE_NAME)

            return (result)
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }

    price = async (productId: string) => {
        try {
            const result = await ProductDataBase.connection.raw(`
                  SELECT price FROM ${ProductDataBase.TABLE_NAME} WHERE ${productId}
              `)
            return (result[0][0])
        } catch (err: any) {
            throw new CustomError(err.statusCode, err.message)
        }
    }
}