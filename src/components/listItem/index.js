import React, { useState, useEffect } from 'react'
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
  Button,
  CardMedia
} from '@mui/material'
import ListItemStyle from './ListItemStyle';
import PhanTomWalletLogo from '../../images/logos/PhantomIcon.svg';
import BuyIcon from '../../images/logos/BuyIcon.svg'
import { useNavigate } from 'react-router-dom';
import BaseButton from '../../containers/base/Button';
const ItemList = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const handlerClick = (item) => {
    console.log(item)
    navigate(`/nft?id=${item.id}`);
  }
  return (
    <ListItemStyle>
      <Grid className='gird' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) => (
          <Grid item xs={6} md={3} key={index} className='itemNFT'>
            <Button onClick={() => handlerClick(item)} className='bttNFT'>
              <Card variant='outlined' className='infoNFT'>
                <CardMedia alt='fasdf' image={PhanTomWalletLogo} component='img' className='imageNFT'></CardMedia>
                <CardContent className='nameNFT'>{item.name}</CardContent>
                {/* <CardActions>Click</CardActions> */}
                <div className="buyNFT">
                <BaseButton text='Buy' className='' type='primary' width='90%' icon={BuyIcon}/>
                {/* <Button 
                 variant="outlined"
                 size="large"
                 type='primary'
                >Buy</Button> */}
                </div>
               
              
                
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </ListItemStyle>
  )
}

export default ItemList
