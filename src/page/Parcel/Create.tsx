import {
    Autocomplete,
    Button, Checkbox,
    FormControl, FormControlLabel,
    FormGroup,
    Grid, IconButton, InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import {District, GetDistrict, GetProvince, Province} from "../../Services/AddressAPI";


export function Create() {


    const [deliveryVendor, setDeliveryVendor] = useState<string>("10");

    const [senderProvince, setSenderProvince] = useState<Province[]>([])

    const [senderSelectedProvince, setSenderSelectedProvince] = useState<Province | null>();

    const [senderDistrict, setSenderDistrict] = useState<District[]>([])


    const handleDeliveryVendor = (event: SelectChangeEvent) => {
        setDeliveryVendor(event.target.value)
    };

    const handSaveAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIssSaveAddress(event.target.checked);
    };

    const [isSaveAddress, setIssSaveAddress] = useState(false);
    const searchReceive = () => {

    };
    const handleCOD = () => {

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
        // setRoleLoading(true);
        try {
            if (!senderSelectedProvince) {
                return;
            }

            const response = await GetDistrict(senderSelectedProvince?.id);

            const data: District[] = response.data

            setSenderDistrict(data)


        } catch (error) {
            console.error('Failed to fetch data:', error);
        }

    };

    useEffect(() => {

        fetchSenderDisctrict();

    }, [senderSelectedProvince])

    useEffect(() => {
        fetchSenderProvince();

    }, [])
    const [senderSelectedDistrict, setSenderSelectedDistrict] = useState<District|null>(null);

    return (
        <>
            <Grid rowSpacing={2} columnSpacing={2} container={true}>
                <Grid item={true} xs={12}>
                    <Typography>ผู้ส่ง (ที่อยู่รับพัสดุ)</Typography>

                </Grid>
                <Grid columnSpacing={2} container={true} item={true} xs={12}>
                    <Grid item={true}>
                        <Button sx={{color: "white", backgroundColor: "#2196F3"}}
                        >ค้นหาที่อยู่ผู้ส่ง
                        </Button>
                    </Grid>
                    <Grid item={true}>
                        <FormControl size={"small"} sx={{minWidth: "150px"}}>
                            <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={deliveryVendor}
                                label="ขนส่ง"
                                onChange={handleDeliveryVendor}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={4}>
                    <TextField size={"small"} fullWidth={true}
                               error
                               id="firstname"
                               label="ชื่อ"
                               defaultValue="Hello World"
                               helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item={true} xs={12} sm={6} md={4}>
                    <TextField size={"small"} fullWidth={true}
                               error
                               id="lastName"
                               label="นามสกุล"
                               defaultValue="Hello World"
                               helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item={true} xs={12} sm={12} md={4}>
                    <TextField size={"small"} fullWidth={true}
                               error
                               id="phoneNo"
                               label="หมายเลขโทรศัพท์"
                               defaultValue="Hello World"
                               helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item={true} xs={12} md={12}>
                    <TextField size={"small"} fullWidth={true}
                               error
                               id="address"
                               label="ที่อยู่"
                               defaultValue="Hello World"
                               helperText="Incorrect entry."
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        size={"small"}
                        disablePortal
                        id="จังหวัด"
                        options={senderProvince}
                        value={senderSelectedProvince || null} // Ensure value is null if undefined
                        getOptionLabel={(option) => option.thaiName}
                        isOptionEqualToValue={(option, value) => option.id === value.id} // Assuming each option has a unique `id` property
                        onChange={(event, value) => {
                            setSenderSelectedProvince(value || null); // Set the selected province
                            setSenderSelectedDistrict(null); // Reset the selected district to null or your default state
                        }}
                        renderInput={(params) => <TextField {...params} label="จังหวัด" />}
                    />
                </Grid>
                <Grid item={true} xs={12} sm={6} md={3}>
                    <Autocomplete
                        size={"small"}
                        disablePortal
                        id="district"
                        options={senderDistrict}
                        value={senderSelectedDistrict || null} // Ensure value is null if undefined
                        getOptionLabel={(option: District) => option.thaiName}
                        isOptionEqualToValue={(option, value) => option.id === value.id} // Assuming each option has a unique `id` property
                        onChange={(event, value) => setSenderSelectedDistrict(value || null)}
                        renderInput={(params) => <TextField {...params} label="อำเภอ"/>}
                    />
                </Grid>
                <Grid item={true} xs={12} sm={6} md={3}>
                    <FormControl fullWidth={true} size={"small"}>
                        <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={deliveryVendor}
                            label="ขนส่ง"
                            onChange={handleDeliveryVendor}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={3}>
                    <FormControl fullWidth={true} size={"small"}>
                        <InputLabel id="demo-simple-select-label">เลือกขนส่ง</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={deliveryVendor}
                            label="ขนส่ง"
                            onChange={handleDeliveryVendor}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

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

        </>
    );
}