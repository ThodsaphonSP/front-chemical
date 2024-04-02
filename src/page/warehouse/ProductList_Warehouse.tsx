import { Button, FormControl, Grid, OutlinedInput, Typography, styled } from '@mui/material'
import React from 'react'

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
function ProductList_Warehouse({ }: Props) {
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
                    <InputFormControl size={"small"} variant="outlined">
                        <OutlinedInput
                            type={"text"}
                        />
                    </InputFormControl>
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
            </Grid>
            {/* ------------------------------ Button Manage  ------------------------------ */}


        </Grid>
    )
}

export default ProductList_Warehouse