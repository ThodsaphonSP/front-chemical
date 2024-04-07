import { Box, Button, ButtonGroup, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
const DetailButton = styled(Button)(() => ({
    backgroundColor: '#00BCF7',
    WebkitTapHighlightColor: '#00BCF7',
    '&:hover': {
        backgroundColor: '#00BCF7',
    },
    width: "auto",
    borderRadius: "20px"

}));
function Receipt({ }: Props) {
    const [entrieShow, setEntrieShow] = React.useState("10");
    const handleChangeEntrie = (event: SelectChangeEvent) => {
        setEntrieShow(event.target.value as string);
    };

    return (
        <Grid container gap={"24px"}>
            {/* ------------------------------ Filler Input  ------------------------------ */}
            <Grid container gap={"12px"}>
                <Grid>
                    <Typography fontSize={"14px"}>
                        แสดง
                    </Typography>
                    <Box sx={{ minWidth: 60, paddingTop: "8px" }}>
                        <FormControl fullWidth>
                            <Select
                                sx={{ '& .MuiOutlinedInput-input': { padding: "3px", textAlign: "center", } }}
                                value={entrieShow}
                                onChange={handleChangeEntrie}
                            >
                                <MenuItem value={10}>10 รายการ</MenuItem>
                                <MenuItem value={20}>20 รายการ</MenuItem>
                                <MenuItem value={30}>30 รายการ</MenuItem>
                                <MenuItem value={40}>40 รายการ</MenuItem>
                                <MenuItem value={50}>50 รายการ</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid>
                    <Typography fontSize={"14px"}>
                        จาก
                    </Typography>
                    <Box sx={{}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={{ "& input": { padding: "3px" } }} components={['DatePicker']}>
                                <DatePicker sx={{ padding: "0" }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid>
                    <Typography fontSize={"14px"}>
                        ถึง
                    </Typography>
                    <Box sx={{}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer sx={{ "& input": { padding: "3px" } }} components={['DatePicker']}>
                                <DatePicker sx={{ padding: "0" }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid container width={"150px"} sx={{ alignItems: "end" }}>
                    <Button variant="contained" sx={{ width: "100%" }}>
                        ค้นหา
                    </Button>
                </Grid>

            </Grid>
            {/* ------------------------------ Filler Input  ------------------------------ */}
            {/* ------------------------------ Table   ------------------------------ */}
            <Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่ทำรายการ</TableCellCustomHead>
                            <TableCellCustomHead>เลขที่ใบสั่งซื้อ</TableCellCustomHead>
                            <TableCellCustomHead>คู่ค้า</TableCellCustomHead>
                            <TableCellCustomHead>อ้างอิงเลขการขาย</TableCellCustomHead>
                            <TableCellCustomHead>ยอดสุทธิ</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>AE-2056042200001</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>2 </TableCellCustomBody>
                            <TableCellCustomBody>
                                2
                            </TableCellCustomBody>
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
                            <TableCell colSpan={5}>
                                Showing 1 to {entrieShow} of 704 entries
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

export default Receipt