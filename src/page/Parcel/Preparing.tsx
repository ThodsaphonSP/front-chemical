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
                <StatusTab label="เตรียมส่ง" icon={<AccessAlarmIcon/>} badgeContent={4} {...a11yProps(1)} />
                <Tab label={<Grid columnSpacing={1} container={true}>
                    <Grid item={true} xs={6}>a</Grid>
                    <Grid item={true} xs={6}>20</Grid>
                </Grid>}></Tab>
                <Box><Button {...a11yProps(0)}>111</Button></Box>


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


