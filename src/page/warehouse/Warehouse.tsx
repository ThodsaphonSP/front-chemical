import React, { useEffect } from 'react'
import {
  Box,
  Button, FormControl,
  Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Table, TableBody, TableHead, TableRow,
  styled, TableCell, TableFooter, ButtonGroup, Tabs, Tab

} from "@mui/material";
import { BaseContainer } from '../admin/BaseContainer';
import { CustomTabPanel } from '../Parcel/CreateParcelList';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../features/Nav/NavSlice';
import pageData from "../../type/PageData.json";
import ProductList_Warehouse from './ProductList_Warehouse';

type Props = {}

function Warehouse({ }: Props) {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    dispatch(setTitle(pageData["Create-Parcel"].pageTitle));
    document.title = pageData["Create-Parcel"].pageTitle;
    // eslint-disable-next-line
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Grid>
      <BaseContainer>
        <Grid rowSpacing={1} columnSpacing={1} container  >
          <Grid item xs={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="รายการสินค้า" />
                <Tab label="ประวัติสต๊อกสินค้า" />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <ProductList_Warehouse />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>

            </CustomTabPanel>

          </Grid>


        </Grid>
      </BaseContainer>
    </Grid>
  )
}

export default Warehouse