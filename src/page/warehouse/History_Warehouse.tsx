import { Box, Button, ButtonGroup, FormControl, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';

type Props = {}
const Text14px = styled(Typography)(({ theme }) => ({
    fontSize: "14px"
}));
const Entries = styled(Grid)(({ theme }) => ({
    // [theme.breakpoints.up("xs")]: {
    //     width: "80%"
    // },
    // [theme.breakpoints.up("sm")]: {
    //     width: "45%"
    // },
    // [theme.breakpoints.up("md")]: {
    //     width: "17%"
    // },
    justifyContent: "space-between"
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
const DetailButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#00BCF7',
    WebkitTapHighlightColor: '#00BCF7',
    '&:hover': {
        backgroundColor: '#00BCF7',
    },
    width: "auto",
    borderRadius: "20px"

}));
function History_Warehouse({ }: Props) {
    const [typeProduct, setTypeProduct] = React.useState('สินค้าทั้งหมด');
    const [entrie, setEntrie] = React.useState("50");
    const [statusProd, setStatusProd] = React.useState("ส่งไม่เรียบร้อย");

    const handleChange = (event: SelectChangeEvent) => {
        setTypeProduct(event.target.value as string);
    };
    const handleChangeEntrie = (event: SelectChangeEvent) => {
        setEntrie(event.target.value as string);
    };
    const handleChangeStatus = (event: SelectChangeEvent) => {
        setEntrie(event.target.value as string);
    };
    return (
        <Grid container gap={4}>
            {/* -------------------------- Date pickers --------------------------*/}
            <Grid container alignItems={"center"} gap={2}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="วันที่" />
                    </DemoContainer>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker label="ถึง" />
                    </DemoContainer>
                </LocalizationProvider>
                <FormControl sx={{ width: "auto" }}>
                    <InputLabel id="demo-simple-select-label">ประเภท</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={typeProduct}
                        label="ประเภท"
                        onChange={handleChange}
                    >
                        <MenuItem value={"สินค้าทั้งหมด"}>สินค้าทั้งหมด</MenuItem>
                        <MenuItem value={"สินค้าทั้งหมด"}>สินค้าทั้งหมด</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            {/* -------------------------- Date pickers --------------------------*/}

            {/* ------------------------------ entries  ------------------------------ */}
            <Entries container>
                <Grid>
                    <Text14px>
                        Total Value : 14,640.00 (2 รายการ)
                    </Text14px>
                    <Grid width={{ xs: "100%" }} container alignItems={"center"} gap={"6px"}>
                        <p>
                            show
                        </p>
                        <Box sx={{ minWidth: 60 }}>
                            <FormControl fullWidth>
                                <Select
                                    sx={{ '& .MuiOutlinedInput-input': { padding: "0", textAlign: "center" } }}
                                    value={entrie}
                                    onChange={handleChangeEntrie}
                                >
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={30}>30</MenuItem>
                                    <MenuItem value={40}>40</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>


                                </Select>
                            </FormControl>
                        </Box>
                        <p>
                            entries
                        </p>
                    </Grid>
                </Grid>
                <Grid container width={{ xs: "100%", sm: "50%" }} alignItems={"center"} justifyContent={{ xs: "start", sm: "end" }} gap={"6px"}>
                    <FormControl size={"small"} sx={{ width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="phoneNumber">ค้นหา</InputLabel>
                        <OutlinedInput
                            id="phoneNumber"
                            type={'tel'}
                            // value={searchNumberValue}
                            // onChange={(event) => setSearchNumberValue(event.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        // onClick={() => searchUser(searchNumberValue)}
                                        aria-label="toggle password visibility"


                                        edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Button variant="outlined">
                        Export
                    </Button>

                </Grid>
            </Entries>
            {/* ------------------------------ entries  ------------------------------ */}

            {/* ------------------------------ Table   ------------------------------ */}
            <Grid sx={{ overflow: "auto",width:"100%" }}>
                <Table sx={{ minWidth: 700,width:"100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่</TableCellCustomHead>
                            <TableCellCustomHead>รหัสสินค้า</TableCellCustomHead>
                            <TableCellCustomHead>ชื่อสินค้า</TableCellCustomHead>
                            <TableCellCustomHead>คลังคงเหลือ</TableCellCustomHead>
                            <TableCellCustomHead>สถานะ</TableCellCustomHead>
                            <TableCellCustomHead>หมายเหตุ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <TableCellCustomBody>วว/ดด/ปป</TableCellCustomBody>
                            <TableCellCustomBody>AE-2056042200001</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>5</TableCellCustomBody>
                            <TableCellCustomBody>
                                <FormControl sx={{ width: { xs: "100%", sm: "70%" } }}>
                                    <Select
                                        sx={{ '& .MuiOutlinedInput-input': { padding: "0", textAlign: "center" } }}
                                        value={statusProd}
                                        onChange={handleChangeStatus}
                                    >
                                        <MenuItem value={"ส่งไม่เรียบร้อย"}>ส่งไม่เรียบร้อย</MenuItem>
                                        <MenuItem value={"ส่งเรียบร้อย"}>ส่งเรียบร้อย</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCellCustomBody>
                            <TableCellCustomBody>
                                <DetailButton variant="contained">
                                    ดูรายละเอียด
                                </DetailButton>
                            </TableCellCustomBody>
                        </StyledTableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={5}>
                                Showing 1 to {entrie} of 704 entries
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

export default History_Warehouse