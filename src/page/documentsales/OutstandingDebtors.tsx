import React from 'react'
import { Button, ButtonGroup, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, styled } from '@mui/material'
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ArticleIcon from '@mui/icons-material/Article';

type Props = {}
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
const ButtonCustom = styled(Button)(() => ({
    backgroundColor: '#00BCF7',
    WebkitTapHighlightColor: '#00BCF7',
    '&:hover': {
        backgroundColor: '#00BCF7',
    },
    width: "auto",
    borderRadius: "20px"

}));

function OutstandingDebtors({}: Props) {
    const [statusBill, setStatusBill] = React.useState("ส่งไม่เรียบร้อย");
    
    const handleChangeStatusBill = (event: SelectChangeEvent) => {
        setStatusBill(event.target.value as string);
    };
    return (
        <Grid container gap={"24px"}>
            {/* ------------------------------ Button   ------------------------------ */}
            <Grid container justifyContent={"flex-end"} columnGap={"12px"}>
                <ButtonCustom variant="contained">
                    แสดงทั้งหมด
                </ButtonCustom>
                <ButtonCustom variant="contained">
                    ใบวางบิล
                </ButtonCustom>
                <ButtonCustom variant="contained">
                    ใบวางบิลรวม
                </ButtonCustom>
            </Grid>
            {/* ------------------------------ Button   ------------------------------ */}

            {/* ------------------------------ Table   ------------------------------ */}
            <Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 800, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่</TableCellCustomHead>
                            <TableCellCustomHead>เลขที่เอกสาร</TableCellCustomHead>
                            <TableCellCustomHead>ชื่อลูกค้า</TableCellCustomHead>
                            <TableCellCustomHead>วันครบกำหนด</TableCellCustomHead>
                            <TableCellCustomHead>ยอดรวมสุทธิ</TableCellCustomHead>
                            <TableCellCustomHead>สถานะ</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>AE-2056042200001</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>2 </TableCellCustomBody>
                            <TableCellCustomBody>2 </TableCellCustomBody>
                            <TableCellCustomBody>
                                <FormControl sx={{ width: { xs: "100%", sm: "70%" } }}>
                                    <Select
                                        sx={{ '& .MuiOutlinedInput-input': { padding: "0", textAlign: "center" } }}
                                        value={statusBill}
                                        onChange={handleChangeStatusBill}
                                    >
                                        <MenuItem value={"ส่งไม่เรียบร้อย"}>ส่งไม่เรียบร้อย</MenuItem>
                                        <MenuItem value={"ส่งเรียบร้อย"}>ส่งเรียบร้อย</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCellCustomBody>
                            <TableCellCustomBody>
                                <Grid container justifyContent={"center"} gap={"6px"}>
                                    <ButtonCustom variant="contained">
                                        <LocalPrintshopIcon />  พิมพ์
                                    </ButtonCustom>
                                    <ArticleIcon fontSize="large" sx={{ color: "#FFB969" }} />
                                </Grid>
                            </TableCellCustomBody>
                        </StyledTableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}>
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

export default OutstandingDebtors