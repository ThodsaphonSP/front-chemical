import React from 'react'
import { Box, Button, ButtonGroup, FormControl, Grid, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
type Props = {}
const Text20px = styled(Typography)(({ theme }) => ({
    fontSize: "20px"
}));
const Text14px = styled(Typography)(({ theme }) => ({
    fontSize: "14px"
}));
const InputFormControl = styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
        width: "auto"
    },
}));
const Buttonsearch = styled(Button)(({ theme }) => ({
    backgroundColor: '#2E3192',
    WebkitTapHighlightColor: '#2E3192',
    '&:hover': {
        backgroundColor: '#2E3192',
    },
    width: "90%"
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
const ButtonReward = styled(Button)(() => ({
    backgroundColor: '#FF9B28',
    WebkitTapHighlightColor: '#FF9B28',
    '&:hover': {
        backgroundColor: '#FF9B28',
    },
    color: "#FFF",
    borderRadius: "6px",
    height: "45px"

}));
const ButtonDownload = styled(Button)(() => ({
    backgroundColor: '#38DF67',
    WebkitTapHighlightColor: '#38DF67',
    '&:hover': {
        backgroundColor: '#38DF67',
    },
    color: "#FFF",
    borderRadius: "6px",
    height: "45px"

}));
const PrintButton = styled(Button)(() => ({
    backgroundColor: '#00BCF7',
    WebkitTapHighlightColor: '#00BCF7',
    '&:hover': {
        backgroundColor: '#00BCF7',
    },
    width: "auto",
    borderRadius: "20px"

}));
function J_Group({ }: Props) {
    return (
        <Grid container gap={"14px"}>
            {/* ------------------------------ Searh Filed  ------------------------------ */}
            <Grid container>
                <Grid sx={{ width: "50%" }}>
                    <Text20px>
                        ยอดการขาย
                    </Text20px>
                    <Text20px sx={{ color: "#2E3192" }}>
                        Junior
                    </Text20px>
                </Grid>
                <Grid container sx={{ width: "50%", justifyContent: "end", gap: "12px", alignItems: "center" }}>
                    <ButtonReward>รางวัลการขาย</ButtonReward>
                    <ButtonDownload>ดาวโหลดข้อมูลไฟล์ Excel</ButtonDownload>
                </Grid>
            </Grid>
            <Grid container gap={"12px"}>
                <Grid>
                    <Text14px>เลขที่ใบเสร็จ</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                        sx={{width:"150px"}}
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
                <Grid>
                    <Text14px>พนักงาน</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                        sx={{width:"150px"}}
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
                <Grid sx={{"& .MuiStack-root":{padding:"0"}}}>
                    <Text14px>วันที่</Text14px>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ "& input": { padding: "8.5px 2px" },"& button":{padding:"0"} }} components={['DatePicker']}>
                            <DatePicker sx={{padding:"0px",width:"120px"}} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid sx={{"& .MuiStack-root":{padding:"0"}}}>
                    <Text14px>ถึง</Text14px>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{ "& input": { padding: "8.5px 2px" },"& button":{padding:"0"} }} components={['DatePicker']}>
                            <DatePicker sx={{padding:"0px",width:"120px"}} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>

                <Grid container sx={{ width: "150px", alignItems: "end" }}>
                    <Buttonsearch variant="contained">ค้นหา</Buttonsearch>
                </Grid>
            </Grid>
            {/* ------------------------------ Searh Filed  ------------------------------ */}
            {/* ------------------------------ Table   ------------------------------ */}
            <Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่/เวลา</TableCellCustomHead>
                            <TableCellCustomHead>เลขที่ใบเสร็จ</TableCellCustomHead>
                            <TableCellCustomHead>ลูกค้า</TableCellCustomHead>
                            <TableCellCustomHead>ชำระเงิน</TableCellCustomHead>
                            <TableCellCustomHead>รายการ</TableCellCustomHead>
                            <TableCellCustomHead>จำนวนเงิน</TableCellCustomHead>
                            <TableCellCustomHead>จำนวนเงินสุทธิ</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <TableCellCustomBody>002555</TableCellCustomBody>
                            <TableCellCustomBody>002555</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>002555 </TableCellCustomBody>
                            <TableCellCustomBody>1 % </TableCellCustomBody>
                            <TableCellCustomBody>4,600</TableCellCustomBody>
                            <TableCellCustomBody>14,000.00</TableCellCustomBody>
                            <TableCellCustomBody>
                                <Grid container justifyContent={"center"} gap={"6px"}>
                                    <PrintButton variant="contained">
                                        <LocalPrintshopIcon />  พิมพ์
                                    </PrintButton>
                                </Grid>
                            </TableCellCustomBody>
                        </StyledTableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={7}>
                            </TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained" sx={{ borderRadius: "32px" }} aria-label="Basic button group">
                                    <Button sx={{ backgroundColor: "#2E3192", borderRadius: "32px" }}>Prev</Button>
                                    <Button sx={{ backgroundColor: "#2E3192", borderRadius: "32px" }}>Next</Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </Grid>
            {/* ------------------------------ Table   ------------------------------ */}
        </Grid>
    )
}

export default J_Group