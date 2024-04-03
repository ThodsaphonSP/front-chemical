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
import { Label } from '@mui/icons-material';
type Props = {}

function Audit({ }: Props) {
    const dispatch = useDispatch();

    const [value, setValue] = React.useState(0);
    useEffect(() => {
        dispatch(setTitle(pageData["audit"].pageTitle));
        document.title = pageData["audit"].pageTitle;
        // eslint-disable-next-line
    }, [dispatch]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const TabsPage = [
        {
            Label: "P&W"
        },
        {
            Label: "S2P"
        },
        {
            Label: "Aceepta"
        },
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
                                        <Tab label={page.Label} />

                                    ))
                                }
                                <Button variant="contained">testt</Button>
                            </Tabs>
                        </Box>
                        {
                            TabsPage.map((page, index) => (
                                <CustomTabPanel value={value} index={index}>
                                </CustomTabPanel >
                            ))
                        }
                    </Grid>
                </Grid>
            </BaseContainer>
        </Grid>
    )
}

export default Audit