import {Box, Button, Grid, Tab, Tabs} from "@mui/material";
import React from "react";
import {CustomTabPanel} from "./CreateParcelList";
import {StatusTab} from "./StatusTab";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';


export function Preparing() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
            id: `status-tab-${index}`,
            'aria-controls': `status-tabpanel-${index}`,
        };
    }

    return (<>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label={
                    <Grid columnSpacing={2} container={true}>
                        <Grid item={true} xs={6}>ทั้งหมด</Grid>
                        <Grid item={true} xs={6}>20</Grid>
                    </Grid>}
                ></Tab>
                <Tab label={<Box component={"div"}>รอเข้ารับ <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>พัสดุเข้าระบบ <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>อยู่ระหว่างขนส่ง <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>กำลังนำส่ง <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>จัดส่งสำเร็จ <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>พัสดุตีกลับ <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>ส่งคืนสำเร็จ <Box component={"span"}>20</Box></Box>}></Tab>
                <Tab label={<Box component={"div"}>ชำระเงินคืนสำเร็จ <Box component={"span"}>20</Box></Box>}></Tab>

            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            1
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
            Item Two
        </CustomTabPanel>
    </>)
}


