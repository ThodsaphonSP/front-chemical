import React, {JSXElementConstructor, ReactElement} from 'react';
import Tab from '@mui/material/Tab';
import { TabProps } from '@mui/material/Tab/Tab';
import Badge from '@mui/material/Badge';
import Icon from '@mui/material/Icon';
import {Box} from "@mui/material"; // or your custom Icon component


interface CustomTabProps extends TabProps {
    badgeContent?: React.ReactNode;
    icon?: string | ReactElement<any, string | JSXElementConstructor<any>> | undefined;
}
export const StatusTab: React.FC<CustomTabProps> = ({ badgeContent, icon, ...props }) => {

    return (
        <Tab
            icon={badgeContent ? <Badge badgeContent={badgeContent} color="primary">{icon}</Badge> : icon}

            {...props}
        />
    );
};
