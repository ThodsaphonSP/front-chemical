import {ProductData} from "../page/Product/ProductDetail";
import {api} from "./RoleAPI";

export const CreateProduct = async (data: ProductData) => {
    const url = `api/Product`;
    const respone = await api.post(url, data);
    return respone;
}