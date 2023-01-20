import { BaseDatabase } from "./BaseDatabase";

export class ProductDataBase extends BaseDatabase{
    private static TABLE_NAME = "labecommerce_products";

    create = async ({ id, name, price, imageUrl }: any) => {
        try {

            await ProductDataBase.connection.insert({
                id: id,
                name: name,
                price: price,
                image_url: imageUrl
            }).into(ProductDataBase.TABLE_NAME)

        } catch (e: any) {
            throw new Error(`${e.message}  erro user base`);
        }
    }
}