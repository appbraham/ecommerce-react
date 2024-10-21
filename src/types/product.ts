
interface ICategory {
    id: number;
    image: string;
    name: string;
}

export interface IProduct {
    id: number;
    category: ICategory;
    description?: string;
    price: number;
    title: string;
    images: string[];
}