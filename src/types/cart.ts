import { IProduct } from "./product";

export interface ICart{
    id: string;
    product: IProduct;
    quantity: number;
    color: string;
    size: string;
}