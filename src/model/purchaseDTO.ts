export interface InputPurchaseDTO{
    userId:string,
    productId:string, 
    qty:number
}

export interface InsertPurchaseDTO{
    id:string
    userId:string,
    productId:string, 
    qty:number,
    totalPrice:number
}