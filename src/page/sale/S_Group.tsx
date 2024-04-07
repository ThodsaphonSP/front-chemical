import React from 'react'
import { Box, Button, ButtonGroup, FormControl, Grid, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';
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
const DetailButton = styled(Button)(() => ({
    backgroundColor: '#00BCF7',
    WebkitTapHighlightColor: '#00BCF7',
    '&:hover': {
        backgroundColor: '#00BCF7',
    },
    width: "auto",
    borderRadius: "20px"

}));
function S_Group({ }: Props) {
    return (
        <Grid container gap={"14px"}>
            {/* ------------------------------ คำนวณค่าคอมมิชชั่น  ------------------------------ */}
            <Grid>
                <Text20px>คำนวณค่าคอมมิชชั่น</Text20px>
                <Grid container gap={"12px"}>
                    <Grid>
                        <Text14px>ยอดขาย</Text14px>
                        <InputFormControl size={"small"} variant="outlined">
                            <OutlinedInput
                                type={"text"}
                            />
                        </InputFormControl>
                    </Grid>
                    <Grid>
                        <Text14px>Com %</Text14px>
                        <InputFormControl size={"small"} variant="outlined">
                            <OutlinedInput
                                type={"text"}
                            />
                        </InputFormControl>
                    </Grid>
                    <Grid>
                        <Text14px>จำนวนเงิน</Text14px>
                        <InputFormControl size={"small"} variant="outlined">
                            <OutlinedInput
                                type={"text"}
                            />
                        </InputFormControl>
                    </Grid>
                    <Grid container sx={{ width: "150px", alignItems: "end" }}>
                        <Buttonsearch variant="contained">ค้นหา</Buttonsearch>
                    </Grid>
                </Grid>
                <Text14px>
                    เงื่อนไข
                </Text14px>
                <Text14px>
                    ** ถ้ายอดขายน้อยกว่า 200,000 บาท จะได้ค่าคอมมิสชั่น 1 %
                </Text14px>
                <Text14px>
                    ** ถ้ายอดขายตั้งแต่ 200,000 บาท จะได้ค่าคอมมิสชั่น 1 %
                </Text14px>
            </Grid>
            {/* ------------------------------ คำนวณค่าคอมมิชชั่น  ------------------------------ */}
{/* ------------------------------ Table   ------------------------------ */}
<Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่</TableCellCustomHead>
                            <TableCellCustomHead>รหัสพนักงาน</TableCellCustomHead>
                            <TableCellCustomHead>ชื่อ - นามสกุล</TableCellCustomHead>
                            <TableCellCustomHead>เงินเดือน</TableCellCustomHead>
                            <TableCellCustomHead>Com %</TableCellCustomHead>
                            <TableCellCustomHead>คอมมิสชั่น</TableCellCustomHead>
                            <TableCellCustomHead>รายได้สุทธิ</TableCellCustomHead>
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
                                    <DetailButton variant="contained">
                                        <LocalPrintshopIcon />  พิมพ์
                                    </DetailButton>
                                    <ArticleIcon fontSize="large" sx={{ color: "#FFB969" }} />
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

export default S_Group