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
import { getConnected } from "../../utils/walletConnet";
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram ,Keypair, sendAndConfirmTransaction} from '@solana/web3.js';
import {initCollection} from "../../utils/createMintNFT";
import { approveNFT } from '../../utils/approveNFT';
import { transferNFT } from '../../utils/transferNFT';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, getNftInfo } from "../../redux/actions";
import Loading from '../../containers/Loading';
import { formatString, formatDateByTz } from "../../utils/helpers";

import * as token from "@solana/spl-token"
const DetailNFT = () => {
  const params = useSearchQuery();
  const [isCollapse, setIsCollapse] =useState(false);
  const [isCollapseTraits, setIsCollapseTraits] =useState(false);
  // const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/P4DtZuchPeew_-sMonOKOBavg0B8pj0j", 'confirmed');
  const onCollapse = ()=>{
    setIsCollapse(!isCollapse);
  };
  const onCollapseTraits = ()=>{
    setIsCollapseTraits(!isCollapseTraits);
  };
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.globalState || {});
  const {
    loading , 
    nftInfo
  } = useSelector(state => state.nftState || {});
  console.log(nftInfo);
  useEffect(()=>{
    dispatch(
      getNftInfo({
        nftID:params.id
      })
    )
  },[])
  const handlerBuyNFT = async()=> {
    if(!account){
      dispatch(setLogin(true));
    }
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
    // const lamports = await token.getMinimumBalanceForRentExemptMint(connection);
    // const collectionAddress = Keypair.generate();
    // console.log(collectionAddress.publicKey.toBase58());
    // const programId = token.TOKEN_PROGRAM_ID
    // const transaction = new Transaction().add(
    //   SystemProgram.createAccount({
    //     fromPubkey: new PublicKey(wallet.walletAddress),
    //     newAccountPubkey: collectionAddress.publicKey, // địa chỉ tài khoản
    //     space: token.MINT_SIZE,
    //     lamports,
    //     programId,
    //   }),
    // )
    // transaction.feePayer = new PublicKey(wallet.walletAddress);
    // const { blockhash } = await connection.getRecentBlockhash();
    // transaction.recentBlockhash = blockhash;
    // // console.log(transaction);
    // transaction.sign(collectionAddress);
    // try {
    //   const signedTransaction = await wallet.provider.signTransaction(transaction);
    //   console.log(signedTransaction);
    //   const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    //   console.log(signature);
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log(account);
  //  await initCollection("https://solana-devnet.g.alchemy.com/v2/UZe8cyrmtLjH44EJ2mm8VZdo1ofTDCfA",account)
    // await approveNFT(account);
    // await transferNFT();

  }
  // console.log(params);
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
                {/* <div className=''></div> */}
                {/* <CardContent className = "">
                  <div className='textDescription'></div>
                </CardContent> */}
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
                  // placeholder='Enter a Description'
                  // value={notes}
                  // onChange={(event) => setNotes(event.target.value.trimStart())}
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
                  <Collapse in={isCollapseTraits} timeout="auto" unmountOnExit className=''>
                      {nftInfo?.attribute.map((item)=>{
                        return (
                          <CardContent>
                            <div>fasdf</div>
                          </CardContent>
                        )
                        
                      })}
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
                      
                      {/* <div className='labelText'>{nftInfo?.mint_address && formatString(nftInfo?.mint_address)}</div> */}
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
                            style={{ color: 'blue',textDecoration:'none',fontWeight:"600" }}
                            >
                            { formatString(nftInfo?.metadataUrl)}
                          </a>
                        </Tooltip>
                      }
                  </CardContent>
                  <CardContent className='info'>
                      <div>Token StandardT</div>
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
            <div className='nameNFT'>{nftInfo?.nftName} &nbsp;
            </div>
            <div className='symbolNFT'>{nftInfo?.symbol}</div>
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
              <Card className='priceItemNFT'>
                <div className='titilePrice'>Current price</div>
                <CardContent>
                  <div className='price'>{nftInfo?.price} SOL</div>
                </CardContent>
              
              </Card>
            
            <div className='tradeNFT'>
              <div className='priceNFT'>
                <Button className='buyBtn' width='100%' variant='contained' onClick={handlerBuyNFT}>
                  Buy
                </Button>
                </div>
              <div className='offerNFT'>
                {/* <Button className='makeOfferBtn' width='100%' >
                   Make offer  
                </Button> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </DetailNFTStyle>
  </>

  )
}

export default DetailNFT
