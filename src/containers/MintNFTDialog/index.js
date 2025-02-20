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
    Tooltip
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import CloseIcon from "../../images/closeIc.svg";
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {validateNftTrait} from "./validate";
// import { setWallet,login } from "../../redux/actions";
// import { useDispatch, useSelector } from 'react-redux';

const MintNFTDialog = (props) => {
    const { visible, onClose, transaction, addressNft } = props;
    // const dispatch = useDispatch();
    // const {
    //     isLogin,
    //     account,
    //     accountInfo={},
    //     loading = false
    //   } = useSelector(state => state.globalState || {});
    const navigate = useNavigate();
    const onCloseDialog = () => {
        // dispatch(login({
        //     address: accountInfo.address
        // }));
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
                    height:"100%",
                    fontSize:"16px",
                    fontWeight:500
                }}>
                    Congratulations, you have successfully created NFT
            </DialogContent>
            <DialogContent
                style={{
                    height:"100%",
                    display:"flex",
                    justifyContent:"space-between"
                }}>
                <div>
                    {/* <span>
                        View transaction in Solana explorer:
                    </span> */}
                    <Tooltip title=' View transaction in Solana explorer' placement='bottom' arrow>
                        <a 
                        href={`https://explorer.solana.com/tx/${transaction}?cluster=testnet`}//devnet
                        target="_blank"
                        role="button"
                        tabIndex="0"
                        style={{ color: 'blue',textDecoration:'none' }}
                        >
                            View Transaction
                        </a>
                    </Tooltip>
    

                </div>
                <div>
                    {/* <span>
                        View NFT in Solana explorer:
                    </span> */}
                    <Tooltip title='View NFT in Solana explorer' placement='bottom' arrow>
                        <a 
                        href={`https://explorer.solana.com/address/${addressNft}?cluster=testnet`}
                        target="_blank"
                        role="button"
                        tabIndex="0"
                        style={{ color: 'blue',textDecoration:'none' }}>
                            View NFT
                        </a>
                    </Tooltip>
  
                </div>
               
            </DialogContent>
        </Dialog>
    )
};


const AddTraitDialog = (props) => {
    const { visible, onClose, setNftTrait, nftEdit } = props;
    // const navigate = useNavigate();
    const onCloseDialog = () => {
        onClose();
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
          traitType: null,
          traitValue :null
        },
        validate:validateNftTrait,
        onSubmit: (values) => {
           const attribute ={
            trait_type:values.traitType,
            value:values.traitValue
           };
           setNftTrait((preValue)=>[...preValue,attribute]);
           onClose();
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
                <div style={{ lineHeight:'32px',fontWeight:600,fontSize:"24px", marginLeft:"10px"}}>Add trait</div>
                <IconButton onClick={onCloseDialog}>
                    <img className="close-dialog-ic" src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <form onSubmit={formik.handleSubmit}>
                <DialogContent
                    style={{
                        height:"100%",
                        // padding:0,
                        display: 'flex',
                        gap:"15px"
                    }}>
                    <Box style={{ m: 0, p: 2, gap:'5px', display: 'flex', flexDirection:"column"}}>   
                        <div style={{ m: 0, p: 2, lineHeight:'24px',fontWeight:600,fontSize:"16px"}} >Type Name</div>
                        <TextField
                            className='input'
                            hiddenLabel
                            variant='outlined'
                            placeholder="Ex. Size"
                            type='text'
                            fullWidth
                            name="traitType"
                            sx={{
                                "& > p":{marginLeft:0,marginRight:0}
                            }}
                            onChange={formik.handleChange}
                            error={formik.touched.traitType && !!formik.errors.traitType}
                            helperText={formik.touched.traitType && formik.errors.traitType}
                        />
                    </Box>
                    <Box style={{ m: 0, p: 2, gap:'5px', display: 'flex', flexDirection:"column"}}>
                        <div style={{ m: 0, p: 2, lineHeight:'24px',fontWeight:600,fontSize:"16px"}} >Value</div>
                        <TextField
                        className='input'
                        hiddenLabel
                        variant='outlined'
                        placeholder="Ex. Large"
                        type='text'
                        name="traitValue"
                        onChange={formik.handleChange}
                        sx={{
                            "& > p":{marginLeft:0,marginRight:0}
                        }}
                        error={formik.touched.traitValue && !!formik.errors.traitValue}
                        helperText={formik.touched.traitValue && formik.errors.traitValue}
                        fullWidth
                        /> 
                    </Box>
                </DialogContent>
                <div style={{padding:" 0 24px 24px 20px",}}>
                    <Button variant="contained" 
                        sx={{ width:"100%", height:"40px",borderRadius:"10px" }} type="submit" >
                            Add
                    </Button>
                </div>
            </form>
           
        </Dialog>
    )
};
export {MintNFTDialog, AddTraitDialog};