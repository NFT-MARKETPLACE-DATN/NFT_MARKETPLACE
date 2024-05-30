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
  Tabs,
  Tab,
  CardHeader,
  CardMedia,
  Avatar,
  Tooltip,
} from '@mui/material'
import DetailNFTStyle from './DetailNFTStyle';
import SolanaIcon from '../../images/logos/SolanaIcon.svg';
import SubjectIcon from "../../images/logos/SubjectIcon.svg";
import { useSearchQuery } from '../../utils/helpers'
const DetailNFT = () => {
  const params = useSearchQuery()
  console.log(params)
  return (
    <DetailNFTStyle>
      <div className='nftItem'>
        <div className='infoNFT'>
          <div className='imageNFT'>
            <Card variant='outlined' className=''>
              <CardHeader
                avatar={
                  <Tooltip title='Solana Chain' placeholder='bottom' arrow>
                    <Avatar aria-label='recipe' src={SolanaIcon}></Avatar>
                  </Tooltip>
                }
              ></CardHeader>
              <CardMedia
                lt='fasdf'
                image='https://pantravel.vn/wp-content/uploads/2023/11/dong-thac-trang-xoa-do-xuong.jpg'
                component='img'
                className='imageNFT'
              ></CardMedia>
            </Card>
          </div>
          <div className='descriptionNFT'>
            <Card className='infoDescriptionNFT'>
              <CardContent className='labelDescription'>
                <img src={SubjectIcon} alt='fasdf'/>
                <div className='labelText'>Description</div>
                
                </CardContent>
              <CardContent className='creatorNFT'>
                <spna className='labelHeader'>By&nbsp;</spna> 
                <span className='labelText'>adsfsasdf</span>
                
                </CardContent>
              <CardActions className='detailsNFT'>
                
              </CardActions>
              {/* <Collapse in={expanded} timeout="auto" unmountOnExit>

              </Collapse> */}
            </Card>
          </div>
        </div>
        <div className='marketNFT'>
          <div className='colationName'></div>
          <div className='ownerNFT'>Owner By fsadfsdf</div>
          <div className='catergoryNFT'>PFPs</div>
          <div className='listingNFT'>
            <TextField></TextField>
            <div className='priceNFT'>3 SOL</div>
            <div className=''>
              <div className='priceNFT'>Buy </div>
              <div className='offerNFT'>Make offer</div>
            </div>
          </div>
        </div>
      </div>
    </DetailNFTStyle>
  )
}

export default DetailNFT
