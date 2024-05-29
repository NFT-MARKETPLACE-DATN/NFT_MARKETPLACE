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
} from '@mui/material';

import AccountPageStyle from './AccountPageStyle';
import userIcon from '../../images/logos/account.svg';
import FormatPaint from "../../images/logos/FormatPaint.svg";
import { toast } from 'react-toastify';
import ItemList from '../listItem/index';
const AccountPage = () => {
  let listItem = [
    {
      id: 1,
      name: '1',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwtZC6XZY4bYTIn-l0bPAj7PmPslRT-_2Uw&s',
      descrioption: '',
      pirce: 1
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
      id: 5,
      name: '1',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwtZC6XZY4bYTIn-l0bPAj7PmPslRT-_2Uw&s',
      descrioption: '',
      pirce: 1
    }


  ]
  const listItem2 = [
    {
      id: 1,
      name: '6',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwtZC6XZY4bYTIn-l0bPAj7PmPslRT-_2Uw&s',
      descrioption: '',
      pirce: 2
    },
    {
      id: 1,
      name: '7',
      url: 'https://www.hollywoodreporter.com/wp-content/uploads/2021/10/Mutant-Demon-Ape-Credit-0xb1-copy-H-2021.jpg?w=1296',
      descrioption: '',
      pirce: 3
    }
  ]

  const [value, setValue] = useState(1);
  const [selectTab, setSelectTab] = useState(1);
  const [imagePreviewBackGround, setImagePreviewBackGround] = useState(null);
  const [listNFT, setListNFT] = useState(listItem1)
  const handleChangeTab = (event, newValue) => {
    console.log(newValue);
    setSelectTab(newValue)
    setValue(newValue)
  }
  useEffect(()=>{
    if(selectTab == 1) setListNFT(listItem1);
    else if(selectTab == 2 )setListNFT(listItem);
    else if(selectTab == 3)  setListNFT(listItem2);
  },[selectTab])
  return (
    <>
      <AccountPageStyle>
        <div className='account'>
          <div className='accountInfo'>
            <div className='account-background'>
              <div className='backgroundInfo'>
                {!imagePreviewBackGround ? (
                  <>
                    <TextField
                      key='Image' //fileKey
                      fullWidth
                      hiddenLabel
                      inputProps={{ accept: '.jpg,.jpeg,.png' }}
                      type='file'
                      variant='outlined'
                      // onBlur={formik.handleBlur}
                      onChange={(event) => {
                        console.log(event.target.files[0])
                        const file = event.target.files[0]
                        if (file) {
                          const fileSize = file.size / (1024 * 1024)
                          if (fileSize > 10) {
                            toast.error('> 10MB ')
                            return
                          }
                          const fileUrl = URL.createObjectURL(file)
                          setImagePreviewBackGround(fileUrl)
                        }
                      }}
                      className='imageInput'
                    />
                    <button type='button' className={'uploadImgBtn'}>
                      <img src={FormatPaint} alt='upload-image' className='IconUploadBackGround' />
                    </button>
                  </>
                ) : (
                  <>
                    <div className='imageHover'>
                      <img src={imagePreviewBackGround} alt='Preview' style={{ maxWidth: '100%' }} />
                    </div>
                    <div className='hoverNFT'>
                      <TextField
                        key='Image'
                        fullWidth
                        hiddenLabel
                        inputProps={{ accept: '.jpg,.jpeg,.png' }}
                        type='file'
                        variant='outlined'
                        onChange={(event) => {
                          console.log(event.target.files[0])
                          const file = event.target.files[0]
                          if (file) {
                            const fileSize = file.size / (1024 * 1024)
                            if (fileSize > 10) {
                              toast.error('10MB 未満の Img ファイルをインポートしてください。')
                              return
                            }
                            const fileUrl = URL.createObjectURL(file)
                            setImagePreviewBackGround(fileUrl)
                          }
                        }}
                        className='imageInput imgExist'
                      ></TextField>
                      <button type='button' className={'uploadImgBtn'} >
                        <img src={FormatPaint} alt='upload-image' className='IconUploadBackGround' />
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='account-logo'>
              <img className='logo' src={userIcon} alt='icon-account' style={{ backgroundColor: '#189e00' }}></img>
            </div>
            <div className='account-name'>
              Unnamed
              <div></div>
            </div>
          </div>
          <div className='accountTab'>
            <Tabs
              value={value}
              onChange={handleChangeTab}
              textColor='secondary'
              indicatorColor='secondary'
              aria-label='secondary tabs example'
            >
              <Tab value={1}  label='All' />
              <Tab value={2} label='Listed' />
              <Tab value={3} label='Offers made' />
              <Tab value={4} label='Deals' />
              <Tab value={5} label='Created' />
            </Tabs>
          </div>
          <div className='accountPageItem'>
          <ItemList data={listNFT} account={true} />
          </div>
        </div>
      </AccountPageStyle>
    </>
  )
}
export default AccountPage
