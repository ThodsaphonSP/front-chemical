import {AxiosResponse} from "axios";
import {api} from "./RoleAPI";


export class Product {
    name:string = '';
    code:string = '';
    detail:string = '';
    standardPrice:string = '';
    multiplier:string = '';
    quantity:string = '';
    price:number = 0;
    isActive:boolean = true;
    categoryId:string = "";
    substituteProductId:string = "";
    unitOfMeasurementId:string= "";
}

export const GetProduct = async (): Promise<AxiosResponse<Product[]>> => {
    const url = `/api/product`;
    const response: AxiosResponse<Product[]> = await api.get<Product[]>(url);
    return response;
};