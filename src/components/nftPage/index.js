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
import { getConnected } from "../../utils/walletConnet";
import { Connection, PublicKey, clusterApiUrl, Transaction, SystemProgram ,Keypair, sendAndConfirmTransaction} from '@solana/web3.js';
import {initCollection} from "../../utils/createMintNFT";
import { approveNFT } from '../../utils/approveNFT';
import { transferNFT } from '../../utils/transferNFT';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from "../../redux/actions";
import * as token from "@solana/spl-token"
const DetailNFT = () => {
  const params = useSearchQuery();
  const [isCollapse, setIsCollapse] =useState(false);
  const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/P4DtZuchPeew_-sMonOKOBavg0B8pj0j", 'confirmed');
  const onCollapse = ()=>{
    setIsCollapse(!isCollapse);
  };
  const dispatch = useDispatch();
  const {account} = useSelector(state => state.globalState || {});
  
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
                  <Tooltip title='NFT Detail' placeholder='bottom' arrow>
                    <img src={InfoIcon} alt='fasdf'/>
                  </Tooltip>
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
                <Button className='buyBtn' width='100%' variant='contained' onClick={handlerBuyNFT}>
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
