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
    Menu,
    MenuItem
} from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
import userIcon from "../../images/logos/account.svg"
import userIconClick from "../../images/logos/accountClick.svg"
import HeaderStyle from "./HeaderStyle";
import WalletConnectDialog from "../walletConnect";
import InstallPhanTomWallet from "../walletConnect/InstallPhanTomWallet";
import BaseButton from '../base/Button';
// import { MenuItem } from '@mui/base';

const Header = () => {
    const [isOpenWalletConnect, setIsOpenWalletConnect] = useState(false);
    const [isInstallWallet, setIsInstallWallet] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    // const [anchorMenuMobile, setAnchorMenuMobile] = useState(null);
    const [account, setAcount] = useState("");
    const [code, setCode] = useState();
    const [bgColor, setBgColor] = useState("#189e00");
    // const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    // const handleClickMenuMobile = event => {
    //     setAnchorMenuMobile(event.currentTarget);
    //     setIsOpen(!isOpen);
    // };
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
    const handleOpenUserInfo = (event) => {
        setBgColor("");
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
        setBgColor("#189e00");
        
    };
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
                    <Grid item xs={4} sm={5} className="right-header">

                    </Grid>
                    <Grid item xs={8} sm={7} className="left-header">
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
                                    <WalletIcon className="loginIcon" />
                                    Login
                                </Button>
                                :
                                <>
                                    <div className='userLogin'>
                                        <Button
                                            className="disconnectBtn"
                                            max-width="150px"
                                            variant="contained"
                                            onClick={handleDisConnect}
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                        >
                                            {isHovered ? `Disconnect` : `${account.substring(0, 5)}... | {}`}
                                        </Button>
                                        <div className='userIcon'>
                                            <button
                                                type="button"
                                                className={
                                                    localStorage.getItem('walletAdress')
                                                        ? 'userBtn userBtnActive'
                                                        : 'userBtn'
                                                }
                                                aria-controls="basic-menu"
                                                aria-haspopup="true"
                                                aria-expanded={open ? 'true' : undefined}
                                                onClick={handleOpenUserInfo}
                                            >
                                                <img src={bgColor == "#189e00" ? userIcon : userIconClick} alt="icon-account" style={{ backgroundColor: bgColor }} />
                                            </button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={anchorEl}
                                                onClose={handleClose}
                                                className="wrapHeaderMenu"
                                                MenuListProps={{
                                                    'aria-labelledby': 'basic-button',
                                                }}
                                            >
                                                <MenuItem>
                                                <div>asdfsdaf</div>
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    </div>

                                </>
                            }
                            {/* <Box
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
                            </Box> */}
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