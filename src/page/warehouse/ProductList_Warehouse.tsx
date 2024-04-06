import { Box, Button, ButtonGroup, Checkbox, FormControl, Grid, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'
import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
type Props = {}
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
const ItemInput = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        width: "80%"
    },
    [theme.breakpoints.up("sm")]: {
        width: "45%"
    },
    [theme.breakpoints.up("md")]: {
        width: "17%"
    },
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
const ItemContainButton = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        // width: "35%"
    },
    [theme.breakpoints.up("md")]: {
    },
    width: "10%"

}));
const Buttonsearch = styled(Button)(({ theme }) => ({
    backgroundColor: '#2E3192',
    WebkitTapHighlightColor: '#2E3192',
    '&:hover': {
        backgroundColor: '#2E3192',
    },
    width: "90%"
}));
const ImportButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#0063B1',
    WebkitTapHighlightColor: '#0063B1',
    '&:hover': {
        backgroundColor: '#0063B1',
    },
    width: "auto"

}));
const DeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF5555',
    WebkitTapHighlightColor: '#FF5555',
    '&:hover': {
        backgroundColor: '#FF5555',
    },
    width: "auto"

}));
const AddProductButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#79C447',
    WebkitTapHighlightColor: '#79C447',
    '&:hover': {
        backgroundColor: '#79C447',
    },
    width: "auto"

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
function ProductList_Warehouse({ }: Props) {
    const [entrie, setEntrie] = React.useState("50");
    const handleChange = (event: SelectChangeEvent) => {
        setEntrie(event.target.value as string);
    };
    return (
        <Grid container rowGap={"12px"}>
            {/* ------------------------------ seach bar ------------------------------ */}
            <Grid container columnGap={"6px"}>
                <ItemInput>
                    <Text14px>เลขที่เอกสาร</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </ItemInput>
                <ItemInput>
                    <Text14px>วันที่เอกสาร</Text14px>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer sx={{padding:"0","& input":{padding:"8.5px 13.5px"}}} components={['DatePicker']}>
                            <DatePicker sx={{padding:"0"}} />
                        </DemoContainer>
                    </LocalizationProvider>
                </ItemInput>
                <ItemInput>
                    <Text14px>ประเภท</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </ItemInput>
                <ItemInput>
                    <Text14px>Cost Center</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </ItemInput>
                <ItemInput>
                    <Text14px>Internal Order</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </ItemInput>
                <ItemContainButton >
                    <Text14px sx={{ visibility: "hidden" }}>.....</Text14px>
                    <Buttonsearch variant="contained">ค้นหา</Buttonsearch>
                </ItemContainButton>
            </Grid>
            {/* ------------------------------ seach bar ------------------------------ */}

            {/* ------------------------------ Button Manage  ------------------------------ */}
            <Grid container columnGap={"6px"} justifyContent={"end"}>
                <ImportButton variant="contained">
                    นำรายการเข้า
                </ImportButton>
                <DeleteButton variant="contained">
                    ลบรายการ
                </DeleteButton>
                <AddProductButton variant="contained">
                    เพิ่มสินค้า
                </AddProductButton>
            </Grid>
            {/* ------------------------------ Button Manage  ------------------------------ */}

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
                                    onChange={handleChange}
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
                <Button variant="outlined">
                    Export
                </Button>
            </Entries>
            {/* ------------------------------ entries  ------------------------------ */}

            {/* ------------------------------ Table   ------------------------------ */}

            <Grid sx={{ overflow: "auto", width: "100%" }}>
                <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B", width: "100%" }}>
                        <TableRow>
                            <TableCellCustomHead>
                                <Checkbox sx={{
                                    color: "white", '&.Mui-checked': {
                                        color: "#FFF"
                                    },
                                }} />
                            </TableCellCustomHead>
                            <TableCellCustomHead>ชื่อสินค้า</TableCellCustomHead>
                            <TableCellCustomHead>รหัสสินค้า</TableCellCustomHead>
                            <TableCellCustomHead>หมวดหมู่</TableCellCustomHead>
                            <TableCellCustomHead>จำนวนสินค้า</TableCellCustomHead>
                            <TableCellCustomHead>ราคา (บาท)</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ width: "100%" }}>
                        <StyledTableRow >
                            <TableCellCustomBody>
                                <Checkbox sx={{
                                    color: "#E8E8EB", '&.Mui-checked': {
                                        color: "#2E3192"
                                    },
                                }} />
                            </TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>AE-2056042200001</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>5</TableCellCustomBody>
                            <TableCellCustomBody>Lorem ipsum</TableCellCustomBody>
                            <TableCellCustomBody>
                                <Grid container justifyContent={"center"} columnGap={"12px"}>
                                    <DetailButton variant="contained">
                                        ดูรายละเอียด
                                    </DetailButton>
                                    <ArticleIcon sx={{ color: "#FFB969", fontSize: "36px" }} />
                                </Grid>
                            </TableCellCustomBody>
                        </StyledTableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={6}>
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

export default ProductList_Warehouse