import { useState } from 'react';
import { Drawer, List, ListItemIcon, ListItemText, ListItemButton, Collapse } from '@mui/material';
import {
    ExpandMore,
    ExpandLess,
    RecentActors,
    Home
} from "@mui/icons-material";
import StoreIcon from '@mui/icons-material/Store';
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import GroupIcon from '@mui/icons-material/Group';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import WorkIcon from '@mui/icons-material/Work';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
export const AppObject = {
    ParcelUrl: "/Create-parcel"
};

const drawerWidth = 240;

export function SideManu() {
    const [nowOpenIndex, setNowOpenIndex] = useState<number>(0);

    const handleOpen = (value: number) => {
        setNowOpenIndex(nowOpenIndex === value ? 0 : value);
    };

    const menuList: any = [
        {
            label: "หน้าแรก",
            icon: <Home style={{ color: "white" }} />,
            to: '/',
        },
        {
            label: "Sale",
            icon: <LeaderboardIcon style={{ color: "white" }} />,
            to: '/sale',
        },
        {
            label: "เอกสารขาย",
            icon: <DocumentScannerIcon style={{ color: "white" }} />,
            to: '/documentsales',
        },
        {
            label: "ระบบแอดมิน",
            icon: <GroupIcon style={{ color: 'white' }} />,
            to: '/admin'
            // collapse: {
            //     list: [
            //         {
            //             icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
            //             label: "บัญชีผู้ใช้งาน",
            //             to: '/admin'
            //         },
                    // {
                    //     icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                    //     label: "จัดการสิทธิ์",
                    //     to: '/Authority'
                    // },
                    // {
                    //     icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                    //     label: "จัดการผู้ใช้",
                    //     to: '/User'
                    // }
            //     ]
            // }
        },
        {
            label: "JOB",
            icon: <WorkIcon style={{ color: 'white' }} />,
            to: "/job"
        },
        {
            label: "รายการพัสดุ",
            icon: <RecentActors style={{ color: 'white' }} />,
            to: "/create-parcel"
        },
        {
            label: "ระบบคลังสินค้า",
            icon: <StoreIcon style={{ color: 'white' }} />,
            to: '/warehouse'
        },
        {
            label: "ระบบบัญชี",
            icon: <RequestPageIcon style={{ color: 'white' }} />,
            to: '/audit'
        },
    ]

    const styles = {
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: '#2E3192', // Sets the background color to black
                color: 'white', // Sets the text color to white
                position: 'relative',
            },
        },
    };


    return (
        <Drawer
            sx={{ ...styles.drawer, height: '100%' }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {
                    menuList.length > 0 && menuList.map((item: any, index: number) => {
                        return (
                            <Box sx={{ backgroundColor: nowOpenIndex === index + 1 ? "orange" : "initial", borderTopRightRadius: '40px' }} key={index}>
                                {
                                    item.to !== undefined && item.to !== null ? <Link to={item.to} style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <ListItemButton onClick={() => {
                                            if (item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0) {
                                                handleOpen(index + 1);
                                            }
                                        }}>
                                            <ListItemIcon>
                                                {
                                                    item.icon
                                                }
                                            </ListItemIcon>
                                            <ListItemText primary={item.label} />
                                            {
                                                item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0 && <>
                                                    {
                                                        nowOpenIndex === (index + 1) ? <ExpandLess /> : <ExpandMore />
                                                    }
                                                </>
                                            }
                                        </ListItemButton>
                                    </Link> : <ListItemButton onClick={() => {
                                        if (item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0) {
                                            handleOpen(index + 1);
                                        }
                                    }}>
                                        <ListItemIcon>
                                            {
                                                item.icon
                                            }
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                        {
                                            item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0 && <>
                                                {
                                                    nowOpenIndex === (index + 1) ? <ExpandLess /> : <ExpandMore />
                                                }
                                            </>
                                        }
                                    </ListItemButton>
                                }
                                {
                                    item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0 ? <>
                                        <Collapse in={nowOpenIndex === (index + 1)} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    item.collapse.list.map((collapseItem: any, coolapseItemIndex: number) => {
                                                        return (
                                                            collapseItem.to !== undefined && collapseItem.to !== null ? <Link to={collapseItem.to} key={coolapseItemIndex} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                                <ListItemButton sx={{ pl: 4 }}>
                                                                    <ListItemIcon>
                                                                        {collapseItem.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={collapseItem.label} />
                                                                </ListItemButton>
                                                            </Link> : <ListItemButton sx={{ pl: 4 }} key={coolapseItemIndex}>
                                                                <ListItemIcon>
                                                                    {collapseItem.icon}
                                                                </ListItemIcon>
                                                                <ListItemText primary={collapseItem.label} />
                                                            </ListItemButton>
                                                        )
                                                    })
                                                }
                                            </List>
                                        </Collapse>
                                    </> : null
                                }
                            </Box>
                        )
                    })
                }
            </List>
        </Drawer>
    );
}
