import {
    Dialog,
    IconButton,
    Box,
    Grid,
    Button,
    TextField,
    InputAdornment,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CloseIcon from "../../images/closeIc.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
// import {validateNftTrait} from "./validate";
import { useDispatch, useSelector } from 'react-redux';
import { setLogin, getNftInfo, syncNftMarket, setLoading } from "../../redux/actions";
import { toast } from 'react-toastify';
import { BuyNFT } from '../../utils/transferNFT';
export const HandlerBuyNftDialog = (props) => {
    const { visible, onClose,} = props;
    const {account, accountInfo} = useSelector(state => state.globalState || {});
    const {
      loading , 
      nftInfo
    } = useSelector(state => state.nftState || {});
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const onCloseDialog = () => {
        onClose();
    };
    // const formik = useFormik({
    //     enableReinitialize: true,
    //     initialValues: {
    //       accountBalace: 0,
    //       nftPrice :null
    //     },
    //     // validate:validateNftTrait,
    //     onSubmit: (values) => {
         
    //     //    onClose();
    //     }
    //   })
    const handlerBuyNFT = async ()=>{
        dispatch(setLoading(true));
        if(accountInfo.balance <= nftInfo.price){
            toast.error("Your balance is not enough to pay NFT");
            dispatch(setLoading(false));
            return;
        }
        const result = await BuyNFT(accountInfo.address,nftInfo.ownAddress,nftInfo.price);
        if(result.status){
            
        }else{
            toast.error(result.result);
            return ;
        }
    }
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={visible}
            onClose={onCloseDialog}
            className='dialogs'
        >
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent:"flex-end"}} id="customized-dialog-title">
                {/* <div style={{ lineHeight:'32px',fontWeight:600,fontSize:"24px", marginLeft:"10px"}}>Pay Nft for SOL</div> */}
                <IconButton onClick={onCloseDialog}>
                    <img className="close-dialog-ic" src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            {/* <form onSubmit={formik.handleSubmit}> */}
                <DialogContent
                    style={{
                        height:"100%",
                        padding:"0px 24px 20px 24px",
                        display: 'flex',
                        gap:"15px"
                    }}>
                        {/* display: 'flex', flexDirection:"column" */}
                    <Box style={{ m: 0, p: 2, gap:'5px', width:"100%" }}> 
                        {/* <div style={{ m: 0, p: 2, lineHeight:'24px',fontWeight:600,fontSize:"16px"}} >Value</div> */}
                        <div style={{width:"100%", display: 'flex', justifyContent:"center", marginBottom:"10px"}}>
                            <img
                            alt={nftInfo?.nftName}
                            src={nftInfo?.image}
                            loading="lazy"
                            className="image"
                            width={250}
                            height={250}/>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <span style={{lineHeight:"1.75rem", fontWeight:"700",fontSize:"1.375rem", }}>{nftInfo?.nftName}</span>
                            <span style={{lineHeight:"1.75rem",fontSize:"22px;", textAlign:"center", color:"rgb(138, 147, 155)"}}>#{nftInfo?.symbol}</span>
                        </div>
                        
                        <div style={{lineHeight:"1.25rem", fontWeight:"400",fontSize:"1rem", textAlign:"center", letterSpacing:"-32"}}>Buying for {nftInfo?.price} SOL</div>
                    </Box>
                </DialogContent>
                <div style={{padding:" 0 24px 24px 20px",}}>
                    <Button variant="contained" 
                        sx={{ width:"100%", height:"40px",borderRadius:"10px" }} 
                        onClick={handlerBuyNFT} >
                            Pay
                    </Button>
                </div>
                {/* <div style={{padding:" 0 24px 24px 20px",}}>
                    <Button variant="contained " 
                        sx={{ width:"100%", height:"40px",borderRadius:"10px" }} onClick={onClose} >
                            Add
                    </Button>
                </div> */}
            {/* </form> */}
           
        </Dialog>
    )
};


export const BuyNFTDialog = (props) => {
    const { visible, onClose, transaction} = props;
    const navigate = useNavigate();
    const onCloseDialog = () => {
        onClose();
        navigate('/');
    };
    
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={visible}
            // onClose={onCloseDialog}
            className='dialogs'
         
        >
            <DialogTitle
                className='dialog-title'
                style={{
                    padding: '10px'
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        // padding: window?.screen?.width > 400 ? '12px 12px 0 20px' : '0px 12px 0 12px',
                    }}
                >
                    <IconButton onClick={onCloseDialog}>
                        <img className="close-dialog-ic" src={CloseIcon} />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent
                style={{
                    height:"100%"
                }}>
                    Congratulations, you have successfully created an NFT
            </DialogContent>
            <DialogContent
                style={{
                    height:"100%"
                }}>
                <div>
                    {/* <span>
                        View transaction in Solana explorer:
                    </span> */}
                    <a 
                    href={`https://explorer.solana.com/tx/${transaction}?cluster=testnet`}//devnet
                    target="_blank"
                    role="button"
                    tabIndex="0"
                    style={{ color: 'blue',textDecoration:'none' }}
                    >
                        {/* { transaction ? `${transaction.substring(0,3)}...${transaction.substring(transaction.length-4,3)}` : <></>} */}
                        View Transaction
                    </a>

                </div>
                {/* <div>
                    <span>
                        View NFT in Solana explorer:
                    </span>
                    <a 
                    href={`https://explorer.solana.com/tx/${transaction}?cluster=devnet`}
                    target="_blank"
                    role="button"
                    tabIndex="0"
                    style={{ color: 'blue',textDecoration:'none' }}>{transaction}
                    </a>
                </div> */}
               
            </DialogContent>
        </Dialog>
    )
};