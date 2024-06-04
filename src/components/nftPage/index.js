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
  Button
} from '@mui/material'
import DetailNFTStyle from './DetailNFTStyle';
import SolanaIcon from '../../images/logos/SolanaIcon.svg';
import SubjectIcon from "../../images/logos/SubjectIcon.svg";
import InfoIcon from "../../images/logos/InfoIcon.svg";
import { useSearchQuery } from '../../utils/helpers';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const DetailNFT = () => {
  const params = useSearchQuery();
  const [isCollapse, setIsCollapse] =useState(false);

  const onCollapse = ()=>{
    setIsCollapse(!isCollapse);
  };
  // console.log(params);
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
                <hr width="100%"/>
              <CardContent className='creatorNFT'>
                <span className='labelHeader'>By&nbsp;</span> 
                <span className='labelText'>adsfsasdf</span>
                
                </CardContent>
                <hr width="100%"/>
                <CardContent className='infoSmartContract'>
                  <div className='labelInfoSC'>
                  <img src={InfoIcon} alt='fasdf'/>
                  <div className='labelText'>Detail</div>
                  </div>
                 
                  <IconButton onClick={event => onCollapse()}>
                    {isCollapse ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </CardContent>
                {/* <hr width="100%"/> */}
              {/* <CardActions className='detailsNFT'>
                sdfsdf
              </CardActions> */}
     
            </Card>
            <Card>
            <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                fasdfsadfsdf
            </Collapse>
            </Card>
        
          </div>
        </div>
        <div className='marketNFT'>
          <div className='nameNFT'>
            <div className='colationName'>Pepe</div>
            <div className='ownerNFT'>
            <div>Owner By fsadfsdf</div>
            <div></div>
            </div>
            {/* <div className='catergoryNFT'>PFPs</div> */}
          </div>
          <div className='listingNFT'>
              <Card className='priceItemNFT'>
                <div className='titilePrice'>Current price</div>
                <CardContent>
                  <div className='price'>3 SOL</div>
                </CardContent>
              
              </Card>
            

            
            <div className='tradeNFT'>
              <div className='priceNFT'>
                <Button className='buyBtn' width='100%' variant='contained'>
                  Buy
                </Button>
                </div>
              <div className='offerNFT'>
                <Button className='makeOfferBtn' width='100%' >
                   Make offer  
                </Button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </DetailNFTStyle>
  )
}

export default DetailNFT
