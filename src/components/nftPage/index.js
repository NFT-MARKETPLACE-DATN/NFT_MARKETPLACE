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
import NewsIcon from "../../images/logos/newsIcon.svg"
import { useSearchQuery } from '../../utils/helpers';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom'
import { getConnected } from "../../utils/walletConnet";
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram ,Keypair, sendAndConfirmTransaction} from '@solana/web3.js';
import {initCollection} from "../../utils/createMintNFT";
import { approveNFT } from '../../utils/approveNFT';
import { transferNFT } from '../../utils/transferNFT';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, getNftInfo, syncNftMarket } from "../../redux/actions";
import Loading from '../../containers/Loading';
import { formatString, formatDateByTz } from "../../utils/helpers";
import { ChangePriceDialog } from '../../containers/changePrice';
import {HandlerBuyNftDialog, BuyNFTDialog} from "../../containers/BuyNftDialog";
import * as token from "@solana/spl-token"
const DetailNFT = () => {
  const {account, accountInfo} = useSelector(state => state.globalState || {});
  const {
    loading, 
    nftInfo
  } = useSelector(state => state.nftState || {});
  const params = useSearchQuery();
  const [isCollapse, setIsCollapse] =useState(false);
  const [isCollapseTraits, setIsCollapseTraits] =useState(false);
  const [isPrice, setIsPrice] =useState(false);
  const [isPay, setIsPay] =useState(false);
  const navigate = useNavigate();
  const onCollapse = ()=>{
    setIsCollapse(!isCollapse);
  };
  const onCollapseTraits = ()=>{
    setIsCollapseTraits(!isCollapseTraits);
  };
  const dispatch = useDispatch();

  // console.log(nftInfo);
  useEffect(()=>{
    dispatch(
      getNftInfo({
        nftID:params.id
      })
    )
  },[])

  const handlerChangePrice = () =>{
    setIsPrice(true)
  }
  const handlerUnList = async () =>{
    const params = {
      userID:accountInfo.id,
      isAction: true,
      nftID : nftInfo.id,
      price : 0,
      isList : false,
      isTrending : false,
    }
    dispatch(syncNftMarket(params));
    setTimeout(() => {
    }, 1000);
    navigate("/")
    // dispatch(
    //   getNftInfo({
    //     nftID:params.id
    //   })
    // )
  }
  const handlerList = async () =>{
    setIsPrice(true)
  }
  const handlerBuyNFT = async()=> {
    if(!account){
      dispatch(setLogin(true));
      return;
    }
    setIsPay(true)
    // const wallet =await getConnected();
    // const transaction = new Transaction().add(
    //   SystemProgram.transfer({
    //     fromPubkey: new PublicKey(account),
    //     toPubkey: new PublicKey("3GNad18DSitYpiyQuaGgRLvUpT96oe2Arotgj9adQAna"),
    //     lamports: 1000000, // Số lượng lamports (1 SOL = 10^9 lamports)
    //   })
    // );
    // transaction.feePayer = new PublicKey(wallet.walletAddress);
    // const { blockhash } = await connection.getRecentBlockhash();
    // transaction.recentBlockhash = blockhash;
    // console.log(transaction);
    // try {
    //   const signedTransaction = await wallet.provider.signTransaction(transaction);
    //   console.log(signedTransaction.serialize());
    //   const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    //   console.log(signature);
    // } catch (error) {
    //   console.log(error);
    // }

    // await transferNFT();

  }
  return (
    <>
    <Loading loading={loading}/>
    <DetailNFTStyle>
      <div className='nftItem'>
        <div className='infoNFT'>
          <div className='imageNFT'>
            <Card variant='outlined' className='cardNFT'>
              <CardHeader
                avatar={
                  <Tooltip title='Solana Chain' placeholder='bottom' arrow>
                    <Avatar aria-label='recipe' src={SolanaIcon}></Avatar>
                  </Tooltip>
                }
              />
              <CardMedia
                lt='fasdf'
                // image='https://pantravel.vn/wp-content/uploads/2023/11/dong-thac-trang-xoa-do-xuong.jpg'
                image={nftInfo?.image || null}
                component='img'
                className='image'
              />
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
                <div className='infoCreated'>
                  <span className='labelHeader'>By&nbsp;</span> 
                  <Tooltip title='Creator Address' placeholder='bottom' arrow>
                    <a 
                      href={`https://explorer.solana.com/address/${nftInfo?.createdAddress}?cluster=testnet`}//devnet
                      target="_blank"
                      role="button"
                      tabIndex="0"
                      style={{ color: 'black',textDecoration:'none' }}
                      className='labelText'
                    >
                          {nftInfo?.createdAddress && formatString(nftInfo?.createdAddress)}
                        </a>
                    </Tooltip>
                  {/* <span className='labelText'>{nftInfo?.createdAddress ? formatString(nftInfo.createdAddress) : null}</span> */}
                </div>
                {nftInfo?.description && 
                  <TextField
                  className='infoDescription'
                  fullWidth
                  hiddenLabel
                  multiline
                  rows={3}
                  type='text'
                  variant='outlined'
                  name='descriptionNFT'
                  // onChange={formik.handleChange}
                  disabled = {true}
                  defaultValue={nftInfo?.description ? nftInfo?.description : null }
                  sx={{
                    '& .MuiInputBase-input.Mui-disabled': {
                      color: 'black', // Thay đổi màu chữ ở đây
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: 'black', // Thay đổi màu chữ của nhãn ở đây
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                  />
                }
              
                
                </CardContent>
                <hr width="100%"/>
                <CardContent className='infoTraits'>
                  <div className='labelTraits'>
                    <Tooltip title='NFT Traits' placeholder='bottom' arrow>
                      <img src={NewsIcon} alt='fasdf'/>
                    </Tooltip>
                    <div className='labelText'>Traits</div>
                  </div>
                 
                  <IconButton onClick={event => onCollapseTraits()}>
                    {isCollapseTraits ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </CardContent>
                {nftInfo?.attribute && nftInfo?.attribute.length >0 ? 
                  <Collapse  in={isCollapseTraits} timeout="auto" unmountOnExit className='nftTraits'>
                    <Grid className='gird' container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                      {nftInfo?.attribute.map((item,index)=>{
                        return (
                          <Grid item xs={4} md={2} xl={2} key={index} className='itemTraits'>
                            <CardContent key={index} className='item'>
                              <div className='trait_type'>{item.trait_type}</div>
                              <div className='value'>{item.value}</div>
                            </CardContent>
                          </Grid>
                        )
                      })}
                  
                    </Grid>
                  </Collapse> 
                : 
                <></>  
                }

                <hr width="100%"/>
                <CardContent className='infoSmartContract'>
                  <div className='labelInfoSC'>
                    <Tooltip title='NFT Detail' placeholder='bottom' arrow>
                      <img src={InfoIcon} alt='fasdf'/>
                    </Tooltip>
                    <div className='labelText'>Detail</div>
                  </div>
                  <IconButton onClick={event => onCollapse()}>
                    {isCollapse ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </CardContent>
                <Collapse in={isCollapse} timeout="auto" unmountOnExit className='infoSC'>
                  <CardContent className='info'>
                      <div>Contract Address</div>
                      <Tooltip title='Contract Address' placeholder='bottom' arrow>
                        <a 
                          href={`https://explorer.solana.com/address/${nftInfo?.mint_address}?cluster=testnet`}//devnet
                          target="_blank"
                          role="button"
                          tabIndex="0"
                          style={{ color: 'black',textDecoration:'none',fontWeight:"600" }}
                          >
                          {nftInfo?.mint_address && formatString(nftInfo?.mint_address)}
                        </a>
                      </Tooltip>
                  </CardContent>
                  <CardContent className='info'>
                      <div>MetaData NFT</div>
                      { nftInfo?.metadataUrl &&
                       <Tooltip title='MetaData NFT' placeholder='bottom' arrow>
                          <a 
                            href={nftInfo?.metadataUrl}//devnet
                            target="_blank"
                            role="button"
                            tabIndex="0"
                            style={{ color: 'black',textDecoration:'none',fontWeight:"600" }}
                            >
                            { formatString(nftInfo?.metadataUrl.replace(/^https?:\/\//, ''))}
                          </a>
                        </Tooltip>
                      }
                  </CardContent>
                  <CardContent className='info'>
                      <div>Token Standard</div>
                      <div className='labelText'>SPL</div>
                  </CardContent>
                  <CardContent className='info'>
                      <div>Chain</div>
                      <div className='labelText'>Solana</div>
                  </CardContent>
                  <CardContent className='info'>
                      <div>Innitiated Date</div>
                      <div className='labelText'>{formatDateByTz(nftInfo?.created_date,'YYYY/MM/DD HH:mm')}</div>
                  </CardContent>
                </Collapse>
            </Card>
       
          </div>
        </div>
        <div className='marketNFT'>
          <div className='nameNFT'>
            <span className='name'>{nftInfo?.nftName}
            <span className='symbol'>#{nftInfo?.symbol}</span>
            </span>
            
            <div className='ownerNFT'>
                <span className='labelHeader'>Owner By&nbsp;</span> 
                  <Tooltip title='Owner Address' placeholder='bottom' arrow>
                    <a 
                      href={`https://explorer.solana.com/address/${nftInfo?.ownAddress}?cluster=testnet`}//devnet
                      target="_blank"
                      role="button"
                      tabIndex="0"
                      style={{ color: 'black',textDecoration:'none'}}
                      className='labelText'
                    >
                      {nftInfo?.ownAddress && formatString(nftInfo?.ownAddress)}
                    </a>
                    </Tooltip>
            </div>
          </div>
          <div className='listingNFT'>
            {nftInfo?.isList == 1 &&
              <Card className='priceItemNFT'>
                <div className='titilePrice'>Current price</div>
                <div className="detailPrice">
                  <CardContent>
                    <div className='priceValue'>{nftInfo?.price} SOL</div>
                  </CardContent>
                  {nftInfo?.user_id == accountInfo.id && 
                    <Button className='changePriceBtn' width='100%' variant='contained' onClick={handlerChangePrice}>
                      ChangePrice
                    </Button>
                  }
                </div>
       
              </Card>
              }
              
            <div className='tradeNFT'>
              <div className='priceNFT'>
                { nftInfo?.user_id == accountInfo.id ? 
                  // (nftInfo?.isList == 1 ? 

                  //   <Button className='unListBtn' width='100%' variant='contained' onClick={handlerBuyNFT}>
                  //     UnList
                  //   </Button>
                  //     :
                  //   <Button className='listBtn' width='100%' variant='contained' onClick={handlerBuyNFT}>
                  //     List
                  //   </Button>
                  // ) 
                    <Button className='unListBtn' width='100%' variant='contained' onClick={nftInfo?.isList == 1 ? handlerUnList : handlerList }>
                      {nftInfo?.isList == 1 ? `UnList` : `List`}
                    </Button>
                  :
                  ( nftInfo?.isList == 1 &&
                  <Button className='buyBtn' width='100%' variant='contained' onClick={handlerBuyNFT}>
                    Buy
                  </Button>
                  ) 
                }
               
                </div>
              {/* <div className='offerNFT'> */}
                {/* <Button className='makeOfferBtn' width='100%' >
                   Make offer  
                </Button> */}
                {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </DetailNFTStyle>
    <ChangePriceDialog
      visible={isPrice}
      onClose={() => {
        setIsPrice(false)
      }}
    />
    <HandlerBuyNftDialog
    visible={isPay}
    onClose={() => {
      setIsPay(false)
    }}
    />
  </>

  )
}

export default DetailNFT
