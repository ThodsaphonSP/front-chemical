import {api} from "./RoleAPI";
import {ParcelForm} from "../page/Parcel/Create";

export const CreateParcel = async (data: ParcelForm) => {
    const url = `/api/parcel`;
    const response = await api.post(url, data);
    return response;
};