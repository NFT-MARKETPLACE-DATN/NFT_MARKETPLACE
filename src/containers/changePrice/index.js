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
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import validate from './validate';
import CloseIcon from "../../images/closeIc.svg";
import { useDispatch, useSelector } from 'react-redux';
import { syncNftMarket,setLoadingNft, getNftListed } from "../../redux/actions";
import { approveNFT } from '../../utils/approveNFT';
export const ChangePriceDialog = (props) => {
    const { visible, onClose, } = props;
    const { accountInfo} = useSelector(state => state.globalState || {});
    const {
      nftInfo
    } = useSelector(state => state.nftState || {});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onCloseDialog = () => {
        onClose();
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
           price: nftInfo?.isList == 1 ? nftInfo?.price : 0,
           defaultPirce: nftInfo?.isList == 1 ? nftInfo?.price : 0
        },
        validate,
        onSubmit: async (values) => {
           try {
            let transaction = null;

            if(!nftInfo?.isList){
                dispatch(setLoadingNft(true));
                transaction = await approveNFT(nftInfo.mint_address,nftInfo.token_account);
                // console.log(transaction);
                if(!transaction.status){
                    dispatch(setLoadingNft(false));
                    toast.error(transaction.result);
                    onClose();
                    return 
                }
            }
            const params ={
                userID:accountInfo.id,
                isAction: nftInfo?.isList == 1 ? false : true,
                nftID : nftInfo.id,
                price : (values.price * Math.pow(10, 9)),
                isList : true ,
                isTrending : false,
                transaction:transaction ?  transaction?.result : null
            }
            dispatch(syncNftMarket(params));
           } catch (error) {
                console.log(error);
                toast.error(error.message)
                dispatch(setLoadingNft(false));
           }
           onClose();
           setTimeout(() => {
            }, 1000);
           navigate('/');
       
        //    dispatch(getNftListed({
        //         pageIndex: 1,
        //         pageSize: 1,
        //    }));

        }
      })
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={visible}
            onClose={onCloseDialog}
            className='dialogs'
        >
            <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent:"space-between"}} id="customized-dialog-title">
                <div style={{ lineHeight:'32px',fontWeight:600,fontSize:"24px", marginLeft:"10px"}}>Price</div>
                <IconButton onClick={onCloseDialog}>
                    <img className="close-dialog-ic" src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent
                    style={{
                        height:"100%",
                        padding:"10px 20px 20px 15px",
                        // display: 'flex',
                        // gap:"15px"
                    }}>
                   
                        <TextField
                        className='input'
                        hiddenLabel
                        variant='outlined'
                        placeholder="Enter price"
                        type='text'
                        name="price"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        defaultValue={nftInfo?.isList == 1 ? nftInfo?.price : null }
                        sx={{
                            "& > p":{marginLeft:0,marginRight:0}
                        }}
                        InputProps={{
                            // inputProps: { inputMode: 'numeric', pattern: '[0-9]*' },
                            endAdornment: <InputAdornment position="end">SOL</InputAdornment>,
                          }}
                        error={formik.touched.price && !!formik.errors.price}
                        helperText={formik.touched.price && formik.errors.price}
                        fullWidth
                        /> 
                </DialogContent>
                <div style={{padding:" 0 24px 24px 20px",}}>
                    <Button variant="contained" 
                        sx={{ width:"100%", height:"40px",borderRadius:"10px" }} type="submit" >
                            {nftInfo?.isList == 1 ? `Change Price` : `List`}
                    </Button>
                </div>
            </form>
           
        </Dialog>
    )
};