import React, { useEffect } from 'react'
import {
    Box,
    Grid,
    Tabs, Tab, Button
} from "@mui/material";
import { BaseContainer } from '../admin/BaseContainer';
import { CustomTabPanel } from '../Parcel/CreateParcelList';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../features/Nav/NavSlice';
import pageData from "../../type/PageData.json";
import Receipt from './Receipt';
import BillingSlip from './BillingSlip';
import OutstandingDebtors from './OutstandingDebtors';
import ReceiveCheck from './ReceiveCheck';
import TaxInvoice from './TaxInvoice';
type Props = {}

function DocumentSales({ }: Props) {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    useEffect(() => {
        dispatch(setTitle(pageData["audit"].pageTitle));
        document.title = pageData["audit"].pageTitle;
    }, [dispatch]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Grid>
            <BaseContainer>
                <Grid rowSpacing={1} columnSpacing={1} container  >
                    <Grid item xs={12}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="ใบเสร็จรับเงิน" />
                                <Tab label="ใบวางบิล/ใบแจ้งหนี้" />
                                <Tab label="ลูกหนี้คงค้าง" />
                                <Tab label="รับเช็ก" />
                                <Tab label="ใบกำกับภาษี" />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <Receipt />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <BillingSlip />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <OutstandingDebtors />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <ReceiveCheck />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            <TaxInvoice/>
                        </CustomTabPanel>
                    </Grid>
                </Grid>
            </BaseContainer>
        </Grid>
    )
}

export default DocumentSales