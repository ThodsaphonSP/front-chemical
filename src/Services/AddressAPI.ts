import {api} from "./RoleAPI";
import {AxiosResponse} from "axios";

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