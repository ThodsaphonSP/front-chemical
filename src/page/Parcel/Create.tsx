import {
    Autocomplete,
    Button, Checkbox, FormControl, FormControlLabel,
    FormGroup,
    Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Skeleton, TextField,
    Typography
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import React, {useEffect, useState} from "react";
import {red} from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    District,
    GetDistrict,
    GetProvince, GetReceiverDetail,
    GetVendorList,
    PostalCode,
    Province,
    SubDistrict,
    VendorDelivery
} from "../../Services/AddressAPI";
import {AxiosError, AxiosResponse} from "axios";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {GetProduct, Product} from "../../Services/productAPI";

import {CreateParcel} from "../../Services/ParcelAPI";
import {useNavigate} from "react-router-dom";

export type productQuantity = {
    product: Product | null,
    quantity: number
}

export type receive = {
    firstname: string,
    lastname: string,
    phoneNo: string,
    addressText: string,
    province: Province | null,
    district: District | null,
    subDistrict: SubDistrict | null,
    postalCode: PostalCode | null,
    vendorDelivery: VendorDelivery | null,
    saveAddress: boolean,
    cod: boolean
}


export type ParcelForm = {
    sender: {
        firstname: string,
        lastname: string,
        phoneNo: string,
        addressText: string,
        province: Province | null,
        district: District | null,
        subDistrict: SubDistrict | null,
        postalCode: PostalCode | null,
        vendorDelivery: VendorDelivery | null,
        selectProduct: {
            indexNumber: productQuantity | null
        }[],
        saveAddress: boolean

    }
    receive: receive
}


