import React, { useState, useEffect } from 'react';
import {
    TextField,
    InputAdornment,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    // MenuItem,
    Select,
    FormControl,
    Drawer,
    Menu,
    Box,
    Collapse
  } from '@mui/material';
import ListItemStyle from "./ListItemStyle";


const ItemList = ()=>{
    return (
        <ListItemStyle>
            <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: { sm: '24%', boxShadow: '0px 12px 24px #0000000f' },
                columnGap: '8px',
                // height: `${height}px`,
                height: listExWallet.length === 0 ? '503px' : '1365px',
                top: 'unset',
                borderRadius: '4px',
                position: 'static',
                width: '100%',
              },
            }}
            open
            >

            </Drawer>
        </ListItemStyle>
    )
}

export default ItemList;