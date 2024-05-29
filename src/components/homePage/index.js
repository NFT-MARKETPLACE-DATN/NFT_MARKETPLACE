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
  Tab
} from '@mui/material'

import HomePageStye from './HomePageStyle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import ItemList from '../listItem/index'

const HomePage = () => {
  let listItem = [
    {
      id: 1,
      name: '1',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwtZC6XZY4bYTIn-l0bPAj7PmPslRT-_2Uw&s',
      descrioption: '',
      pirce: 1
    },
    {
      id: 1,
      name: '7',
      url: 'https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg?w=1296',
      descrioption: '',
      pirce: 3
    }
  ]
  const listItem1 = [
    {
      id: 1,
      name: '1',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrv-C3ZAG_79rftgcNgNKhu9dSNpPoCqXiZw&s',
      descrioption: '',
      pirce: 5
    },
    {
      id: 2,
      name: '2',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Wype2GahvkPKVLoCJCbyABpNsi1mQXM4Tw&s',
      descrioption: '',
      pirce: 10
    },
    {
      id: 3,
      name: '3',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnBTLM3fiejglJvrp6eFHlWRjIjQ-iZrvosQ&s',
      descrioption: '',
      pirce: 3
    },
    {
      id: 4,
      name: '4',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwtZC6XZY4bYTIn-l0bPAj7PmPslRT-_2Uw&s',
      descrioption: '',
      pirce: 1
    },
    {
      id: 5,
      name: '5',
      url: 'https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg?w=1296',
      descrioption: '',
      pirce: 2
    },
    {
      id: 6,
      name: '5',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu86S8kzQmLj5h3yYV8cyVxnqql0t8ak-Mng&s',
      descrioption: '',
      pirce: 2
    },
    {
      id: 7,
      name: '5',
      url: 'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2024/04/24/a94e2d09-2f19-4bd2-a13f-6d6eff58684c_eadcc3b5.jpg?itok=X0MrjxZs&v=1713940582',
      descrioption: '',
      pirce: 2
    }, 
    {
      id: 8,
      name: '5',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlV665lQ4rn6d1IinhTlOFvzpwSCWImh42w&s',
      descrioption: '',
      pirce: 11
    },   
    {
      id: 9,
      name: '5',
      url: 'https://media.vneconomy.vn/w800/images/upload/2022/06/08/nft-free-jpg-optimal.jpg',
      descrioption: '',
      pirce: 2
    }
  ]
  const listItem2 = [
    {
      id: 1,
      name: '6',
      url: 'https://pantravel.vn/wp-content/uploads/2023/11/dong-thac-trang-xoa-do-xuong.jpg',
      descrioption: '',
      pirce: 2
    },

  ]
  const [value, setValue] = useState(1)
  const [selectTab, setSelectTab] = useState(1);
  const [listNFT, setListNFT] = useState(listItem1);
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
  }
  useEffect(() => {
    console.log(selectTab)
    if(selectTab == 1) setListNFT(listItem1);
    else if(selectTab == 2 )setListNFT(listItem);
    else if(selectTab == 3)  setListNFT(listItem2);
  }, [selectTab])

  const handleClickTab = (value) => {
    console.log(value)
  }
  return (
    <HomePageStye>
      <div className='silde'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
          rewind
          // navigation
          // grabCursor={true}
          className='mySwiper'
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          spaceBetween={30}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          slidesPerView={3}
          // effect={'cube'}
          // cubeEffect={{
          //     shadow: true,
          //     slideShadows: true,
          //     shadowOffset: 20,
          //     shadowScale: 0.94,
          //   }}
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
        </Swiper>
      </div>
      <div className='main-homepage'>
        <div className='tab-homepage'>
          <Tabs
            value={value}
            onChange={handleChangeTab}
            textColor='secondary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
          >
            <Tab value={1} label='ALL' />
            <Tab value={2} label='NFT Monkey' />
            <Tab value={3} label='NFT Nature' />
          </Tabs>
        </div>
        <div className='list-item'>
          {/* <Box sx={{ minWidth: "275px" }}>
                        <Card variant="outlined" style={{ width: "100%" }}>
                            <CardContent>
                                divfsadfdsf
                            </CardContent>
                        </Card>
                    </Box> */}
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <ItemList data={listNFT} />
          {/* </Box> */}
        </div>
      </div>
    </HomePageStye>
  )
}

export default HomePage
