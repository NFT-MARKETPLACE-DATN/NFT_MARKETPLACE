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
import { toast } from 'react-toastify';
import { debounce } from 'lodash';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'; 
import AccountPageStyle from './AccountPageStyle';
import userIcon from '../../images/logos/account.svg';
import FormatPaint from "../../images/logos/FormatPaint.svg";
import SearchIcon from '../../images/logos/SearchIcon.svg';
import SolanaIcon from '../../images/logos/SolanaIcon.svg';
import ItemList from '../listItem/index';
import { uploadImgaeFirebase } from '../../utils/uploadImageFirebase';
import { setLoading,updateUserBackground,getNftByUser  } from "../../redux/actions";
import Loading from '../../containers/Loading';
import Transaction from './Transaction';
import { formatString, formatDateByTz } from "../../utils/helpers";
// import IteamListAccount from "../../containers/listItemAccount/index";
const initialPagination= { pageIndex:1,pageSize:10 };
const AccountPage = () => {
  const {
    account,
    accountInfo={},
  } = useSelector(state => state.globalState || {});
  const {
   loading = false,
   dataNftHolding=[],
   totalRecordsNft
  } = useSelector(state => state.accountState || {});
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [selectTab, setSelectTab] = useState(1);
  const [pagination, setPagination] = useState(initialPagination);
  // const [imagePreviewBackGround, setImagePreviewBackGround] = useState(null);
  const [searchKey, setSearchKey] = useState(1);
  const [searchTerm,setSearchTerm] = useState(null);
  const [isListed, setIsListed] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [typePrice,setTypePrice] = useState("DESC");
  const [typeTransaction, setTypeTransaction] = useState(0);
  const [orderTransaction, setOrderTransaction] = useState("DESC");
  const [itemCopy,setItemCopy] = useState("Copy");
  const navigate = useNavigate();
  const handleChangeTab = (event, newValue) => {
    setSelectTab(newValue)
    setValue(newValue)
    setSearchTerm(null);
  };
  const handlerSearch = debounce((envent)=>{
    const {value} = envent.target;
    const trimmedValue = value.trim();
    setSearchTerm(trimmedValue);
    setPagination(initialPagination);
    dispatch(
      getNftByUser({
        userID:accountInfo.id,
        pageIndex: 1,
        pageSize:pagination.pageSize,
        order:typePrice,
        isListed:isListed,
        isCreated:isCreated,
        search:value
      })
    )
    // debouncedApiCall(trimmedValue);
    // console.log(value);
  },1000);
  const handleChangeOrderForCreated = (event) =>{
    setTypePrice(event.target.value);
    setPagination(initialPagination);
    // setSearchTerm(null);
    // setSearchKey(6);
    // console.log(event.target.value);
  };
  const handleChangeOrderTransaction = (event) =>{
    setOrderTransaction(event.target.value);
  };
  const handleChangeTypeTransaction = (event) =>{
    setTypeTransaction(event.target.value);
  };
  const handlePageChange=(event, value)=>{
    // console.log(value);
    setPagination((pre)=>({
      ...pre,
      pageIndex:value
    }))
  };
  const onCopyLink = () => {
    navigator.clipboard.writeText(accountInfo?.address);
    setItemCopy("Copied")
    // setTooltipVisible(true);
    setTimeout(() => {
      setItemCopy("Copy")
    }, 600);
  };
  useEffect(()=>{
    if(selectTab == 1) {
      setPagination(initialPagination);
      setTypePrice("DESC");
      setIsListed(false);
      setIsCreated(false)
      setSearchKey(1);
      setTypeTransaction(0);
      setOrderTransaction("DESC");
    }
    else if(selectTab == 2 ){
      setPagination(initialPagination);
      setTypePrice("DESC");
      setIsListed(true);
      setIsCreated(false)
      setSearchKey(2);
      setTypeTransaction(0);
      setOrderTransaction("DESC");
    }
    else if(selectTab == 3) {
      setPagination(initialPagination);
      setTypePrice("DESC");
      setIsListed(false);
      setIsCreated(true)
      setSearchKey(3);
      setTypeTransaction(0);
      setOrderTransaction("DESC");
    }
    else if(selectTab == 4){

    }
  },[selectTab])
  useEffect(()=>{
    // if(!localStorage.getItem('walletAdress'))  navigate('/')
    // console.log(Boolean(accountInfo))
    if(!accountInfo.id) navigate('/')
    // if(accountInfo?.id)
  },[]);
  useEffect(()=>{
    // if(pagination.pageIndex != 1)
      // console.log(pagination)
    if(accountInfo){
      dispatch(
        getNftByUser({
          userID:accountInfo.id,
          pageIndex: pagination.pageIndex,
          pageSize:pagination.pageSize,
          order:typePrice,
          isListed:isListed,
          isCreated:isCreated,
          search:searchTerm
      }))
    }
 
    // fetchData();
  },[pagination.pageIndex,isListed,isCreated,typePrice])

  const detailTabel = () =>{
    switch(selectTab){
      case 1:
        return <ItemList data = {dataNftHolding} account ={accountInfo.id}/>
        // return <IteamListAccount data={listNFT}></IteamListAccount>
      case 2:
        return <ItemList data = {dataNftHolding} account ={accountInfo.id}/>
      case 3:
        return <ItemList data = {dataNftHolding} account ={accountInfo.id}/>
      case 4:
        return <Transaction order={orderTransaction} search={typeTransaction}/>
        // return  <IteamListAccount data={listNFT}></IteamListAccount>
    }
  }
  return (
    <>
     <Loading loading={loading}/>
      <AccountPageStyle>
        <div className='account'>
          <div className='accountInfo'>
            <div className='account-background'>
              <div className='backgroundInfo'>
                <>
                  {accountInfo.background && 
                    <div className='imageHover'>
                      <img src={accountInfo.background} alt='Preview' style={{ maxWidth: '100%' }} />
                    </div>
                  }
                    <div className='hoverNFT'>
                      <TextField
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
                      </button>
                    </div>
                </>
              </div>
            </div>
            <div className='account-logo'>
              <img className='logo' src={userIcon} alt='icon-account' style={{ backgroundColor: '#189e00' }}/>
            </div>
            <div className='account-name'>
              Unnamed
              <div className='account-address'>
                <Tooltip title='Solana' placement='top' arrow>
                  {/* <div className='address'> */}
                    <img src={SolanaIcon} alt='image' className='solanaIcon' />  
                  {/* </div> */}
                </Tooltip>
                <Tooltip  title="View on Solana Explorer" placement='bottom' arrow className='tooltip'>  {/* title={itemCopy} */}
                  {/* <span className='label-text' >{accountInfo?.address && formatString(accountInfo?.address)}</span> */}
                  {/* onClick={onCopyLink} */}
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
          <div className='accountTab'>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor='secondary'
              indicatorColor='secondary'
              aria-label='secondary tabs example'
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minWidth: 120,
                  color: 'text.primary',
                  '&.Mui-selected': {
                    color: 'white', // Color when tab is selected
                    backgroundColor:'secondary.main',
                    borderRadius: '8px',
                    underline: 'none',
                  },
                  '&:hover': {
                    // backgroundColor: 'action.hover', // Color when tab is hovered
                  },
                },
                '& .MuiTabs-indicator':{
                  display:'none'
                },
                '& .MuiTabs-scrollButtons': {
                  color: 'secondary.main',
                },
              }}
            >
              <Tab value={1} label='All' />
              <Tab value={2} label='Listed' />
              <Tab value={3} label='Created' />
              <Tab value={4} label='Transaction' />
              {/* <Tab value={5} label='Offers made' />
              <Tab value={6} label='Deals' /> */}
            
            </Tabs>
            {selectTab == 4 ? 
              <>
                <div className='arrow_created'>
                  <FormControl >
                    <Select
                      value={orderTransaction}
                      onChange={handleChangeOrderTransaction}
                      className="orderTransaction"
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      <MenuItem value={'DESC'}>Recently created</MenuItem>
                      <MenuItem value={'ASC'}>Created earliest</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className='type_transaction'>
                  <FormControl >
                    <Select
                      value={typeTransaction}
                      onChange={handleChangeTypeTransaction}
                      className="typeTransaction"
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      <MenuItem value={0}>ALL</MenuItem>
                      <MenuItem value={1}>Create</MenuItem>
                      <MenuItem value={2}>Listed</MenuItem>
                      <MenuItem value={3}>Unlist</MenuItem>
                      <MenuItem value={4}>Buy</MenuItem>
                      <MenuItem value={5}>Sell</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </> 
            :
              <>
                <div className='search-accountpage'>
                  <TextField
                      key={searchKey}
                      className={`searchInput`}
                      fullWidth
                      hiddenLabel
                      placeholder="Search for name"
                      name="search"
                      type="text"
                      variant="outlined"
                      margin="dense"
                      autoComplete="off"
                      defaultValue={searchTerm || null}
                      // value={searchTerm === null ? '' : searchTerm}
                      onChange={handlerSearch}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton>
                              {searchTerm ? 
                                <>
                                </>
                                :
                                <img src={SearchIcon} alt="search-icon" />
                              }
                             
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      // onChange={handleChangeInput}
                      // onBlur={handleBlurInput}
                    />
                </div>
                <div className='arrow_price'>
                  <FormControl >
                    <Select
                      value={typePrice}
                      onChange={handleChangeOrderForCreated}
                      className="typeValue"
                      IconComponent={KeyboardArrowDownRoundedIcon}
                    >
                      <MenuItem value={'DESC'}>Recently created</MenuItem>
                      <MenuItem value={'ASC'}>Created earliest</MenuItem>
                    </Select>
                    </FormControl>
                </div>
              </>
            }
          
          </div>
          <div className='accountPageItem'>
            {detailTabel()}
            {selectTab !== 4 &&(
              dataNftHolding.length >0 && (
                <div className='pagination'>
                  <Pagination
                  count={Math.ceil(totalRecordsNft / pagination.pageSize)}
                  page={pagination.pageIndex}
                  // count={10}
                  // page={1}
                  onChange={handlePageChange}
                  color="primary"
                  />
                </div>
              )
              )
            }
       
          </div>
        </div>
      </AccountPageStyle>
    </>
  )
}
export default AccountPage
