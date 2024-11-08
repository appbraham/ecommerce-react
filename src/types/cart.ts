import { IProduct } from "./product";

export interface ICart{
    // id: number;
    product: IProduct;
    quantity: number;
    size: string;
    color: string;
}