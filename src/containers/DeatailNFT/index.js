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

const DeatailNFT = (props) => {
    const { visible, onClose, } = props;
    const navigate = useNavigate();
    const onCloseDialog = () => {
        onClose();
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
        </Dialog>
    )
};
export {DeatailNFT}

