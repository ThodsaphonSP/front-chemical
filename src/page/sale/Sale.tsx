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
import S_Group from './S_Group';
import J_Group from './J_Group';

type Props = {}

function Sale({ }: Props) {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    useEffect(() => {
        dispatch(setTitle(pageData["sale"].pageTitle));
        document.title = pageData["sale"].pageTitle;
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
                                <Tab label="S-Group" />
                                <Tab label="J-Group" />
                                <Tab label="R-Group" />
                                <Tab label="การคำนวนลงยอดขาย" />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                            <S_Group/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <J_Group/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                        </CustomTabPanel>
                       
                    </Grid>
                </Grid>
            </BaseContainer>
        </Grid>
    )
}

export default Sale