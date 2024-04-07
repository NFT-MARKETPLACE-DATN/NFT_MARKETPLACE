import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import CloseIcon from "../../images/closeIc.svg";
import NFT_logo from "../../images/logos/NFT-Marketplace.svg"
import WalletConnect from './WalletConnect';
import PropTypes from 'prop-types';

import { getConnected } from "../../utils/walletConnet"

const WalletConnectDialog = (props) => {
    const { visible, onClose, setAcount,setCode } = props;
    const onCloseDialog = () => {
        onClose();
    };

    const onConnectWallet = async () => {
        const account = await getConnected();
        // setAcount(account.walletAddress);
        // console.log(account);
    }
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={visible}
            onClose={onCloseDialog}
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
                    marginTop: '10px',
                    height:"100%"

                }}>
                {/* <div className="login">PhanTom</div>
                    <button onClick={onConnectWallet}>Connect</button>
                    {account != null && (<div>account: {account}</div>)} */}
                <WalletConnect 
                // onConnectWallet ={onConnectWallet}
                setAcount ={setAcount}
                onCloseDialog={onCloseDialog}
                setCode= {setCode}
                />
            </DialogContent>
        </Dialog>
    )
}

export default WalletConnectDialog;
