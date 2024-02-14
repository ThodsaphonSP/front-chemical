import {BaseContainer} from "../admin/BaseContainer";
import {Box, Grid, Tab, Tabs, Typography} from "@mui/material";
import React, {useEffect} from "react";
import {setTitle} from "../../features/Nav/NavSlice";
import pageData from "../../type/PageData.json";
import {useDispatch} from "react-redux";
import {Create} from "./Create";


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
                <Grid rowSpacing={1} columnSpacing={1} container component="form" >
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                <Tab label="Item Three" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <Create value={value} index={0}>
                            Item One
                        </Create>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </Grid>

                </Grid>
            </BaseContainer>
        </>
    );
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


