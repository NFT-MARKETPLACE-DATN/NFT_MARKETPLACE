import React, { useState, useEffect } from 'react'
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
} from '@mui/material'
import WalletIcon from '@mui/icons-material/Wallet';
import userIcon from '../../images/logos/account.svg';
import userIconClick from '../../images/logos/accountClick.svg';
import HeaderStyle from './HeaderStyle';
import WalletConnectDialog from '../../containers/WalletConnect';
import InstallPhanTomWallet from '../../containers/WalletConnect/InstallPhanTomWallet';
import Loading from '../../containers/Loading';
import BaseButton from '../../containers/base/Button'
import { toast } from 'react-toastify'
// import history from '../../utils/history';
import NFT_logo from '../../images/logos/NFT-Marketplace.svg';
import { setLogin,setWallet ,setAccount } from "../../redux/actions";
// import { createStructuredSelector } from 'reselect';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const {
    isLogin,
    account,
    accountInfo={},
    loading = false
  } = useSelector(state => state.globalState || {});
  const [isOpenWalletConnect, setIsOpenWalletConnect] = useState(false)
  const [isInstallWallet, setIsInstallWallet] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  // const [anchorMenuMobile, setAnchorMenuMobile] = useState(null);
  const [code, setCode] = useState()
  const [bgColor, setBgColor] = useState('#189e00')
  // const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleClickMenuMobile = event => {
  //     setAnchorMenuMobile(event.currentTarget);
  //     setIsOpen(!isOpen);
  // };
  const handleOpen = () => {
    setIsOpenWalletConnect(true)
    setIsHovered(false)
  }
  const handleDisConnect = async () => {
    await window.phantom.solana.disconnect({ onlyIfTrusted: true })
    // setAcount('');
    setCode();
    localStorage.removeItem('walletAdress');
    navigate('/');
    dispatch(setWallet(null));
    dispatch(setAccount());
    // localStorage.clear();
  }
  const handleOpenUserInfo = (event) => {
    setBgColor('')
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setBgColor('#189e00')
  }
  useEffect(() => {
    if (Number(code) == 0) {
      setIsInstallWallet(true)
      // setAcount('')
      dispatch(setWallet(null));
      setCode()
    }
    // else if (Number(code) == 1) {
    //     localStorage.setItem('walletAdress', account)
    //     // console.log(code);
    // }
  }, [code])

  useEffect(() => {
    localStorage.removeItem('walletAdress')
  }, [])
  useEffect(()=>{
    if(isLogin) {
      setIsOpenWalletConnect(true);
      dispatch(setLogin(false));
    }
  },[isLogin])
  return (
    <>
     {/* <Loading loading={loading}></Loading> */}
      <HeaderStyle>
        <Grid container className='bottomHeader'>
          <Grid item xs={4} sm={5} className='right-header'>
            {/* <div className='nftLogo'> */}
            <div onClick={()=>navigate('/')} className='logoLink'>
              <img src={NFT_logo} className='nftLogo'></img>
              <div className='logoText'> ArtChain</div>
            </div>

            {/* </div> */}
          </Grid>
          <Grid item xs={8} sm={7} className='left-header'>
            <div className='left-header-item'>
              {account == null ? (
                <Button className='connectBtn' width='100%' variant='contained' onClick={handleOpen}>
                  <WalletIcon className='loginIcon' />
                  Login
                </Button>
              ) : (
                <>
                  <div className='userLogin'>
                    <Button
                      className='disconnectBtn'
                      max-width='150px'
                      variant='contained'
                      onClick={handleDisConnect}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {isHovered ? `Disconnect` : `${accountInfo?.address ? accountInfo?.address.substring(0, 3) : null}... | ${ accountInfo.balance == 0 ? 0 : `${(accountInfo.balance).toFixed(5)}...`} SOL`}
                    </Button>
                    <div className='userIcon'>
                      <button
                        type='button'
                        className={localStorage.getItem('walletAdress') ? 'userBtn userBtnActive' : 'userBtn'}
                        aria-controls='basic-menu'
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleOpenUserInfo}
                      >
                        <img
                          src={bgColor == '#189e00' ? userIcon : userIconClick}
                          alt='icon-account'
                          style={{ backgroundColor: bgColor }}
                        />
                      </button>
                      <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        className='wrapHeaderMenu'
                        MenuListProps={{
                          'aria-labelledby': 'basic-button'
                        }}
                      >
                        <MenuItem
                          onClick={() => {
                            // history.push('/account');
                            navigate('/account')
                            handleClose()
                          }}
                        >
                          <div>Profile</div>
                        </MenuItem>
                        <MenuItem
                          onClick={() => {
                            navigate('/mint')
                            handleClose()
                          }}
                        >
                          <div>Mint NFT</div>
                        </MenuItem>
                        {accountInfo.roleID == 1 && (
                          <MenuItem
                            onClick={() => {
                              navigate('/admin')
                              handleClose()
                            }}
                          >
                          <div>Admin</div>
                          </MenuItem>
                        )}
                        {/* {console.log(accountInfo.roleID ==2)} */}
                      </Menu>
                    </div>
                  </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </HeaderStyle>

      <WalletConnectDialog
        visible={isOpenWalletConnect}
        onClose={() => {
          setIsOpenWalletConnect(false)
        }}
        setCode={setCode}
      />

      <InstallPhanTomWallet
        visible={isInstallWallet}
        onClose={() => {
          setIsInstallWallet(false)
        }}
        setCode={setCode}
      />
    </>
  )
}
// const mapStateToProps = createStructuredSelector({
//   currencies: makeSelectCurrencies(),
// });
// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default Header
