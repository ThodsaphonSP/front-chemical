import {Product} from "../page/Product/ProductDetail";
import {api} from "./RoleAPI";

export const CreateProduct = async (data: Product) => {
    const url = ``;
    const respone = await api.post(url, data);
    return respone;
}