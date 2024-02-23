import {api} from "./RoleAPI";
import {AxiosResponse} from "axios";
import {receive} from "../page/Parcel/Create";

export class PostalCode {
    id: number;
    code: string;
    subDistrictId: number;

    constructor() {
        this.id = 0; // default value
        this.code = ""; // default value
        this.subDistrictId = 0; // default value
    }
}

export class SubDistrict {
    id: number;
    thaiName: string;
    districtId: number;
    postalCodes: PostalCode[];

    constructor() {
        this.id = 0; // default value
        this.thaiName = ""; // default value
        this.districtId = 0; // default value
        this.postalCodes = [new PostalCode()]; // initialized with a single default PostalCode
    }
}

export class District {
    id: number;
    thaiName: string;
    provinceId: number;
    subDistricts: SubDistrict[];

    constructor() {
        this.id = 0; // default value
        this.thaiName = ""; // default value
        this.provinceId = 0; // default value
        this.subDistricts = [new SubDistrict()]; // initialized with a single default SubDistrict
    }
}

export class Postal {
    code: string = "";
    subDistrictId: number = 0;
    id: number = 0;


}

export class Province {
    id: number = 0; // Directly setting the initial value
    thaiName: string = "default"; // Directly setting the initial value
}

export const GetPostal = async (subDistrictId: string): Promise<AxiosResponse<District[]>> => {
    const url = `/api/Address/Postal?subDistrictId=${subDistrictId}`;
    const response: AxiosResponse<District[]> = await api.get<District[]>(url);
    return response;
};


export const GetProvince = async (): Promise<AxiosResponse<Province[]>> => {
    const url = `/api/Address/Province`;
    const response: AxiosResponse<Province[]> = await api.get<Province[]>(url);
    return response;
};

export const GetDistrict = async (provinceId: number): Promise<AxiosResponse<District[]>> => {
    const url = `/api/Address/District?provinceId=${provinceId}`;
    const response: AxiosResponse<District[]> = await api.get<District[]>(url);
    return response;
};

export class VendorDelivery{
    id:number = 0;
    name:string = ""
}

export const GetVendorList = async (): Promise<AxiosResponse<VendorDelivery[]>> => {
    const url = `/api/VendorDelivery`;
    const response: AxiosResponse<VendorDelivery[]> = await api.get<VendorDelivery[]>(url);
    return response;
};


export const GetReceiverDetail = async (phoneNumber: string|undefined): Promise<AxiosResponse<receive>> => {
    const url = `api/Customer?phone=${phoneNumber}`;
    const response: AxiosResponse<receive> = await api.get<receive>(url);
    return response;
};