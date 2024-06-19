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
import ListItemAccountStyle from './ListItemAccountStyle'
import PhanTomWalletLogo from '../../images/logos/PhantomIcon.svg'
import BuyIcon from '../../images/logos/BuyIcon.svg'
import { useNavigate } from 'react-router-dom'
import BaseButton from '../../containers/base/Button'
const ItemList = (props) => {
  const { data, account } = props
  const navigate = useNavigate()
  const handlerClick = (item) => {
    console.log(item)
    // navigate(`/nft?id=${item.id}`)
  }
  return (
    <ListItemAccountStyle>
      <Grid className='gird' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) => (
          <Grid item xs={6} md={3} xl={3} key={index} className='itemNFT'>
            <Button onClick={() => handlerClick(item)} className='bttNFT'>
              <Card variant='outlined' className='infoNFT'>
                <div className='imageNFT'>
                  <img src={item.url} className='img'></img>
                </div>
                <CardContent className='nameNFT'>{item.pirce} SOL</CardContent>
              </Card>
            </Button>
          </Grid>
        ))}
      </Grid>
    </ListItemAccountStyle>
  )
}

export default React.memo(ItemList)
