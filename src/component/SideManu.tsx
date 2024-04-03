import React, {useState} from 'react';
import {Drawer, List, ListItemIcon, ListItemText, ListItemButton, Collapse} from '@mui/material';
import {
    Circle,
    ExpandMore,
    ExpandLess,
    HomeOutlined,
    Inventory2Outlined,
    RecentActors,
    Person,
    PlaylistAdd, Home
} from "@mui/icons-material";
import FactoryIcon from '@mui/icons-material/Factory';
import pageData from "../type/PageData.json"
import StoreIcon from '@mui/icons-material/Store';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import GroupIcon from '@mui/icons-material/Group';
import RequestPageIcon from '@mui/icons-material/RequestPage';

export const AppObject = {
    ParcelUrl: "/Create-parcel"
};

const drawerWidth = 240;

export function SideManu() {
    const [nowOpenIndex, setNowOpenIndex] = useState<number>(0);

    const handleOpen = (value:number) => {
        setNowOpenIndex(nowOpenIndex === value ? 0 : value);
    };

    const menuList:any = [
        {
            label: "หน้าแรก",
            icon: <Home style={{color: "white"}}/>,
            to: '/',
        },
        {
            label: "ระบบแอดมิน",
            icon: <GroupIcon style={{color: 'white'}}/>,
            collapse: {
                list: [
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "บัญชีผู้ใช้งาน",
                        to: '/admin'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "จัดการสิทธิ์",
                        to: '/Authority'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "จัดการผู้ใช้",
                        to: '/User'
                    }
                ]
            }
        },
        {
            label: "รายการพัสดุ",
            icon: <RecentActors style={{color: 'white'}}/>
        },
        {
            label: "ระบบบุคคล",
            icon: <Person style={{color: 'white'}}/>,
            collapse: {
                list: [
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "บริษัท เลเจนด์ อ๊อฟ โปรดักส์ จำกัด",
                        to: '/Person'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "บริษัท อินคอสแม็ก จำกัด",
                        to: '/hr-cosmic'
                    }
                ]
            }
        },
        {
            label: "ระบบสร้างสินค้า",
            icon: <FactoryIcon style={{color: "white"}}/>,
            collapse: {
                list: [
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "สร้าง Product",
                        to: '/admin'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "Cosmetic",
                        to: '/cosmetic'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "Food-Drink",
                        to: '/food'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "Raw Material",
                        to: '/create-raw-material'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "Pet Shop",
                        to: '/pet-shop'
                    }
                ]
            }
        },
        {
            label: "ระบบผลิต",
            icon: <Inventory2Outlined style={{color: 'white'}}/>,
            collapse: {
                list: [
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "การสั่งซื้อ",
                        to: '/all-manufacture'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "สารวัตถุดิบ",
                        to: '/all-rawmaterial'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "สูตรสินค้า",
                        to: '/all-productformula'
                    },
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "Test & Dev",
                        to: '/all-testanddev'
                    }
                ]
            }
        },
        // {
        //     label: "ระบบคลังสินค้า",
        //     icon: <HomeOutlined style={{color: 'white'}}/>,
        //     collapse: {
        //         list: [
        //             {
        //                 icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
        //                 label: "การสั่งซื้อ",
        //                 to: '/all-warehouse'
        //             },
        //             {
        //                 icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
        //                 label: "คลังของทั้งหมด",
        //                 to: '/dashboard-warehouse'
        //             }
        //         ]
        //     }
        // },
        {
            label: "ระบบคลังสินค้า",
            icon: <StoreIcon style={{color: 'white'}}/>,
            to: '/warehouse'
        },
        {
            label: "ระบบบัญชี",
            icon: <RequestPageIcon style={{color: 'white'}}/>,
            to: '/audit'
        },
        {
            label: "ระบบสั่งงาน",
            icon: <PlaylistAdd style={{color: "white"}}/>,
            collapse: {
                list: [
                    {
                        icon: <Circle sx={{fontSize: 10}} style={{color: 'white'}}/>,
                        label: "รายการสั่งงาน",
                        to: '/tasklist'
                    }
                ]
            }
        }
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
            sx={{...styles.drawer, height: '100%'}}
            variant="permanent"
            anchor="left"
        >
            <List>
                {
                    menuList.length > 0 && menuList.map((item:any, index:number) => {
                        return (
                            <Box sx={{backgroundColor: nowOpenIndex === index + 1 ? "orange" : "initial", borderTopRightRadius: '40px'}} key={index}>
                                {
                                    item.to !== undefined && item.to !== null ? <Link to={item.to} style={{textDecoration: 'none', color: 'inherit'}}>
                                        <ListItemButton onClick={() => {
                                            if(item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0)
                                            {
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
                                        if(item.collapse !== undefined && item.collapse !== null && item.collapse.list !== undefined && item.collapse.list !== null && item.collapse.list.length > 0)
                                        {
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
                                                    item.collapse.list.map((collapseItem:any, coolapseItemIndex:number) => {
                                                        return (
                                                            collapseItem.to !== undefined && collapseItem.to !== null ? <Link to={collapseItem.to} key={coolapseItemIndex} style={{textDecoration: 'none', color: 'inherit'}}>
                                                                <ListItemButton sx={{pl: 4}}>
                                                                    <ListItemIcon>
                                                                        {collapseItem.icon}
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={collapseItem.label} />
                                                                </ListItemButton>
                                                            </Link> : <ListItemButton sx={{pl: 4}} key={coolapseItemIndex}>
                                                                <ListItemIcon>
                                                                    {collapseItem.icon}
                                                                </ListItemIcon>
                                                                <ListItemText primary={collapseItem.label}/>
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
