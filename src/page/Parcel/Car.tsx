import React from 'react'
import {
    Box,
    Button, FormControl,
    Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableHead, TableRow, 
    styled, TableCell, TableFooter, ButtonGroup

} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';

type Props = {}
const ShowEntries = styled(Grid)(({ theme }) => ({
    justifyContent: "space-between",
    [theme.breakpoints.up("xs")]:{
        flexDirection:"column"
    },
    [theme.breakpoints.up("sm")]:{
        flexDirection:"row"
    },
    margin:"12px 0"
}));
const TableCellCustomHead = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    color: "white",
    
    [theme.breakpoints.up("xs")]:{
        padding:"4px 3px"
    },
    [theme.breakpoints.up("sm")]:{
        padding:"7px 5px"
    }

}));
const TableCellCustomBody = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    color: "#000",
    
    [theme.breakpoints.up("xs")]:{
        padding:"4px 3px"
    },
    [theme.breakpoints.up("sm")]:{
        padding:"7px 5px"
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
function Car({ }: Props) {
    const [entrie, setEntrie] = React.useState("50");
    const [statusCar, setStatusCar] = React.useState("ส่งไม่เรียบร้อย");

    const handleChange = (event: SelectChangeEvent) => {
        setEntrie(event.target.value as string);
    };
    const handleChangeStatus = (event: SelectChangeEvent) => {
        setStatusCar(event.target.value as string);
    };
    return (
        <Grid>
            <ShowEntries container>
                <Grid width={{xs:"100%",sm:"50%"}} container alignItems={"center"} gap={"6px"}>
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
                <Grid width={{xs:"100%",sm:"50%"}} container alignItems={"center"} justifyContent={{xs:"start",sm:"end"}} gap={"6px"}>
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
                </Grid>
            </ShowEntries>
            <Grid sx={{ overflow: "auto" }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead sx={{ backgroundColor: "#4B4B4B" }}>
                        <TableRow>
                            <TableCellCustomHead>วันที่</TableCellCustomHead>
                            <TableCellCustomHead>ผู้รับ</TableCellCustomHead>
                            <TableCellCustomHead>ประเภทวัสดุ</TableCellCustomHead>
                            <TableCellCustomHead>น้ำหนัก</TableCellCustomHead>
                            <TableCellCustomHead>ขนาด</TableCellCustomHead>
                            <TableCellCustomHead>ที่อยู่</TableCellCustomHead>
                            <TableCellCustomHead>สถานะ</TableCellCustomHead>
                            <TableCellCustomHead>จัดการ</TableCellCustomHead>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow >
                            <TableCellCustomBody>1</TableCellCustomBody>
                            <TableCellCustomBody>2</TableCellCustomBody>
                            <TableCellCustomBody>3</TableCellCustomBody>
                            <TableCellCustomBody>1</TableCellCustomBody>
                            <TableCellCustomBody>5</TableCellCustomBody>
                            <TableCellCustomBody>5</TableCellCustomBody>
                            <TableCellCustomBody>
                                <FormControl sx={{ width: { xs: "100%", sm: "70%" } }}>
                                    <Select
                                        sx={{ '& .MuiOutlinedInput-input': { padding: "0", textAlign: "center" } }}
                                        value={statusCar}
                                        onChange={handleChangeStatus}
                                    >
                                        <MenuItem value={"ส่งไม่เรียบร้อย"}>ส่งไม่เรียบร้อย</MenuItem>
                                        <MenuItem value={"ส่งเรียบร้อย"}>ส่งเรียบร้อย</MenuItem>
                                    </Select>
                                </FormControl>
                            </TableCellCustomBody>
                            <TableCellCustomBody>
                                <ArticleIcon sx={{ color: "#FFB969" }} />
                            </TableCellCustomBody>
                        </StyledTableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={7}>
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
        </Grid>
    )
}

export default Car