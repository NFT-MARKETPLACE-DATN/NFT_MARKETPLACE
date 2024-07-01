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
import ListItemStyle from './ListItemStyle'
import PhanTomWalletLogo from '../../images/logos/PhantomIcon.svg'
import BuyIcon from '../../images/logos/BuyIcon.svg'
import { useNavigate } from 'react-router-dom'
import BaseButton from '../../containers/base/Button';
import NoDataComponent from '../../containers/NoData'
const ItemList = (props) => {
  const { data, account } = props
  const navigate = useNavigate()
  const handlerClick = (item) => {
    // console.log(item)
    navigate(`/nft?id=${item.id}`)
  }
  return (
    <ListItemStyle>
      <Grid className='gird' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.length>0 ? (
            data.map((item, index) => (
              <Grid item xs={6} md={3} xl={3} key={index} className='itemNFT'>
                <Button onClick={() => handlerClick(item)} className='bttNFT'>
                  <Card variant='outlined' className='infoNFT'>
                    {/* <CardMedia alt='fasdf' image={item.url} component='img' className='imageNFT'></CardMedia> */}
                    <div className='imageNFT'>
                      <img src={item.image} className='img'></img>
                    </div>
                    <CardContent className='nameNFT'>
                      {item.name}
                    </CardContent>
                    {account == null ? <>
                      <CardContent className='priceNFT'>
                        {item.price} SOL
                      </CardContent>
                    <div className='buyNFT'>
                      <div className='bttBuy'>
                        <img src={BuyIcon}></img>Buy
                      </div>
                    </div>
                    </> : 
                      <></>
                    }
            
                  </Card>
                </Button>
              </Grid>
            ))
        ):
        <NoDataComponent isShowText={true}></NoDataComponent>
        }
      
      </Grid>
    </ListItemStyle>
  )
}

export default React.memo(ItemList)
