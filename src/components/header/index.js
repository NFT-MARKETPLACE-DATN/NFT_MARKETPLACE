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
import WalletIcon from '@mui/icons-material/Wallet';

import HeaderStyle from "./HeaderStyle";
import WalletConnectDialog from "../walletConnect";
import InstallPhanTomWallet from "../walletConnect/InstallPhanTomWallet";

import BaseButton from '../base/Button';

const Header = () => {
    const [isOpenWalletConnect, setIsOpenWalletConnect] = useState(false);
    const [isInstallWallet, setIsInstallWallet] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [anchorMenuMobile, setAnchorMenuMobile] = useState(null);
    const [account, setAcount] = useState("");
    const [code, setCode] = useState();

    const handleClickMenuMobile = event => {
        setAnchorMenuMobile(event.currentTarget);
        // setIsOpen(!isOpen);
    };
    const handleOpen = () => {
        setIsOpenWalletConnect(true);
        setIsHovered(false);
    }
    const handleDisConnect = async () => {
        await window.phantom.solana.disconnect({ onlyIfTrusted: true });
        setAcount("")
        setCode()
        localStorage.removeItem('walletAdress')
    }

    useEffect(() => {
        if (Number(code) == 0) {
            setIsInstallWallet(true);
            setAcount("");
            setCode();
        }
        // else if (Number(code) == 1) {
        //     localStorage.setItem('walletAdress', account)
        //     // console.log(code);
        // }
    }, [code]);

    useEffect(() => {
        localStorage.removeItem('walletAdress')
    }, [])

    return (
        <>
            <HeaderStyle>
                <Grid container className='bottomHeader'>
                    <Grid item xs={6} sm={5} className="right-header">

                    </Grid>
                    <Grid item xs={6} sm={7} className="left-header">
                        <div className='left-header-item'>
                            <Box
                                alignContent={"center"}
                            >
                                <BaseButton
                                    text="Mint NFT"
                                    className="btnMint"
                                    type="secondary"
                                    variant='contained'
                                />
                                {/* <Button
                                    width="100%"
                                    variant="contained"
                                    className="btnMint"
                                    color='secondary'
                                    >
                                    Mint NFT
                                </Button> */}
                            </Box>
                            {(account == "" || account == null) ?
                                <Button
                                    className="connectBtn"
                                    width="100%"
                                    variant="contained"
                                    onClick={handleOpen}
                                >
                                    <WalletIcon />
                                    Login
                                </Button>
                                :
                                <>
                                    {/* <div>account: </div> */}
                                    <Button
                                        className="disconnectBtn"
                                        max-width="150px"
                                        variant="contained"
                                        onClick={handleDisConnect}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        {isHovered ? `Disconnect` : `${account.substring(0, 7)}...`}

                                    </Button>
                                </>
                            }
                            <Box
                                sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
                                className="left-menu-mobile"
                            >
                                <button
                                    type="button"
                                    className="btnToggleMenu"
                                    onClick={event => {
                                        handleClickMenuMobile(event);
                                    }}
                                >
                                    <Box
                                        className={
                                            anchorMenuMobile ? 'menu-icon open' : 'menu-icon'
                                        }
                                    >
                                        <div className="bar" />
                                        <div className="bar" />
                                        {anchorMenuMobile ? 'Close' : 'Menu'}

                                    </Box>
                                </button>
                            </Box>
                        </div>



                    </Grid>

                </Grid>
            </HeaderStyle>

            <WalletConnectDialog
                visible={isOpenWalletConnect}
                onClose={() => {
                    setIsOpenWalletConnect(false)
                }}
                setAcount={setAcount}
                setCode={setCode}
            />

            <InstallPhanTomWallet
                visible={isInstallWallet}
                onClose={() => {
                    setIsInstallWallet(false)
                }}
                // setAcount={setAcount}
                setCode={setCode}
            />
        </>

    )
}

export default Header