
import axios, {AxiosResponse} from "axios";
import {api} from "./RoleAPI";
export interface UnitOfMeasurement {
    id: number;
    name: string;
}
export const GetUnit = async (): Promise<AxiosResponse<UnitOfMeasurement[]>> => {
    const url = `/api/UnitOfMeasurement`;
    const response: AxiosResponse<UnitOfMeasurement[]> = await api.get<UnitOfMeasurement[]>(url);
    return response;
};