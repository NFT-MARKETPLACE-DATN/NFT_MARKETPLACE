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
      name: '1',
      url: '',
      descrioption: '',
      pirce: 0
    }
  ]
  const listItem1 = [
    { id: 1, name: '1', url: '', descrioption: '', pirce: 0 },
    { id: 2, name: '2', url: '', descrioption: '', pirce: 10 },
    { id: 3, name: '3', url: '', descrioption: '', pirce: 10 },
    { id: 4, name: '4', url: '', descrioption: '', pirce: 10 },
    { id: 5, name: '5', url: '', descrioption: '', pirce: 10 }
  ]
  const listItem2 = [
    {
      name: '6',
      url: '',
      descrioption: '',
      pirce: 10
    },
    {
      name: '7',
      url: '',
      descrioption: '',
      pirce: 10
    },
    {
      name: '8',
      url: '',
      descrioption: '',
      pirce: 10
    }
  ]
  const [value, setValue] = useState('One')
  const [selectTab, setSelectTab] = useState(1)
  const handleChangeTab = (event, newValue) => {
    if (newValue == 'One') {
      if (value == selectTab) return
      setSelectTab(1)
    } else if (newValue == 'Two') {
      if (value == selectTab) return
      setSelectTab(2)
    } else if (newValue == 'There') {
      if (value == selectTab) return
      setSelectTab(3)
    } else return
    setValue(newValue)
  }
  useEffect(() => {
    console.log(selectTab)
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
          <SwiperSlide>
            <img
              className='slide1'
              src='https://api.mintty.com/_upload_service/image/10f7fe94-26cc-4257-92f7-f31f22bc85b2-1651116156747'
              alt='imgae'
            />
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
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
            <Tab value='One' label='Item One' />
            <Tab value='Two' label='Item Two' />
            <Tab value='There' label='Item Three' />
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
          <ItemList data={listItem1} />
          {/* </Box> */}
        </div>
      </div>
    </HomePageStye>
  )
}

export default HomePage
