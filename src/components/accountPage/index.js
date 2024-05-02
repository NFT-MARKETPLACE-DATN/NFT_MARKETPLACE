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
  MenuItem,
  Select,
  FormControl,
  Drawer,
  Menu,
  Box,
  Grid,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
} from '@mui/material';

import AccountPageStyle from './AccountPageStyle';
import userIcon from "../../images/logos/account.svg";

const AccountPage = () => {
  const [value, setValue] = useState("One");
  const [selectTab, setSelectTab] = useState(1)
  const handleChangeTab = (event, newValue) => {

    if (newValue == "One") {
      if (value == selectTab) return;
      setSelectTab(1);
    } else if (newValue == "Two") {
      if (value == selectTab) return;
      setSelectTab(2)
    } else if (newValue == "There") {
      if (value == selectTab) return;
      setSelectTab(3);
    } else return;
    setValue(newValue);
  };
  // useEffect(()=>{
  //     console.log(selectTab);
  // },[selectTab])
  return (
    <>
      <AccountPageStyle>
        <div className='account'>
          <div className='accountInfo'>
            <div className='account-background'>
              <div className='backgroundInfo'></div>
            </div>
            <div className='account-logo'>
              <img className='logo' src={userIcon} alt="icon-account" style={{ backgroundColor: "#189e00" }}></img>
            </div>
            <div className='account-name'>
              Unnamed
              <div></div>
            </div>
          </div>
          <div className='accountTab'>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="One" label="Item One" />
              <Tab value="Two" label="Item Two" />
              <Tab value="There" label="Item Three" />
            </Tabs>
          </div>
        </div>

      </AccountPageStyle>
    </>
  )
}
export default AccountPage