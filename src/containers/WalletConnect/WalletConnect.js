import WalletConnectStyle from "./WalletConnectStyle"
import React, { useState, useEffect } from 'react';
import NFT_logo from "../../images/logos/NFT-Marketplace.svg";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import PhanTomWalletLogo from "../../images/logos/PhantomIcon.svg";
import { getConnected } from "../../utils/walletConnet";
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
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
import { toast } from 'react-toastify';
// import {fetchDatas} from "../../redux/actions/homePageAction";
import { setWallet } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const WalletConnect = (props) => {
    const {setAcount, onCloseDialog, setCode} = props;
    const dispatch = useDispatch();
    const onConnectWallet = async () => {
        const login = await getConnected();
        // console.log(login);
        if(login.code == 1){
            localStorage.setItem('walletAdress',login.walletAddress);
            dispatch(setWallet(login.walletAddress))
            toast.success("Success")
        }
        // setAcount(login.walletAddress);
        setCode(login.code);
        onCloseDialog();
       
        // console.log(login);
    }
    return (
        <WalletConnectStyle>
            <img className="marketplace-logo" src={NFT_logo} alt="marketplace" />

            <div className="connect-title">Connect to ArtChain</div>

            {/* <Grid container spacing="20px" className="listEx"> */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    className="listItem"
                // md={isCustomConnect ? 6 : 4}
                // key={index}
                >
                    <Button
                        className="flexBetween exItem"
                        onClick={() => {
                            onConnectWallet();
                            // onClose();

                        }}
                    >
                        <div className="phantom-title">
                            <img
                                src={PhanTomWalletLogo}
                                alt="PhanTom Wallet"
                                height={50}
                                width={50}
                                className="logoImage"
                            />
                            <div className="itemName">
                                PhanTom Wallet
                            </div>
                        </div>
                        <ChevronRightRoundedIcon sx={{ color: '#004B9E' }} />
                    </Button>
                </Grid>
            {/* </Grid> */}
        </WalletConnectStyle>
    )
}

export default WalletConnect;