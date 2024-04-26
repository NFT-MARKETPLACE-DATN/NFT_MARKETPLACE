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
  CardActions
} from '@mui/material'
import ListItemStyle from './ListItemStyle'

const ItemList = (props) => {
  const { data } = props
  return (
    <ListItemStyle>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={6} md={4} key={index}>
            <Card variant='outlined' style={{ width: '100%', height: '200px' }}>
              <CardContent>{item.name}</CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ListItemStyle>
  )
}

export default ItemList
