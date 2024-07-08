import React, { useState, useEffect } from 'react'
import {
  TextField,
  InputAdornment,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  FormControl,
  Drawer,
  Menu,
  Box,
  Grid,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Tabs,
  Tab,
  Pagination,
  Tooltip
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify'
import { debounce } from 'lodash'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AdminPageStyle from './AdminPageStyle';
import userIcon from '../../images/logos/account.svg';
import imgaeIcon from "../../images/logos/imageIcon.svg";
import FormatPaint from '../../images/logos/FormatPaint.svg';
import SearchIcon from '../../images/logos/SearchIcon.svg';
import SolanaIcon from '../../images/logos/SolanaIcon.svg';
import ItemList from '../listItem/index';
import { uploadImgaeFirebase } from '../../utils/uploadImageFirebase';
import { setLoading, updateUserBackground, getNftByUser } from '../../redux/actions'
import Loading from '../../containers/Loading'
import BaseButton from '../../containers/base/Button';
import UserTabel from "./UserTabel/index"
import NftTabel from "./NftTabel/index"
import { formatString, formatDateByTz } from "../../utils/helpers";
// import Transaction from './Transaction';
// import IteamListAccount from "../../containers/listItemAccount/index";
const initialPagination = { pageIndex: 1, pageSize: 10 }
const AdminPage = () => {
  const { account, accountInfo = {} } = useSelector((state) => state.globalState || {})
  // const { loading = false, dataNftHolding = [], totalRecordsNft } = useSelector((state) => state.accountState || {})
  const {
    loading,
  } = useSelector(state => state.adminState || {});
  const dispatch = useDispatch()
  // const [value, setValue] = useState(1);
  // const [selectTab, setSelectTab] = useState(1);
  // const [pagination, setPagination] = useState(initialPagination);
  // // const [imagePreviewBackGround, setImagePreviewBackGround] = useState(null);
  // const [searchKey, setSearchKey] = useState(1)
  // const [searchTerm, setSearchTerm] = useState(null)
  // const [isListed, setIsListed] = useState(false)
  // const [isCreated, setIsCreated] = useState(false)
  // const [typePrice, setTypePrice] = useState('DESC')
  // const [typeTransaction, setTypeTransaction] = useState(0)
  // const [orderTransaction, setOrderTransaction] = useState('DESC');
  const [tab, setTab] = useState(0);
  // const [adminSelected,setAdminSelected] = useState("USER");
  const navigate = useNavigate();
  const tabs = [
    {
      id: 0,
      label: 'User',
    },
    {
      id: 1,
      label: 'NFT',
    },
  ];
  const handleTab = (id)=>{
    if(tab != id ){
      setTab(id);
      // console.log("fasdf");
    }
    
  }

  useEffect(() => {
    // if(!localStorage.getItem('walletAdress'))  navigate('/');
    if(!accountInfo.id) navigate('/')
  }, [])
  // useEffect(()=>{
  //   // if(pagination.pageIndex != 1)
  //     // console.log(pagination);
  //   if(accountInfo){
  //     dispatch(
  //       getNftByUser({
  //         userID:accountInfo.id,
  //         pageIndex: pagination.pageIndex,
  //         pageSize:pagination.pageSize,
  //         order:typePrice,
  //         isListed:isListed,
  //         isCreated:isCreated,
  //         search:searchTerm
  //     }))
  //   }

  //   // fetchData();
  // },[pagination.pageIndex,isListed,isCreated,typePrice])

  const detailTabel = () => {
    switch (tab) {
      case 0:
        return <UserTabel></UserTabel>
      // return <IteamListAccount data={listNFT}></IteamListAccount>
      case 1:
        return <NftTabel></NftTabel>
      //   case 4:
      //     return <Transaction order={orderTransaction} search={typeTransaction}/>
      // return  <IteamListAccount data={listNFT}></IteamListAccount>
    }
  }
  return (
    <>
      <Loading loading={loading} />
      <AdminPageStyle>
        <div className='account'>
          <div className='accountInfo'>
            <div className='account-background'>
              <div className='backgroundInfo'>
                <>
                  {accountInfo.background && (
                    <div className='imageHover'>
                      <img src={accountInfo.background} alt='Preview' style={{ maxWidth: '100%' }} />
                    </div>
                  )}
                  <div className='hoverNFT'>
                    {/* <TextField
                        key='Image'
                        fullWidth
                        hiddenLabel
                        inputProps={{ accept: '.jpg,.jpeg,.png' }}
                        type='file'
                        variant='outlined'
                        onChange={async (event) => {
                          // console.log(event.target.files[0])
                          const file = event.target.files[0]
                          if (file) {
                            const fileSize = file.size / (1024 * 1024)
                            if (fileSize > 10) {
                              toast.error('Image not laruge 10M')
                              return;
                            }
                            dispatch(setLoading(true));
                            const imageURL = await uploadImgaeFirebase(file, 'imageAccount');
                            if (imageURL.status == true) {
                              dispatch(updateUserBackground({
                                userID:accountInfo.id,
                                background:imageURL.result
                              }))
                            }else{
                              toast.error('Upload image flase. Try again later');
                              dispatch(setLoading(false))
                            }
                            // const fileUrl = URL.createObjectURL(file)
                            // setImagePreviewBackGround(fileUrl)

                          }
                        }}
                        className='imageInput imgExist'
                      />
                      <button type='button' className={'uploadImgBtn'} >
                        <img src={FormatPaint} alt='upload-image' className='IconUploadBackGround' />
                      </button> */}
                  </div>
                </>
              </div>
            </div>
            <div className='account-logo'>
              <img className='logo' src={userIcon} alt='icon-account' style={{ backgroundColor: '#189e00' }} />
            </div>
            <div className='account-name'>
              Unnamed
              <div className='account-address'>
                <Tooltip title='Solana' placement='top' arrow>
                    <img src={SolanaIcon} alt='image' className='solanaIcon' />  
                </Tooltip>
                <Tooltip key="Explorer" title="View on Solana Explorer" placement='bottom' arrow className='tooltip'> 
                  <a 
                    href={`https://explorer.solana.com/address/${accountInfo?.address}?cluster=testnet`}//devnet
                    target="_blank"
                    role="button"
                    tabIndex="0"
                    style={{ color: 'black',textDecoration:'none'}}
                    className='label-text'
                    >
                    {accountInfo?.address && formatString(accountInfo?.address)}
                  </a>
                </Tooltip>
                <span className='account-join'>Joined {formatDateByTz(accountInfo.created_date,'YYYY')}</span> {/* YYYY-MM-DD */}
              </div>
            </div>
          </div>
          <div className='tabButton'>
            {tabs.map((item, index) => (
                <BaseButton
                  key={index}
                  text={item.label}
                  type={tab === item.id ? 'secondary' : 'none'}
                  onClick={()=>handleTab(item.id)}
                  className="buttonCurrency"
                />
              ))}
          </div> 
            
          <div className='admin-body'>
            {detailTabel()}
          </div>
        </div>
      </AdminPageStyle>
    </>
  )
}
export default AdminPage
