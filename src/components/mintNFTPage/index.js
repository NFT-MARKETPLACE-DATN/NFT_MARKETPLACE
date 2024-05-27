import React, { useState, useEffect } from 'react'
import MintNFTStyle from './mintNFTStyle'
import { useFormik } from 'formik'
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
import { validate } from './validate'
import { toast } from 'react-toastify'
import DeleteIcon from '../../images/logos/deleteIcon.svg'

const MintNFTPage = () => {
  // const [fileKey, setFileKey] = useState(0)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)
  const handlerDeleteImageNFT = () => {
    setImagePreviewUrl(null)
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      imageNFT: null,
      nameNFT: null,
      supplyNFT: 0,
      descriptionNFT: null
    },
    validate,
    onSubmit: async (values) => {
      // await dispatch(register(values));
    }
  })
  return (
    <MintNFTStyle>
      <div className='MintNFTPage'>
        <div className='header comon-style'>
          <div className='headerInfo'>
            <span className='title'>Create an NFT</span>
            <span className='informationMinNFT'>
              Once your item in minted you will not be able to change any of its information
            </span>
          </div>
          <div className='headerInfo headerMobi'></div>
        </div>

        {/* <div > */}
        <form onSubmit={formik.handleSubmit} className='formCreateNFT comon-style'>
          <div className='imageNFT'>
            {!imagePreviewUrl ? (
              <>
                <TextField
                  key='Image' //fileKey
                  fullWidth
                  hiddenLabel
                  name='imageNFT'
                  inputProps={{ accept: '.jpg,.jpeg,.png,.gif,.svg,.mp4' }}
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
                      setImagePreviewUrl(fileUrl)
                      formik.setFieldValue('imageNFT', fileUrl)
                      // setFileKey(fileKey + 1)
                    }
                  }}
                  error={formik.touched.imageNFT && !!formik.errors.imageNFT}
                  helperText={formik.touched.imageNFT && formik.errors.imageNFT}
                  className='imageInput'
                />
                <button
                  type='button'
                  className={
                    formik.touched.imageNFT && formik.errors.imageNFT ? 'uploadImgBtn imgInfoError' : 'uploadImgBtn'
                  }
                >
                  {/* <img src={CsvIcon} alt="file-csv" /> */}
                  <div className='uploadImgText'>Upload Img</div>
                </button>
              </>
            ) : (
              <>
                <div className='imageHover'>
                  <img src={imagePreviewUrl} alt='Preview' style={{ maxWidth: '100%' }} />
                </div>
                <div className='hoverNFT'>
                  <TextField
                    key='Image'
                    fullWidth
                    hiddenLabel
                    name='imageNFT'
                    inputProps={{ accept: '.jpg,.jpeg,.png,.gif,.svg,.mp4' }}
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
                        setImagePreviewUrl(fileUrl)
                        formik.setFieldValue('imageNFT', fileUrl)
                        // setFileKey(fileKey + 1)
                      }
                    }}
                    error={formik.touched.imageNFT && !!formik.errors.imageNFT}
                    helperText={formik.touched.imageNFT && formik.errors.imageNFT}
                    className='imageInput imgExist'
                  />
                  <button
                    type='button'
                    className={
                      formik.touched.imageNFT && formik.errors.imageNFT ? 'deleteImgIcon imgInfoError' : 'deleteImgIcon'
                    }
                    onClick={handlerDeleteImageNFT}
                  >
                    <img src={DeleteIcon} />
                  </button>
                </div>
              </>
            )}
          </div>
          <div className='imformationNFT'>
            <Box>
              <div className='label'>Collection *</div>
              <TextField
                variant='outlined'
                placeholder='Name your NFT'
                type='text'
                fullWidth
                name='nameNFT'
                error={formik.touched.nameNFT && !!formik.errors.nameNFT}
                helperText={formik.touched.nameNFT && formik.errors.nameNFT}
              />
            </Box>

            <Box>
              <div className='label'>Supply *</div>
              <TextField
                variant='outlined'
                //  placeholder="Name your NFT"
                type='text'
                fullWidth
                name='supplyNFT'
                //  onBlur={formik.handleBlur}
                error={formik.touched.supplyNFT && !!formik.errors.supplyNFT}
                helperText={formik.touched.supplyNFT && formik.errors.supplyNFT}
              />
            </Box>

            <Box>
              <div className='label'>Description NFT </div>
              <TextField
                className='input'
                fullWidth
                hiddenLabel
                multiline
                rows={5}
                type='text'
                variant='outlined'
                name='descriptionNFT'
                placeholder='Enter a Description'
                // value={notes}
                // onChange={(event) => setNotes(event.target.value.trimStart())}
              />
            </Box>
          </div>
        </form>
      </div>
      {/* </div> */}
    </MintNFTStyle>
  )
}

export default MintNFTPage
