import React, { useState, useEffect } from 'react';
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
    CardActions
} from '@mui/material';
import PhanTomWalletLogo from "../../images/logos/PhantomIcon.svg";
import HomePageStye from "./HomePageStyle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/swiper-bundle.css"

const HomePage = () => {
    const listItem = [
        {
            name: "1",
            url: "",
            descrioption: "",
            pirce: 0
        },
        {
            name: "2",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        },
        {
            name: "3",
            url: "",
            descrioption: "",
            pirce: 10
        }
    ]

    return (
        <HomePageStye>
            <div className='silde'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    rewind
                    navigation
                    className="mySwiper"
                    loop
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    slidesPerView={1}
                >
                    <SwiperSlide><img src='' alt='imgae' /></SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                </Swiper>
            </div>
            <div className='main-homepage'>
                <div className='tab-homepage'></div>
                <div className='list-item'>
                    {/* <Box sx={{ minWidth: "275px" }}>
                        <Card variant="outlined" style={{ width: "100%" }}>
                            <CardContent>
                                divfsadfdsf
                            </CardContent>
                        </Card>
                    </Box> */}
                    {/* <Box sx={{ flexGrow: 1 }}> */}
                    <Grid container spacing={2}>
                        {listItem.map((item, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <Card variant="outlined" style={{ width: "100%", height:'200px'}}>
                                    <CardContent>
                                        {item.name}
                                    </CardContent>
                                </Card>
                            </Grid>
                        )

                        )}
                    </Grid>
                    {/* </Box> */}
                </div>
            </div>
        </HomePageStye>
    )
}

export default HomePage;
