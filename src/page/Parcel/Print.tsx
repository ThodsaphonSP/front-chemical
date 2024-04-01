import React from 'react'
import {
    Box,
    Button, FormControl,
    Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableHead, TableRow,
    styled, TableCell, TableFooter, ButtonGroup, Typography, TextField

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
type Props = {}

function Print({ }: Props) {
    return (
        <Grid container rowGap={"24px"} width={"100%"}>
            <Grid container alignItems={"center"} justifyContent={"space-between"}>
                <FormControl size={"small"} sx={{ width: '80%' }} variant="outlined">
                    {/* <InputLabel htmlFor="phoneNumber">กรอกรหัสอ้างอิง เลขพัสดุ หรือ เบอร์โทรผู้รับ</InputLabel> */}
                    <OutlinedInput
                        id="phoneNumber"
                        type={'tel'}
                        placeholder='กรอกรหัสอ้างอิง เลขพัสดุ หรือ เบอร์โทรผู้รับ'
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
                <Typography>
                    ประวัติการปริ้น
                </Typography>
            </Grid>
            <Grid container rowGap={"16px"}   width={{xs:"100%",sm:"80%"}}>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                        เลขอ้างอิงภายใน
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    เลขอ้างอิงภายนอก
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    เลขพัสดุ
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    ขนส่ง
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    ต้นทาง
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    ปลายทาง
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    ขนาด
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    น้ำหนัก
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
                <Grid container alignItems={{xs:"start",sm:"center"}} justifyContent={"space-between"} flexDirection={{xs:"column",sm:"row"}}>
                    <Typography>
                    เก็บเงินปลายทาง
                    </Typography>
                    <FormControl size={"small"} sx={{ width:{xs:"80%",sm:"auto"} }} variant="outlined">
                        <OutlinedInput
                            type={'tel'}
                        />
                    </FormControl>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default Print