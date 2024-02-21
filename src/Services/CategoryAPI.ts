import axios, {AxiosResponse} from "axios";
import {api} from "./RoleAPI";


export interface Category {
    name: string;
    products: any;
    productMoveHistories: any;
    id: number;
    createdDate: string;
    createdById: string;
    updatedDate: string;
    updatedBy: any;
    isActive: boolean;
}


export const GetCategory = async (): Promise<AxiosResponse<Category[]>> => {
    const url = `/api/Category`;
    const response: AxiosResponse<Category[]> = await api.get<Category[]>(url);
    return response;
};
