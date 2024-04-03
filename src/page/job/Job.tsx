import React, { useEffect } from 'react'
import {
  Box,
  Grid,
  Tabs, Tab, Button
} from "@mui/material";
import { BaseContainer } from '../admin/BaseContainer';
import { CustomTabPanel } from '../Parcel/CreateParcelList';
import { useDispatch } from 'react-redux';
import { setTitle } from '../../features/Nav/NavSlice';
import pageData from "../../type/PageData.json";
import TemplatesPageJob from './TemplatesPageJob';
type Props = {}

function Job({ }: Props) {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    dispatch(setTitle(pageData["job"].pageTitle));
    document.title = pageData["job"].pageTitle;
    // eslint-disable-next-line
  }, [dispatch]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const TabsPage = [
    {
      jobname: "งานล้างและบริการ"
    },
    {
      jobname: "งานล้างและติดตั้ง"
    },
  ]
  const DataAPI = [
    {
      nameproduct: "Lorem",
      price: "20,000",
      totalprice: "20,000",
      count: "1"
    }
  ]
  return (
    <Grid>
      <BaseContainer>
        <Grid rowSpacing={1} columnSpacing={1} container  >
          <Grid item xs={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                {
                  TabsPage.map((page, index) => (
                    <Tab label={page.jobname} />
                  ))
                }
              </Tabs>
            </Box>
            {
              TabsPage.map((page, index) => (
                <CustomTabPanel value={value} index={index}>
                  {/* <TemplatesPage DataAPI={DataAPI} /> */}
                  <TemplatesPageJob DataAPI={DataAPI} />
                </CustomTabPanel >
              ))
            }
          </Grid>
        </Grid>
      </BaseContainer>
    </Grid>
  )
}

export default Job