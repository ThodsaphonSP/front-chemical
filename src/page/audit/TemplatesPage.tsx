import React from 'react'
import { Box, Button, ButtonGroup, Checkbox, FormControl, Grid, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
type Props = {
    DataAPI: { month: string; typeaudit: string; sales: string; count: string; }[];
}
const Text20px = styled(Typography)(({ theme }) => ({
    fontSize: "20px"
}));
const Text14px = styled(Typography)(({ theme }) => ({
    fontSize: "14px"
}));
const Buttonsearch = styled(Button)(({ theme }) => ({
    backgroundColor: '#2E3192',
    WebkitTapHighlightColor: '#2E3192',
    '&:hover': {
        backgroundColor: '#2E3192',
    },
    width: "100px",
    // height:"100%"
    // padding:"0"
}));
const TableCellCustomHead = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    color: "white",

    [theme.breakpoints.up("xs")]: {
        padding: "4px 3px"
    },
    [theme.breakpoints.up("sm")]: {
        padding: "7px 5px"
    }

}));
const TableCellCustomBody = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    color: "#000",

    [theme.breakpoints.up("xs")]: {
        padding: "4px 3px"
    },
    [theme.breakpoints.up("sm")]: {
        padding: "7px 5px"
    }


}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const PrintButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4DBCFA',
    WebkitTapHighlightColor: '#4DBCFA',
    '&:hover': {
        backgroundColor: '#4DBCFA',
    },
    width: "auto",

}));
function TemplatesPage({ DataAPI }: Props) {
    const [entrie, setEntrie] = React.useState("50");
    return (
        <Grid container gap={4}>
            <Text20px>สรุปยอดขาย</Text20px>
            <Text14px>สรุปยอดขายประจำเดือน</Text14px>
            <Grid container alignItems={"center"} gap={"24px"}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                        <DatePicker views={['year']} sx={{ width: "190px" }} />
                    </DemoContainer>
                </LocalizationProvider>
                <Buttonsearch variant="contained">ค้นหา</Buttonsearch>
            </Grid>
            {/* ------------------------------ Table   ------------------------------ */}
            <Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>เดือน</TableCellCustomHead>
                            <TableCellCustomHead>ประเภท</TableCellCustomHead>
                            <TableCellCustomHead>ยอดขาย</TableCellCustomHead>
                            <TableCellCustomHead>จำนวนรายการ</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            DataAPI.map((API) => (
                                <StyledTableRow >
                                    <TableCellCustomBody>{API.month}</TableCellCustomBody>
                                    <TableCellCustomBody>{API.typeaudit}</TableCellCustomBody>
                                    <TableCellCustomBody>{API.sales}</TableCellCustomBody>
                                    <TableCellCustomBody>{API.count}</TableCellCustomBody>
                                    <TableCellCustomBody>
                                        <PrintButton variant="contained">
                                            พิมพ์
                                        </PrintButton>
                                    </TableCellCustomBody>
                                </StyledTableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </Grid>
            {/* ------------------------------ Table   ------------------------------ */}
        </Grid>
    )
}

export default TemplatesPage