import React from 'react'
import { Button, Grid, Table, TableBody, TableCell, OutlinedInput, TableHead, TableRow, Typography, styled, FormControl } from '@mui/material'
import ArticleIcon from '@mui/icons-material/Article';

type Props = {
    DataAPI: { nameproduct: string; price: string; totalprice: string; count: string; }[];
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
const DeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FE6F70',
    WebkitTapHighlightColor: '#FE6F70',
    '&:hover': {
        backgroundColor: '#FE6F70',
    },
    width: "auto",

}));
const CalculatorButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#2E3192',
    WebkitTapHighlightColor: '#2E3192',
    '&:hover': {
        backgroundColor: '#2E3192',
    },
    width: "100%",

}));
const ClearButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#8B8EDF',
    WebkitTapHighlightColor: '#8B8EDF',
    '&:hover': {
        backgroundColor: '#8B8EDF',
    },
    width: "100%",

}));
const InputFormControl = styled(FormControl)(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
        width: "100%"
    },
    [theme.breakpoints.up("sm")]: {
        // width: "auto"
    },
}));
function TemplatesPageJob({ DataAPI }: Props) {
    return (
        <Grid container justifyContent={"space-between"}>
            {/* ------------------------------ Table   ------------------------------ */}
            <Grid width={{ xs: "100%", sm: "73%" }}>
                <Grid sx={{ overflow: "auto", width: "100%" }}>
                    <Table sx={{ minWidth: 700, width: "100%" }} aria-label="customized table">
                        <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                            <TableRow>
                                <TableCellCustomHead>ชื่อสินค้า</TableCellCustomHead>
                                <TableCellCustomHead>ราคา</TableCellCustomHead>
                                <TableCellCustomHead>จำนวน</TableCellCustomHead>
                                <TableCellCustomHead>ยอดรวม</TableCellCustomHead>
                                <TableCellCustomHead>จัดการ</TableCellCustomHead>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                DataAPI.map((API) => (
                                    <StyledTableRow >
                                        <TableCellCustomBody>{API.nameproduct}</TableCellCustomBody>
                                        <TableCellCustomBody>{API.price}</TableCellCustomBody>
                                        <TableCellCustomBody>{API.count}</TableCellCustomBody>
                                        <TableCellCustomBody>{API.totalprice}</TableCellCustomBody>
                                        <TableCellCustomBody>
                                            <Grid container alignItems={"center"} justifyContent={"center"}>
                                                <DeleteButton variant="contained">
                                                    ลบ
                                                </DeleteButton>
                                                <ArticleIcon sx={{ color: "#FFB969", fontSize: "52px" }} />
                                            </Grid>
                                        </TableCellCustomBody>
                                    </StyledTableRow>
                                ))
                            }

                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
            {/* ------------------------------ Table   ------------------------------ */}

            {/* ------------------------------ calculator   ------------------------------ */}
            <Grid container gap={"6px"} width={{ xs: "100%", sm: "25%" }}>
                <Grid container>
                    <Text20px>ระบบคำนวณ</Text20px>

                </Grid>
                <Grid>
                    <Text14px>เลือกงานบริการ</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
                <Grid>
                    <Text14px>ประเภท</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
                <Grid>
                    <Text14px>มูลค่างาน</Text14px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
                <Grid container justifyContent={"space-between"}>
                    <Grid width={"48%"}>
                        <Text14px>จำนวน</Text14px>
                        <InputFormControl size={"small"} variant="outlined">
                            <OutlinedInput
                                type={"text"}
                            />
                        </InputFormControl>
                    </Grid>
                    <Grid width={"48%"}>
                        <Text14px>MC</Text14px>
                        <InputFormControl size={"small"} variant="outlined">
                            <OutlinedInput
                                type={"text"}
                            />
                        </InputFormControl>
                    </Grid>
                </Grid>
                <Grid container gap={"14px"}>
                    <CalculatorButton variant="contained">
                        คำนวณ
                    </CalculatorButton>
                    <ClearButton variant="contained">
                        เคลียร์
                    </ClearButton>
                </Grid>
                <Grid>
                    <Text20px>ยอดรวมทั้งสิ้น</Text20px>
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            disabled
                            value={"100"}
                            type={"text"}
                        />
                    </InputFormControl>
                </Grid>
            </Grid>
            {/* ------------------------------ calculator   ------------------------------ */}


        </Grid>
    )
}

export default TemplatesPageJob