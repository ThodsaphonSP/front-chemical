import {api} from "./RoleAPI";
import {ParcelForm} from "../page/Parcel/Create";
import {User, UserListResponse} from "../type/User";
import {District, PostalCode, Province, SubDistrict, VendorDelivery} from "./AddressAPI";
import {AxiosResponse} from "axios";

export const CreateParcel = async (data: ParcelForm) => {
    const url = `/api/parcel`;
    const response = await api.post(url, data);
    return response;
};

export async function GetParcel(page: number, rowsPerPage: number, firstnameOrLastname: string):Promise<AxiosResponse<ParcelListResponse>> {


    const response: AxiosResponse<ParcelListResponse> = await api
        .get<ParcelListResponse>(`/api/Parcel/getPage?pageNumber=${page}&pageSize=${rowsPerPage}&receiveName=${firstnameOrLastname}`, {
            params: {
                page: page,
                pageSize: rowsPerPage
            }
        });
    return response;
}

export class Parcel {
    id: number = 0;
    customerId: number = 0;
    saleManId: string = "";
    deliveryManId: string | null = "";
    parcelStatus: number =0;
    shippingCoordinator: string | null = "";
    cashOnDelivery: boolean = false;
    saleMan: User | null = null;
    customer: Customer|null = null;
    deliveryVendor: VendorDelivery|null = null;
    deliveryVendorId: number = 0;
    productParcels: any[] = [];
}


export class Customer {
    id: number = 0;
    customerType: number = 0;
    titleId: number | null =0;
    title: string | null = "";
    creditDay: number =0;
    discount: number = 0;
    creditLimit: number = 0;
    accountNo: string | null = "";
    firstName: string = "";
    lastName: string = "";
    phoneNo: string = "";
    addresses: Address|null = null;
    addressId: number = 0;
}

export class Address {
    id: number = 0;
    addressDetail: string = "";
    provinceId: number = 0;
    districtId: number = 0;
    subDistrictId: number = 0;
    postalCodeCodeId: number = 0;
    province: Province|null = null;
    district: District|null = null;
    subDistrict: SubDistrict|null = null;
    postalCode: PostalCode|null = null;
}

export class ParcelListResponse {
    totalCount: number = 0;
    currentPage: number = 1;
    pageSize: number = 10;
    totalPages: number = 1;
    parcels: Parcel[] = [];
}