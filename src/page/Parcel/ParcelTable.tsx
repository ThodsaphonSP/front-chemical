import {
    Pagination,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    SelectChangeEvent, Grid, Button, TextField, Skeleton, IconButton
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "../../features/Nav/NavSlice";
import pageData from "../../type/PageData.json"
import {useNavigate} from "react-router-dom";
import {PersonAddAlt} from "@mui/icons-material";

import {GetParcel, Parcel} from "../../Services/ParcelAPI";
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import {PDFDownloadLink, Document, Page, Text, Font, View, StyleSheet} from "@react-pdf/renderer";




export function ParcelTable() {
    const dispatch = useDispatch();
    const [data, setData] = useState<Parcel[]>([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalCount, setTotalCount] = useState(0);

    const [loading, setLoading] = useState(false);

    const [searchText, setSearchText] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setTitle(pageData.admin.pageTitle));
        document.title = pageData.admin.pageTitle;
        fetchData(page, rowsPerPage, searchText).catch(error => {
            console.error('Failed to fetch data:', error);
        });
        // eslint-disable-next-line
    }, [dispatch, page, rowsPerPage]);


    const fetchData = async (page: number, rowsPerPage: number, firstNameOrLastName = ""): Promise<void> => {
        setLoading(true);
        try {
            const response = await GetParcel(page, rowsPerPage, firstNameOrLastName);

            setData(response.data.parcels);
            setTotalCount(response.data.totalCount);
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
        setLoading(false);
    };

    const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number): void => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: SelectChangeEvent<number>): void => {
        setRowsPerPage(parseInt(event.target.value as string, 10));
        setPage(1); // Reset to first page with new page size
    };

    function handleSearchOnclick() {
        setPage(1)
        fetchData(page, rowsPerPage, searchText).catch(error => {
            console.error('Failed to fetch data:', error);
        });
    }

    const handleAddUserOnclick = () => {
        navigate("/admin/0")
    };
    return (
        <Paper sx={{margin: '10px'}}>
            <Grid container={true}>
                <Grid container={true} item={true} xs={12}>
                    <Grid xs item={true}>
                        <FormControl size={"small"} sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="rows-per-page-select-label">Rows</InputLabel>
                            <Select
                                labelId="rows-per-page-select-label"
                                id="rows-per-page-select"
                                value={rowsPerPage}
                                label="Rows"
                                onChange={handleChangeRowsPerPage}
                            >
                                {[5, 10, 15, 20].map((pageSize) => (
                                    <MenuItem key={pageSize} value={pageSize}>
                                        {pageSize}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid columnSpacing={1} justifyItems={"center"} alignContent={"center"} container={true} item={true}
                          xs={5}>
                        <Grid item={true} xs={5}>
                            <TextField value={searchText} fullWidth={true} size={"small"} id="outlined-basic"
                                       onChange={(event) => setSearchText(event.target.value)}
                                       label="ค้นหา" variant="outlined"/>
                        </Grid>
                        <Grid item={true} xs={3}>
                            <Button
                                onClick={handleSearchOnclick}
                                fullWidth={true}
                                variant={"outlined"} sx={{
                                backgroundColor: '#2E3192',
                                color: '#FFFF',
                                '&:hover': {backgroundColor: '#504DC2'}
                            }}
                            >
                                ค้นหา
                            </Button>
                        </Grid>
                        <Grid item={true} xs={4}>
                            <Button
                                onClick={handleAddUserOnclick}
                                fullWidth={true}
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#4DBCFA',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#3BACD4',
                                    },
                                }}
                                startIcon={<PersonAddAlt/>}
                            >
                                เพิ่มบัญชีผู้ใช้
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item={true} xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align={"center"}>ลำดับ</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align={"left"}>ขนส่ง</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">ผู้รับ</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">เบอร์</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">ที่อยู่</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">รหัสไปรษณีย์</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">COD</TableCell>
                                    <TableCell sx={{backgroundColor: "#4B4B4B", color: "white"}}
                                               align="left">จัดการ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ?
                                    // This will render a skeleton table row 5 times
                                    Array(5).fill(0).map((_, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton/>
                                            </TableCell>
                                        </TableRow>
                                    )) :
                                    data.map((parcel: Parcel, index) => (
                                        <TableRow
                                            key={parcel.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell align={"center"}>
                                                {(page - 1) * rowsPerPage + index + 1}
                                            </TableCell>
                                            <TableCell align={"left"} component="th" scope="row">
                                                {parcel.deliveryVendor?.name}
                                            </TableCell>
                                            <TableCell align={"left"} component="th" scope="row">
                                                {`${parcel.customer?.firstName}  ${parcel.customer?.lastName}`}
                                            </TableCell>
                                            <TableCell align="left">{parcel.customer?.phoneNo}</TableCell>
                                            <TableCell
                                                align="left">{parcel.customer?.addresses?.addressDetail}</TableCell>
                                            <TableCell
                                                align="left">{parcel.customer?.addresses?.postalCode?.code}</TableCell>
                                            <TableCell align="left">{parcel.cashOnDelivery ? "Yes" : "No"}</TableCell>
                                            <TableCell align="left">

                                                <PDFDownloadLink document={<MyDoc parcel={parcel}/>}
                                                                 fileName="Parcel.pdf">
                                                    {({blob, url, loading, error}) =>
                                                        loading ? 'Loading document...' : (
                                                            <IconButton aria-label="delete">
                                                                <LocalPrintshopIcon></LocalPrintshopIcon>
                                                            </IconButton>)
                                                    }
                                                </PDFDownloadLink>


                                            </TableCell>

                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={12} item={true} container={true} justifyContent="flex-end">
                    <Pagination
                        count={Math.ceil(totalCount / rowsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        color="primary"
                        sx={{my: 2}}
                    />
                </Grid>
            </Grid>


        </Paper>
    );
}

interface IDoc {
    parcel: Parcel
}

Font.register({
    family: 'THSarabunNew',
    src: `${process.env.PUBLIC_URL}/THSarabunNew.ttf`,
});


const MyDoc = (props: IDoc) => {

    return (
        <Document>
            <Page>
                <View style={{marginTop: "40px", marginLeft: "40px"}}>
                    <Text style={{fontFamily: 'THSarabunNew', fontSize: "28px"}}>ที่อยู่ผู้ส่ง</Text>
                    <Text style={{fontFamily: 'THSarabunNew'}}>
                        {`${props.parcel.saleMan?.firstName}  ${props.parcel.saleMan?.lastName}`}
                    </Text>
                    <Text style={{fontFamily: 'THSarabunNew'}}>
                        {`เบอร์โทร ${props.parcel.saleMan?.phoneNumber}`}
                    </Text>
                    <Text style={{fontFamily: 'THSarabunNew'}}>
                        {`${props.parcel.saleMan?.addresses?.addressDetail}`}
                    </Text>
                    <Text style={{fontFamily: 'THSarabunNew'}}>
                        {`ตำบล ${props.parcel.saleMan?.addresses?.subDistrict?.thaiName} อำเภอ${props.parcel.saleMan?.addresses?.district?.thaiName} 
                     จังหวัด${props.parcel.saleMan?.addresses?.province?.thaiName} รหัสไปรษณีย์ ${props.parcel.saleMan?.addresses?.postalCode?.code}`}
                    </Text>
                </View>


                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <View >
                        <Text style={{fontFamily: 'THSarabunNew', fontSize: "28px"}}>ที่อยู่ผู้รับ</Text>
                        <Text style={{fontFamily: 'THSarabunNew'}}>
                            {`${props.parcel.customer?.firstName}  ${props.parcel.customer?.lastName}`}
                        </Text>
                        <Text style={{fontFamily: 'THSarabunNew'}}>
                            {`เบอร์โทร ${props.parcel.customer?.phoneNo}`}
                        </Text>
                        <Text style={{fontFamily: 'THSarabunNew'}}>
                            {`${props.parcel.customer?.addresses?.addressDetail}`}
                        </Text>
                        <Text style={{fontFamily: 'THSarabunNew'}}>
                            {`ตำบล ${props.parcel.customer?.addresses?.subDistrict?.thaiName} อำเภอ${props.parcel.customer?.addresses?.district?.thaiName} 
                      จังหวัด${props.parcel.customer?.addresses?.province?.thaiName} รหัสไปรษณีย์ ${props.parcel.customer?.addresses?.postalCode?.code}`}
                        </Text>
                    </View>
                </View>

            </Page>
        </Document>
    )
}