import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link as RouterLink } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
export const mainListItems = (
    <React.Fragment>
        <ListItemButton component={RouterLink} to ="/">
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
        <ListItemButton component={RouterLink} to="/main">
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Main Page" />
        </ListItemButton>
        <React.Fragment>
            <ListItemButton component={RouterLink} to="/friends">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Friends" />
            </ListItemButton>
        </React.Fragment>
        <React.Fragment>
            <ListItemButton component={RouterLink} to="/pay"> {/* Update the "to" prop here */}
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Pay and Request" />
            </ListItemButton>
        </React.Fragment>
    </React.Fragment>
);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck