import axios, {AxiosResponse} from "axios";
import {Role} from "../type/Role";
import {Company} from "../type/User";

// Create an axios instance
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            // If response is 401, remove the token
            api.defaults.headers.common['Authorization'] = null;
        }
        return Promise.reject(error);
    }
);
export async function GetRoleAPI(name: string) {
    const response = await api
        .get<Role[]>(`api/role?name=${name}`);
    return response;
}


export async function GetCompanyAPI(name: string):Promise<AxiosResponse<Company[]>> {
    const response = await api
        .get<Company[]>(`api/company?name=${name}`);
    return response;
}