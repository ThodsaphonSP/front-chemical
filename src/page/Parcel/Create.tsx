import {
    Autocomplete,
    Button, Checkbox, FormControlLabel,
    FormGroup,
    Grid, IconButton,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {  red } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
    District,
    GetDistrict,
    GetProvince,
    GetVendorList,
    PostalCode,
    Province,
    SubDistrict,
    VendorDelivery
} from "../../Services/AddressAPI";
import {AxiosResponse} from "axios";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {DevTool} from "@hookform/devtools";
import {GetProduct, Product} from "../../Services/productAPI";

export type productQuantity = {
    product: Product | null,
    quantity: number
}

type FormValues = {
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
        }[]

    }
}


export function Create() {

    const primary = red[500]; // #f44336
    const form = useForm<FormValues>({
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
            }
        }
    });

    const {register, control, handleSubmit, formState, watch} = form;
    const {errors} = formState;

    const [productQuantity, setProductQuantity] = useState<number>(0);

    const {fields, append, remove} = useFieldArray({
        name: "sender.selectProduct",
        control
    })

    const provinceValue = watch("sender.province");

    const [productSelected, setProductSelected] = useState<Product | null>(null);

    const [productArray, setProductArray] = useState<Product[]>([])

    const [vendorDelivery, setVendorDelivery] = useState<VendorDelivery[]>([])

    const [senderProvince, setSenderProvince] = useState<Province[]>([])


    const [senderDistrict, setSenderDistrict] = useState<District[]>([]);

    const [senderSubDistrict, setSenderSubDistrict] = useState<SubDistrict[]>([]);
    const [senderPostalCode, setSenderPostalCode] = useState<PostalCode[]>([]);


    const handSaveAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIssSaveAddress(event.target.checked);
    };

    const [isSaveAddress, setIssSaveAddress] = useState(false);


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

    const fetchSenderProvince = async (): Promise<void> => {
        // setRoleLoading(true);
        try {
            const response = await GetProvince();

            const data: Province[] = response.data

            setSenderProvince(data)


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };


    const fetchSenderDisctrict = async (): Promise<void> => {
        if (!provinceValue) { // Use the watched province value
            return;
        }

        try {
            const response = await GetDistrict(provinceValue.id); // Assume provinceValue contains the province object
            const data: District[] = response.data;
            setSenderDistrict(data);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };


    useEffect(() => {
        fetchSenderDisctrict();
    }, [provinceValue]); // Depend on the watched province value


    useEffect(() => {
        fetchSenderProvince();
        fetchVendorDelivery();
        fetchProduct();

    }, [])

    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data)
    }


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
                                                value:true,
                                                message:"กรุณาระบะจำนวนสินค้า"
                                            },
                                            min:{
                                                value:1,
                                                message:"ใส่จำนวนมากกว่า 0"
                                            }
                                        })}
                                />
                            </Grid>
                            {index > 0 && (
                                <Grid item={true} xs={2}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<DeleteForeverIcon />}
                                        onClick={() => remove(index)}
                                        sx={{ color: red[500], borderColor: red[500], "&:hover": { borderColor: red[700], bgcolor: red[50] } }}
                                    >
                                        ลบ
                                    </Button>
                                </Grid>
                            )}
                        </React.Fragment>
                    ))}



                    <Grid xs={12} item={true}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={isSaveAddress} // Use `checked` to control the component
                                        onChange={handSaveAddress} // Update the state based on change
                                    />
                                }
                                label="บันทึกที่อยู่"
                            />
                        </FormGroup>
                    </Grid>

                </Grid>

                {/*<Grid sx={{mt:10}} rowSpacing={2} columnSpacing={2} container={true}>*/}
                {/*    <Grid item={true} xs={12}>*/}
                {/*        <Typography>ผู้รับ (ที่อยู่ในการจัดส่ง)</Typography>*/}

                {/*    </Grid>*/}
                {/*    <Grid   item={true} xs={12}>*/}
                {/*        <FormControl size={"small"} sx={{  width: '25ch' }} variant="outlined">*/}
                {/*            <InputLabel htmlFor="phoneNumber">ค้นหา หมายเลขโทรศัพท์</InputLabel>*/}
                {/*            <OutlinedInput*/}
                {/*                id="phoneNumber"*/}
                {/*                type={ 'tel' }*/}
                {/*                endAdornment={*/}
                {/*                    <InputAdornment position="end">*/}
                {/*                        <IconButton*/}
                {/*                            aria-label="toggle password visibility"*/}
                {/*                            onClick={searchReceive}*/}

                {/*                            edge="end"*/}
                {/*                        >*/}
                {/*                            <SearchIcon/>*/}
                {/*                        </IconButton>*/}
                {/*                    </InputAdornment>*/}
                {/*                }*/}
                {/*                label="Password"*/}
                {/*            />*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={4}>*/}
                {/*        <TextField size={"small"} fullWidth={true}*/}
                {/*                   error*/}
                {/*                   id="firstname"*/}
                {/*                   label="ชื่อ"*/}
                {/*                   defaultValue="Hello World"*/}
                {/*                   helperText="Incorrect entry."*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={4}>*/}
                {/*        <TextField size={"small"} fullWidth={true}*/}
                {/*                   error*/}
                {/*                   id="lastName"*/}
                {/*                   label="นามสกุล"*/}
                {/*                   defaultValue="Hello World"*/}
                {/*                   helperText="Incorrect entry."*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={12} md={4}>*/}
                {/*        <TextField size={"small"} fullWidth={true}*/}
                {/*                   error*/}
                {/*                   id="phoneNo"*/}
                {/*                   label="หมายเลขโทรศัพท์"*/}
                {/*                   defaultValue="Hello World"*/}
                {/*                   helperText="Incorrect entry."*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} md={12}>*/}
                {/*        <TextField size={"small"} fullWidth={true}*/}
                {/*                   error*/}
                {/*                   id="address"*/}
                {/*                   label="ที่อยู่"*/}
                {/*                   defaultValue="Hello World"*/}
                {/*                   helperText="Incorrect entry."*/}
                {/*        />*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={3}>*/}
                {/*        <FormControl fullWidth={true} size={"small"} >*/}
                {/*            <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>*/}
                {/*            <Select*/}
                {/*                labelId="demo-simple-select-label"*/}
                {/*                id="demo-simple-select"*/}
                {/*                value={deliveryVendor}*/}
                {/*                label="ขนส่ง"*/}
                {/*                onChange={handleDeliveryVendor}*/}
                {/*            >*/}
                {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*            </Select>*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={3}>*/}
                {/*        <FormControl fullWidth={true} size={"small"} >*/}
                {/*            <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>*/}
                {/*            <Select*/}
                {/*                labelId="demo-simple-select-label"*/}
                {/*                id="demo-simple-select"*/}
                {/*                value={deliveryVendor}*/}
                {/*                label="ขนส่ง"*/}
                {/*                onChange={handleDeliveryVendor}*/}
                {/*            >*/}
                {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*            </Select>*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={3}>*/}
                {/*        <FormControl fullWidth={true} size={"small"} >*/}
                {/*            <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>*/}
                {/*            <Select*/}
                {/*                labelId="demo-simple-select-label"*/}
                {/*                id="demo-simple-select"*/}
                {/*                value={deliveryVendor}*/}
                {/*                label="ขนส่ง"*/}
                {/*                onChange={handleDeliveryVendor}*/}
                {/*            >*/}
                {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*            </Select>*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}
                {/*    <Grid item={true} xs={12} sm={6} md={3}>*/}
                {/*        <FormControl fullWidth={true} size={"small"} >*/}
                {/*            <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>*/}
                {/*            <Select*/}
                {/*                labelId="demo-simple-select-label"*/}
                {/*                id="demo-simple-select"*/}
                {/*                value={deliveryVendor}*/}
                {/*                label="ขนส่ง"*/}
                {/*                onChange={handleDeliveryVendor}*/}
                {/*            >*/}
                {/*                <MenuItem value={10}>Ten</MenuItem>*/}
                {/*                <MenuItem value={20}>Twenty</MenuItem>*/}
                {/*                <MenuItem value={30}>Thirty</MenuItem>*/}
                {/*            </Select>*/}
                {/*        </FormControl>*/}
                {/*    </Grid>*/}

                {/*    /!*<Grid xs={12} item={true}>*!/*/}
                {/*    /!*    <FormGroup>*!/*/}
                {/*    /!*        <FormControlLabel*!/*/}
                {/*    /!*            control={*!/*/}
                {/*    /!*                <Checkbox*!/*/}
                {/*    /!*                    defaultChecked={isSaveAddress}*!/*/}
                {/*    /!*                    onChange={handSaveAddress}*!/*/}
                {/*    /!*                />*!/*/}
                {/*    /!*            }*!/*/}
                {/*    /!*            label="บันทึกที่อยู่"*!/*/}
                {/*    /!*        />*!/*/}
                {/*    /!*        <FormControlLabel*!/*/}
                {/*    /!*            control={*!/*/}
                {/*    /!*                <Checkbox*!/*/}
                {/*    /!*                    defaultChecked={isSaveAddress}*!/*/}
                {/*    /!*                    onChange={handleCOD}*!/*/}
                {/*    /!*                />*!/*/}
                {/*    /!*            }*!/*/}
                {/*    /!*            label="เก็บเงินปลายทาง"*!/*/}
                {/*    /!*        />*!/*/}
                {/*    /!*    </FormGroup>*!/*/}
                {/*    /!*</Grid>*!/*/}

                {/*</Grid>*/}
                <DevTool control={control}></DevTool>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}