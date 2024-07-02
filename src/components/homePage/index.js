import React, { useState, useEffect,useCallback,useMemo } from 'react'
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
  Pagination
} from '@mui/material'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { debounce } from 'lodash'; //import  _debounce  from 'lodash/debounce';
import HomePageStye from './HomePageStyle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import ItemList from '../listItem/index';
import SearchIcon from '../../images/logos/SearchIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getNftListed } from "../../redux/actions";
const initialPagination= { pageIndex:1,pageSize:10 };
const HomePage = () => {
  const {
    isLogin,
    account,
    accountInfo={},
    loading = false,
    dataNftListed = [],
    totalRecordsNft
  } = useSelector(state => state.globalState || {});
  // console.log(dataNftListed);
  const dispatch = useDispatch();

  const [pagination, setPagination] = useState(initialPagination);
  const [value, setValue] = useState(1);
  const [typePrice,setTypePrice] = useState("DESC");
  const [selectTab, setSelectTab] = useState(1);
  const [searchTerm,setSearchTerm] = useState(null);
  const [isTrending, setIsTrending] = useState(false);
  const [searchKey, setSearchKey] = useState(1);
  // const [listNFT, setListNFT] = useState(listItem1);
  const handleChangeTab = (event, newValue) => {
    // if (newValue == 1) {
    //   if (value == selectTab) return
    //   setListNFT(listItem1)
    //   setSelectTab(newValue)
    // } else if (newValue == 2) {
    //   if (value == selectTab) return
    //   setListNFT(listItem)
    //   setSelectTab(newValue)
    // } else if (newValue == 3) {
    //   if (value == selectTab) return
    //   setListNFT(listItem2)
    //   setSelectTab(newValue)
    // } else return
    setSelectTab(newValue);
    setValue(newValue);
    setSearchTerm(null);
   
  }
  
  useEffect(() => {
    // console.log(selectTab)
    if(selectTab == 1){
      setPagination(initialPagination);
      setTypePrice("DESC");
      setIsTrending(false);
      setSearchKey(1);
      // setListNFT(listItem1);
    } 
    else if(selectTab == 2 ){
      setPagination(initialPagination);
      setTypePrice("DESC");
      setIsTrending(true);
      setSearchKey(0);
      // setListNFT(listItem);
    }

    // else if(selectTab == 3)  setListNFT(listItem2);
  }, [selectTab])

  useEffect(()=>{
    // if(pagination.pageIndex != 1)
      // console.log(pagination);
    dispatch(
      getNftListed({
      pageIndex: pagination.pageIndex,
      pageSize:pagination.pageSize,
      order:typePrice,
      isTrending:isTrending,
      search:searchTerm
      })
    )
    // fetchData();
  },[pagination.pageIndex,isTrending,typePrice])
  // const fetchData = useCallback(async () => {
  //  console.log(pagination);
  // }, [pagination.pageIndex]);
  // const handleClickTab = (value) => {
  //   console.log(value)
  // }
  const handlePageChange=(event, value)=>{
    // console.log(value);
    setPagination((pre)=>({
      ...pre,
      pageIndex:value
    }))
  };
  const handleChangeOrderForPrice = (event) =>{
    setTypePrice(event.target.value);
    setPagination(initialPagination);
    // setSearchTerm(null);
    // setSearchKey(3);
    // console.log(event.target.value);
  };
  const handlerSearch = debounce((envent)=>{
    const {value} = envent.target;
    const trimmedValue = value.trim();
    setSearchTerm(trimmedValue);
    setPagination(initialPagination);
    dispatch(
      getNftListed({
        pageIndex: 1,
        pageSize:pagination.pageSize,
        order:typePrice,
        isTrending:isTrending,
        search:value
      })
    )
    // debouncedApiCall(trimmedValue);
    // console.log(value);
  },1000);
  // const debouncedApiCall = debounce((value) => {
  //    dispatch(
  //     getNftListed({
  //       pageIndex: 1,
  //       pageSize:pagination.pageSize,
  //       order:typePrice,
  //       isTrending:isTrending,
  //       search:value
  //     })
  //   )
  // }, 1000);
  return (
    <HomePageStye>
      <div className='silde'>
        <Swiper
          modules={[Navigation, Scrollbar, A11y, EffectCube, Autoplay]}
          rewind
          // navigation
          // grabCursor={true}
          className='mySwiper'
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          spaceBetween={20}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // slidesPerView={4}
          // effect={'cube'}
          // cubeEffect={{
          //     shadow: true,
          //     slideShadows: true,
          //     shadowOffset: 20,
          //     shadowScale: 0.94,
          //   }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
            1450: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrv-C3ZAG_79rftgcNgNKhu9dSNpPoCqXiZw&s'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbriYq2g5Kk5P4rveH-zgEgcQYJpB0k_wYQ&s'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-artlogicwebsite0889/usr/images/news/main_image/6/nft-bored-ape-yacht-club.png'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://i.seadn.io/gcs/files/f6497290ed37ccb7cbbe662a5b0a100f.png?auto=format&dpr=1&w=1000'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://i.seadn.io/gcs/files/f6497290ed37ccb7cbbe662a5b0a100f.png?auto=format&dpr=1&w=1000'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide className='slide'>
            <img
              className='slide1'
              src='https://i.seadn.io/gcs/files/f6497290ed37ccb7cbbe662a5b0a100f.png?auto=format&dpr=1&w=1000'
              alt='imgae'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='main-homepage'>
        <div className='tab-homepage'>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            // textColor='secondary'
            // indicatorColor='secondary'
            // aria-label='secondary tabs example'
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
            <Tab value={1} className='tabSelect' label='ALL' />
            <Tab value={2} className='tabSelect' label='Trending' />
            {/* <Tab value={3} label='Marketplace' /> */}
          </Tabs>
        <div className='search-homepage'>
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
            {/* {console.log(searchTerm)} */}
          </div>
        <div className='arrow_price'>
          {/* <div className="typeLabel">種別</div> */}
              <FormControl >
                <Select
                  value={typePrice}
                  onChange={handleChangeOrderForPrice}
                  className="typeValue"
                  IconComponent={KeyboardArrowDownRoundedIcon}
                >
                  <MenuItem value={'DESC'}>Price high to low</MenuItem>
                  <MenuItem value={'ASC'}>Price low to high</MenuItem>
                    {/* {listTradeTypes.filter((tradeType) => tradeType.name !== "SENT" && tradeType.name !== "RECEIVED" && tradeType.name !== "TRANSFER")
                    .map((item, index) => (
                      <MenuItem key={index} value={item} className="typeText">
                        {item.japanName}
                      </MenuItem>
                    ))} */}
                </Select>
                </FormControl>
          </div>
        </div>
        <div className='list-item'>
          <ItemList data={dataNftListed} /> 
          {/* listNFT */}
          {dataNftListed.length >0 && (
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
          )}
          
        
          {/* </Box> */}
        </div>
      </div>
    </HomePageStye>
  )
}

export default HomePage
