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
import PropTypes from 'prop-types';
import PhanTomWalletLogo from "../../images/logos/PhantomIcon.svg";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const InstallPhanTomWallet = (props) => {
    const { visible, onClose, setCode } = props;

    const handleClose = () => {
        onClose();
        setCode();
    }
    const handleInstallPhanTomWallet = async () => {
        window.open('https://phantom.app/', '_blank');
        handleClose();
    }

    return (
        <>
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
                        <IconButton onClick={() => handleClose()}>
                            <img className="close-dialog-ic" src={CloseIcon} />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent
                    style={{
                        height: "100%",
                        display: 'flex',
                        flexDirection: "column",
                    }}>
                    <div style={{
                        // display: 'flex',
                        // justifyContent: 'center'
                        fontSize: "18px",
                        marginBottom:10
                    }}>
                        Please Install PhanTom Wallet</div>
                    <Button
                        className="flexBetween exItem"
                        onClick={() => {
                            handleInstallPhanTomWallet();
                            // onClose();
                        }}
                        style={{
                            width: '100% ',
                            display: 'flex', 
                            alignItems: 'center',
                            justifyContent:'space-between'
                        }}
                    >
                        <div className="phantom-title" style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                            <img
                                src={PhanTomWalletLogo}
                                alt="PhanTom Wallet"
                                height={40}
                                width={40}
                                style={{
                                    borderRadius:"50%"
                                }}
                            />
                            <div className="itemName" style={{ fontSize: "18px", textTransform: "capitalize", color: "rgb(112, 112, 112)" }}>
                                Install Here
                            </div>

                        </div>
                        <ChevronRightRoundedIcon sx={{ color: '#004B9E' }} />
                    </Button>
                </DialogContent>
            </Dialog>
        </>
    )
};


export default InstallPhanTomWallet;