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
import PhanTomWalletLogo from "../../images/logos/PhantomIcon.svg";

const ItemList = (props) => {
  const { data } = props
  return (
    <ListItemStyle>
      <Grid className='gird' container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {data.map((item, index) => (
          <Grid item xs={6} md={3} key={index}>
            <Card variant='outlined' style={{ width: '100%', height: '300px' }}>
            <CardMedia alt='fasdf' image={PhanTomWalletLogo} component='img' height='180px'></CardMedia>
              <CardContent >
                {item.name}</CardContent>
              <CardActions>
                <Button>Click </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ListItemStyle>
  )
}

export default ItemList
