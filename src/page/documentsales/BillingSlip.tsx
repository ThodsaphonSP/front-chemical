import { Box, Button, ButtonGroup, FormControl, Grid, MenuItem, Select, SelectChangeEvent, Table, TableBody, TableCell, TableFooter, TableHead, TableRow, Typography, styled } from '@mui/material'

type Props = {}

function BillingSlip({ }: Props) {
    const DetailButton = styled(Button)(() => ({
        backgroundColor: '#5C60E1',
        WebkitTapHighlightColor: '#5C60E1',
        '&:hover': {
            backgroundColor: '#5C60E1',
        },
        width: "auto",
        // borderRadius: "20px"

    }));
    return (
        <Grid container gap={"24px"}>
            {/* ------------------------------ Button   ------------------------------ */}

            <Grid container justifyContent={"flex-end"} columnGap={"12px"}>
                <DetailButton variant="contained">
                    แสดงทั้งหมด
                </DetailButton>
                <DetailButton variant="contained">
                    ใบวางบิล
                </DetailButton>
                <DetailButton variant="contained">
                    ใบวางบิลรวม
                </DetailButton>
            </Grid>

            {/* ------------------------------ Button   ------------------------------ */}

        </Grid>
    )
}

export default BillingSlip