import {BaseContainer} from "../admin/BaseContainer";
import {Box, Grid, Tab, Tabs} from "@mui/material";
import React, {useEffect} from "react";
import {setTitle} from "../../features/Nav/NavSlice";
import pageData from "../../type/PageData.json";
import {useDispatch} from "react-redux";
import {Create} from "./Create";
import {Preparing} from "./Preparing";
import Car from "./Car";
import Print from "./Print";


export interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


 function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export function CreateParcelList(){
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    useEffect(() => {
        dispatch(setTitle(pageData["Create-Parcel"].pageTitle));
        document.title = pageData["Create-Parcel"].pageTitle;

        // eslint-disable-next-line
    }, [dispatch]);




    return (
        <>
            <BaseContainer>
                <Grid rowSpacing={1} columnSpacing={1} container  >
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="สร้างรายการ" {...a11yProps(0)} />
                                <Tab label="เตรียมจัดส่ง" {...a11yProps(1)} />
                                <Tab label="รถ"  />
                                <Tab label="ปริ้นด่วน"  />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                           <Create></Create>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <Preparing></Preparing>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <Car/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <Print/>
                        </CustomTabPanel>
                    </Grid>


                </Grid>
            </BaseContainer>
        </>
    );
}

export function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ paddingTop:2 }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}