export function Create() {


    const form = useForm<ParcelForm>({
        defaultValues: {
            sender: {
                firstname: '',
                lastname: '',
                phoneNo: '',
                addressText: '',
                vendorDelivery: null,
                province: null,
                district: null,
                subDistrict: null,
                postalCode: null,
                selectProduct: [{
                    indexNumber: null
                }]
            },
            receive: {
                firstname: "",
                lastname:"",
                addressText:"",
                phoneNo:""
            }
        }
    });

    const {register, control, handleSubmit, formState, watch} = form;
    const {errors} = formState;

    const navigate = useNavigate();


    const {fields, append, remove} = useFieldArray({
        name: "sender.selectProduct",
        control
    })

    const [loadReceiver,setLoadReceiver]=useState<boolean>(false);

    const senderProvinceValue = watch("sender.province");

    const receiveProvinceValue = watch("receive.province");


    const [productArray, setProductArray] = useState<Product[]>([])

    const [vendorDelivery, setVendorDelivery] = useState<VendorDelivery[]>([])

    const [senderProvince, setSenderProvince] = useState<Province[]>([])


    const [senderDistrict, setSenderDistrict] = useState<District[]>([]);

    const [senderSubDistrict, setSenderSubDistrict] = useState<SubDistrict[]>([]);
    const [senderPostalCode, setSenderPostalCode] = useState<PostalCode[]>([]);


    const [receiveProvince, setReceiveProvince] = useState<Province[]>([])


    const [receiveDistrict, setReceiveDistrict] = useState<District[]>([]);

    const [receiveSubDistrict, setReceiveSubDistrict] = useState<SubDistrict[]>([]);
    const [receivePostalCode, setReceivePostalCode] = useState<PostalCode[]>([]);


    const searchUser = async (number: string | undefined) => {

        setLoadReceiver(true);

        if (!number) {
            alert("กรุณาใส่เบอร์โทร")
            return
        }
        const response = await GetReceiverDetail(number); // Assume provinceValue contains the province object
        const data: receive = response.data;

        if (data.province){
            setReceiveProvince([new Province(),data.province])
        }else{
            return
        }

        if (data.district){
            setReceiveDistrict([data.district])
        }else{
            return
        }

        if (data.subDistrict){
            setReceiveSubDistrict([data.subDistrict])
        }else{
            return
        }

        if (data.postalCode){
            setReceivePostalCode([data.postalCode])
        }else {
            return;
        }

        //deep merge
        form.reset({
            receive: data
        }, {
            keepDefaultValues: true
        });

        // shallow merge
        //  form.setValue("receive", data,{shouldDirty:true,shouldTouch:true,shouldValidate:true})
        // form.setValue("receive.province",data.province);

        setLoadReceiver(false)

    };


    const fetchVendorDelivery = async (): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response: AxiosResponse<VendorDelivery[]> = await GetVendorList();

            const data: VendorDelivery[] = response.data

            setVendorDelivery(data)


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };

    const fetchProduct = async (): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response: AxiosResponse<Product[]> = await GetProduct();

            const data: Product[] = response.data

            setProductArray(data)


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };

    const fetchProvince = async (): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response = await GetProvince();

            const data: Province[] = response.data

            setSenderProvince(data);
            setReceiveProvince(data);


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };


    useEffect(() => {

        const fetchSenderDisctrict = async (): Promise<void> => {
            if (!senderProvinceValue) { // Use the watched province value
                return;
            }

            try {
                const response = await GetDistrict(senderProvinceValue.id); // Assume provinceValue contains the province object
                const data: District[] = response.data;
                setSenderDistrict(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchSenderDisctrict();
    }, [senderProvinceValue]); // Depend on the watched province value

    useEffect(() => {

        const fetchReceiveDisctrict = async (): Promise<void> => {
            if (!receiveProvinceValue) { // Use the watched province value
                return;
            }

            try {
                const response = await GetDistrict(receiveProvinceValue.id); // Assume provinceValue contains the province object
                const data: District[] = response.data;
                setReceiveDistrict(data);
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };
        fetchReceiveDisctrict();
    }, [receiveProvinceValue]); // Depend on the watched province value


    useEffect(() => {
        fetchProvince();
        fetchVendorDelivery();
        fetchProduct();

    }, [])

    const [searchNumberValue, setSearchNumberValue] = useState<string>("");

    const onSubmit = (data: ParcelForm) => {
        console.log("Form submitted", data)
        workOnsubmit(data);
    }

    const workOnsubmit = async (formValue: ParcelForm) => {
        //create
        try {
            const response = await CreateParcel(formValue);
            if (response.status === 200) { // or any other status that means success.
                alert("บันทึกข้อมูลพัสดุ สำเร็จ")
                navigate("/");
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError && error.response) {
                // Check for status code 500
                if (error.response.status === 500) {
                    console.error('Server Error: 500');
                    alert(" กรุณาเช็คข้อมูล หรือ ติดต่อ ผู้ดูแลระบบ")
                }
            }
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
                <Grid rowSpacing={2} columnSpacing={2} container={true}>
                    <Grid item={true} xs={12}>
                        <Typography>ผู้ส่ง (ที่อยู่รับพัสดุ)</Typography>

                    </Grid>
                    <Grid columnSpacing={2} container={true} item={true} xs={12}>
                        <Grid item={true} md={"auto"}>
                            <Button sx={{color: "white", backgroundColor: "#2196F3"}}
                            >ค้นหาที่อยู่ผู้ส่ง
                            </Button>
                        </Grid>
                        <Grid item={true} xs={6} md={3}>
                            <Controller
                                name="sender.vendorDelivery"
                                control={control}
                                rules={{
                                    required: "กรุณาเลือกขนส่ง"
                                }}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <Autocomplete
                                        fullWidth={true}
                                        size="small"
                                        id="vendor-delivery"
                                        options={vendorDelivery}
                                        getOptionLabel={(option) => option.name || ''}
                                        value={value || null} // Ensure value is never undefined
                                        isOptionEqualToValue={(option, value) => option.id === value.id} // Assuming each option has a unique `id` property
                                        onChange={(event, item) => onChange(item)}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="เลือกขนส่ง"
                                                error={!!error}
                                                helperText={error ? error.message : null}
                                            />
                                        )}
                                    />
                                )}
                            />
                        </Grid>
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={4}>
                        <TextField size={"small"} fullWidth={true}
                                   error={!!errors.sender?.firstname?.message}
                                   id="firstname"
                                   label="ชื่อ"
                                   {...register("sender.firstname", {
                                       required: {
                                           value: true,
                                           message: "กรุณาใส่ชื่อ"
                                       }
                                   })}
                                   helperText={errors.sender?.firstname?.message}

                        />
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={4}>
                        <TextField size={"small"} fullWidth={true}
                                   error={!!errors.sender?.lastname?.message}
                                   id="lastName"
                                   label="นามสกุล"
                                   {...register("sender.lastname", {
                                       required: {
                                           value: true,
                                           message: "กรุณาใส่นามสกุล"
                                       }
                                   })}
                                   helperText={errors.sender?.lastname?.message}
                        />
                    </Grid>
                    <Grid item={true} xs={12} sm={12} md={4}>
                        <TextField size={"small"} fullWidth={true}
                                   error={!!errors.sender?.phoneNo?.message}
                                   id="phoneNo"
                                   label="หมายเลขโทรศัพท์"
                                   {...register("sender.phoneNo", {
                                       required: {
                                           value: true,
                                           message: "กรุณาใส่หมายเลขโทรศัพท์"
                                       },
                                       pattern: {
                                           value: /^\d{10}$/,
                                           message: "ใส่หมายเลขโทรศัพท์ให้ถูกต้องความยาว 10 ตัวเลข"
                                       }
                                   })}
                                   helperText={errors.sender?.phoneNo?.message}
                        />
                    </Grid>
                    <Grid item={true} xs={12} md={12}>
                        <TextField size={"small"} fullWidth={true}
                                   id="address"
                                   label="ที่อยู่"
                                   {...register("sender.addressText", {
                                       required: {
                                           value: true,
                                           message: "กรุณาใส่ที่อยู่"
                                       }
                                   })}
                                   error={!!errors.sender?.addressText?.message}
                                   helperText={errors.sender?.addressText?.message}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Controller
                            name="sender.province"
                            control={control}
                            rules={{required: "กรุณาใส่จังหวัด"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="จังหวัด"
                                    options={senderProvince}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change
                                        setSenderDistrict([]);
                                        setSenderSubDistrict([]);
                                        setSenderPostalCode([]);
                                        // Reset related fields in react-hook-form as needed
                                        form.setValue("sender.district", null);
                                        form.setValue("sender.subDistrict", null);
                                        form.setValue("sender.postalCode", null);
                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="จังหวัด"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item={true} xs={12} sm={6} md={3}>
                        <Controller
                            name="sender.district"
                            control={control}
                            rules={{required: "กรุณาใส่อำเภอ"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="อำเภอ"
                                    options={senderDistrict}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                        if (newValue) {

                                            const subDistricts = newValue.subDistricts;

                                            if (subDistricts) {
                                                setSenderSubDistrict(subDistricts);
                                            } else {
                                                setSenderSubDistrict([]);
                                                setSenderPostalCode([]);
                                                // Reset related fields in react-hook-form as needed
                                                form.setValue("sender.subDistrict", null);
                                                form.setValue("sender.postalCode", null);
                                            }
                                        }

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="อำเภอ"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={3}>
                        <Controller
                            name="sender.subDistrict"
                            control={control}
                            rules={{required: "กรุณาใส่ตำบล"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="subdistrict"
                                    options={senderSubDistrict}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                        if (newValue) {

                                            const postalCodes = newValue.postalCodes;

                                            if (postalCodes) {
                                                setSenderPostalCode(postalCodes);
                                            } else {
                                                setSenderPostalCode([]);
                                                // Reset related fields in react-hook-form as needed
                                                form.setValue("sender.postalCode", null);
                                            }
                                        }

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="ตำบล"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={3}>
                        <Controller
                            name="sender.postalCode"
                            control={control}
                            rules={{required: "กรุณาใส่รหัสไปรษณีย์"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="postalCode"
                                    options={senderPostalCode}
                                    getOptionLabel={(option) => option.code}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="ไปรษณีย์"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />
                    </Grid>


                    <Grid item={true} xs={12}>
                        <Button variant="outlined" startIcon={<AddCircleIcon/>}
                                onClick={() => {


                                    const temp: productQuantity = {product: null, quantity: 0}
                                    append({indexNumber: temp})
                                }}
                        >
                            เพิ่มสินค้า และ จำนวน
                        </Button>
                    </Grid>

                    {fields.map((field, index) => (
                        <React.Fragment key={field.id || index}>
                            <Grid item={true} xs={8}>
                                <Controller
                                    name={`sender.selectProduct.${index}.indexNumber.product`}
                                    control={control}
                                    rules={{required: "กรุณาเลือกสินค้า"}}
                                    render={({field: {onChange, value}, fieldState: {error}}) => (
                                        <Autocomplete
                                            size="small"
                                            id={`product-${index}`}
                                            options={productArray}
                                            getOptionLabel={(option: Product) => option.name}
                                            value={value || null}
                                            onChange={(event, newValue) => onChange(newValue)}
                                            isOptionEqualToValue={(option, value) => option.code === value.code}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="สินค้า"
                                                    error={!!error}
                                                    helperText={error ? error.message : null}
                                                />
                                            )}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item={true} xs={2}>
                                <TextField
                                    error={Boolean(errors?.sender?.selectProduct?.[index]?.indexNumber?.quantity)}
                                    helperText={errors?.sender?.selectProduct?.[index]?.indexNumber?.quantity?.message}
                                    size="small"
                                    id={`quantity-${index}`}
                                    type="number"
                                    label="จำนวน"
                                    variant="outlined"
                                    {...register(`sender.selectProduct.${index}.indexNumber.quantity`,
                                        {
                                            required: {
                                                value: true,
                                                message: "กรุณาระบะจำนวนสินค้า"
                                            },
                                            min: {
                                                value: 1,
                                                message: "ใส่จำนวนมากกว่า 0"
                                            }, valueAsNumber: true
                                        })}
                                />
                            </Grid>
                            {index > 0 && (
                                <Grid item={true} xs={2}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteForeverIcon/>}
                                        onClick={() => remove(index)}
                                        sx={{
                                            color: red[500],
                                            borderColor: red[500],
                                            "&:hover": {borderColor: red[700], bgcolor: red[50]}
                                        }}
                                    >
                                        ลบ
                                    </Button>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}


                    <Grid xs={12} item={true}>
                        <Controller
                            name="sender.saveAddress"
                            control={control}
                            defaultValue={false} // Default value for the checkbox
                            render={({field}) => (
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field} // Spread field props to Checkbox
                                                checked={field.value} // Use field.value for Checkbox's checked state
                                                onChange={(e) => field.onChange(e.target.checked)} // Update form value on change
                                            />
                                        }
                                        label="บันทึกที่อยู่" // Your label text here
                                    />
                                </FormGroup>
                            )}
                        />
                    </Grid>


                </Grid>

                <Grid sx={{mt: 10}} rowSpacing={2} columnSpacing={2} container={true}>
                    <Grid item={true} xs={12}>
                        <Typography>ผู้รับ (ที่อยู่ในการจัดส่ง)</Typography>

                    </Grid>
                    <Grid item={true} xs={12}>
                        <FormControl size={"small"} sx={{width: '25ch'}} variant="outlined">
                            <InputLabel htmlFor="phoneNumber">ค้นหา หมายเลขโทรศัพท์</InputLabel>
                            <OutlinedInput
                                id="phoneNumber"
                                type={'tel'}
                                value={searchNumberValue}
                                onChange={(event) => setSearchNumberValue(event.target.value)}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => searchUser(searchNumberValue)}
                                            aria-label="toggle password visibility"


                                            edge="end"
                                        >
                                            <SearchIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Grid>

                    <Grid item={true} xs={12} sm={6} md={4}>

                        {loadReceiver ? (
                            <Skeleton variant="rectangular"  height={40}/> // adjust height to match the TextField
                        ) : (
                            <Controller
                                name="receive.firstname"
                                control={control}
                                rules={{ required: "กรุณาใส่ชื่อ" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="ชื่อ"
                                        error={!!errors.receive?.firstname}
                                        helperText={errors.receive?.firstname?.message}
                                    />
                                )}
                            />
                        )}
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={4}>
                        {loadReceiver ? (<Skeleton variant="rectangular"  height={40}/> ):(
                            <Controller
                                name="receive.lastname"
                                control={control}
                                rules={{ required: "กรุณาใส่นามสกุล" }}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="นามสกุล"
                                        error={!!errors.receive?.lastname}
                                        helperText={errors.receive?.lastname?.message}
                                    />
                                )}
                            />
                        )}
                    </Grid>
                    <Grid item={true} xs={12} sm={12} md={4}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                            <Controller
                                name="receive.phoneNo"
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "กรุณาใส่หมายเลขโทรศัพท์"
                                    },
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "ใส่หมายเลขโทรศัพท์ให้ถูกต้องความยาว 10 ตัวเลข"
                                    }}}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        size="small"
                                        fullWidth
                                        label="หมายเลขโทรศัพท์"
                                        error={!!errors.receive?.phoneNo}
                                        helperText={errors.receive?.phoneNo?.message}
                                    />
                                )}
                            />
                        )}
                    </Grid>
                    <Grid item={true} xs={12} md={12}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.addressText"
                            control={control}
                            rules={{ required: "กรุณาใส่ที่อยู่" }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    size="small"
                                    fullWidth
                                    label="ที่อยู่"
                                    error={!!errors.receive?.addressText}
                                    helperText={errors.receive?.addressText?.message}
                                />
                            )}
                        />)}

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.province"
                            control={control}
                            rules={{required: "กรุณาใส่จังหวัด"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="rจังหวัด"
                                    options={receiveProvince}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change
                                        setReceiveDistrict([]);
                                        setReceiveSubDistrict([]);
                                        setReceivePostalCode([]);
                                        // Reset related fields in react-hook-form as needed
                                        form.setValue("receive.district", null);
                                        form.setValue("receive.subDistrict", null);
                                        form.setValue("receive.postalCode", null);
                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="จังหวัด"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />)}
                    </Grid>

                    <Grid item={true} xs={12} sm={6} md={3}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.district"
                            control={control}
                            rules={{required: "กรุณาใส่อำเภอ"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="rอำเภอ"
                                    options={receiveDistrict}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                        if (newValue) {

                                            const subDistricts = newValue.subDistricts;

                                            if (subDistricts) {
                                                setReceiveSubDistrict(subDistricts);
                                            } else {
                                                setReceiveSubDistrict([]);
                                                setReceivePostalCode([]);
                                                // Reset related fields in react-hook-form as needed
                                                form.setValue("receive.subDistrict", null);
                                                form.setValue("receive.postalCode", null);
                                            }
                                        }

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="อำเภอ"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />)}
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={3}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.subDistrict"
                            control={control}
                            rules={{required: "กรุณาใส่ตำบล"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="rsubdistrict"
                                    options={receiveSubDistrict}
                                    getOptionLabel={(option) => option.thaiName}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                        if (newValue) {

                                            const postalCodes = newValue.postalCodes;

                                            if (postalCodes) {
                                                setReceivePostalCode(postalCodes);
                                            } else {
                                                setReceivePostalCode([]);
                                                // Reset related fields in react-hook-form as needed
                                                form.setValue("sender.postalCode", null);
                                            }
                                        }

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="ตำบล"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />)}
                    </Grid>
                    <Grid item={true} xs={12} sm={6} md={3}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.postalCode"
                            control={control}
                            rules={{required: "กรุณาใส่รหัสไปรษณีย์"}} // Add validation rules as needed
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <Autocomplete
                                    size="small"
                                    id="rpostalCode"
                                    options={receivePostalCode}
                                    getOptionLabel={(option) => option.code}
                                    value={value || null}
                                    onChange={(event, newValue) => {
                                        onChange(newValue); // Inform react-hook-form of the change

                                    }}
                                    isOptionEqualToValue={(option, value) => option.id === value.id}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="ไปรษณีย์"
                                            error={!!error}
                                            helperText={error ? error.message : null}
                                        />
                                    )}
                                />
                            )}
                        />)}
                    </Grid>


                    <Grid xs={12} item={true}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.saveAddress"
                            control={control}
                            defaultValue={true} // Default value for the checkbox
                            render={({field}) => (
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field} // Spread field props to Checkbox
                                                checked={field.value} // Use field.value for Checkbox's checked state
                                                onChange={(e) => field.onChange(e.target.checked)} // Update form value on change
                                            />
                                        }
                                        label="บันทึกที่อยู่" // Your label text here
                                    />
                                </FormGroup>
                            )}
                        />)}
                    </Grid>

                    <Grid xs={12} item={true}>
                        {loadReceiver?(<Skeleton variant={"rectangular"} height={40}/> ):(
                        <Controller
                            name="receive.cod"
                            control={control}
                            defaultValue={false} // Default value for the checkbox
                            render={({field}) => (
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field} // Spread field props to Checkbox
                                                checked={field.value} // Use field.value for Checkbox's checked state
                                                onChange={(e) => field.onChange(e.target.checked)} // Update form value on change
                                            />
                                        }
                                        label="เก็บเงินปลายทาง" // Your label text here
                                    />
                                </FormGroup>
                            )}
                        />)}
                    </Grid>
                </Grid>


                <DevTool control={control}></DevTool>
                <Grid item={true} xs={12}>
                    <Button variant="outlined" type={"submit"}>ตกลง</Button>
                </Grid>


            </form>
        </>
    );
}