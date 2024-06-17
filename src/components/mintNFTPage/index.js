import React, { useState, useEffect } from 'react'
import MintNFTStyle from './mintNFTStyle';
import { useFormik } from 'formik';
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
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { validate } from './validate';
import { toast } from 'react-toastify';
import DeleteIcon from '../../images/logos/deleteIcon.svg';
import EditIcon from '../../images/logos/EditIcon.svg';
import UploadIcon from '../../images/logos/UploadIcon.svg';
import BaseButton from '../../containers/base/Button';
import {MintNFTDialog, AddTraitDialog} from '../../containers/MintNFTDialog';
import { uploadImgaeFirebase } from '../../utils/uploadImageFirebase';
import {uploadMetaData} from "../../utils/uploadMetaData";
const MintNFTPage = () => {
  // const [fileKey, setFileKey] = useState(0)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null)
  const [isOpenDialogMintNFT, setIsOpenDialogMintNFT] = useState(false);
  const [isOpenDialogAddTrait, setIsOpenDialogAddTrait] = useState(false);
  const [nftTrait, setNftTrait] = useState([]);
  const handlerDeleteImageNFT = () => {
    setImagePreviewUrl(null)
  }
  const handlerAddTrait = () => {
    setIsOpenDialogAddTrait(true)
  };
  const handlerEditTrait = (item,index) =>{
    console.log(nftTrait);
  };
  const handlerDeleteTrait = (item,index) =>{
    console.log(nftTrait);
    console.log(index);
    setNftTrait((prevTraits) => prevTraits.filter((_, i) => i !== index));
  }
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      imageNFT: null,
      nameNFT: null,
      symbolNFT: null,
      descriptionNFT: null,
      // attributes:[]
    },
    validate,
    onSubmit: async (values) => {
      // await dispatch(register(values));
      const imageURL =  await uploadImgaeFirebase(values.imageNFT,"imageNFT");
      const data = {
        name: values.nameNFT,
        symbol: values.nameNFT,
        description: values.descriptionNFT,
        // seller_fee_basis_points: 5,
        external_url: '',
        edition: '',
        background_color: '000000',
        image: imageURL
      }
    const result=  await uploadMetaData(data);
    // console.log(result);
    setIsOpenDialogMintNFT(true);
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
                  onBlur={formik.handleBlur}
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
                      setImagePreviewUrl(fileUrl)
                      formik.setFieldValue('imageNFT', file)
                      formik.errors.imageNFT = ''
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
                  <img src={UploadIcon} alt='upload-image' />
                  <div className='uploadImgText'>Upload Media</div>
                  <div className='imageSize'>
                    <span>Max size: 10MB</span>
                    <span>JPG, PNG, GIF, SVG</span>
                  </div>
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
                    onBlur={formik.handleBlur}
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
                        formik.setFieldValue('imageNFT', file)
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
              <div className='label'>Name *</div>
              <TextField
                variant='outlined'
                placeholder='Name your NFT'
                type='text'
                fullWidth
                name='nameNFT'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                // value={formik.values.nameNFT}
                error={formik.touched.nameNFT && !!formik.errors.nameNFT}
                helperText={formik.touched.nameNFT && formik.errors.nameNFT}
              />
            </Box>

            <Box>
              <div className='label'>Symbol *</div>
              <TextField
                variant='outlined'
                placeholder="Symbol your NFT"
                type='text'
                fullWidth
                onBlur={formik.handleBlur}
                name='symbolNFT'
                onChange={formik.handleChange}
                // value={formik.values.supplyNFT}
                error={formik.touched.symbolNFT && !!formik.errors.symbolNFT}
                helperText={formik.touched.symbolNFT && formik.errors.symbolNFT}
              />
            </Box>

            <Box>
              <div className='label'>Description NFT </div>
              <TextField
                className='input'
                fullWidth
                hiddenLabel
                multiline
                rows={4}
                type='text'
                variant='outlined'
                name='descriptionNFT'
                onChange={formik.handleChange}
                // value={formik.values.descriptionNFT}
                placeholder='Enter a Description'
                // value={notes}
                // onChange={(event) => setNotes(event.target.value.trimStart())}
              />
            </Box>

            <Box>
              <div className='label'>Trains NFT </div>
              <div className='descriptionTraits'>Traits describe attributes of your item. They appear as filters inside your collection page and are also listed out inside your item page.</div>
              <Button className='addTrait' onClick={handlerAddTrait}>
                <AddIcon/>
                <span className='labelTrait'>Add trait</span>
              </Button>
              <div className='traitNFT'>
                {nftTrait && nftTrait.map((item,index)=>(
                    <TextField
                     key={index}
                     className='trait'
                     fullWidth
                     hiddenLabel
                     name="search"
                     type="text"
                     variant="outlined"
                     margin="dense"
                     autoComplete="off"
                    //  value={item.trait_type}
                    disabled
                     InputProps={{
                      startAdornment:(
                        <InputAdornment position="start">
                        {item.trait_type} | {item.value}
                        </InputAdornment>
                      ),
                       endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={() => handlerEditTrait(item,index)}>
                              <img src={EditIcon} alt="edit-icon" />
                            </IconButton>
                            <IconButton onClick={() => handlerDeleteTrait(item,index)}>
                              <img src={DeleteIcon} alt="delete-icon" />
                            </IconButton>
                          </InputAdornment>
                       ),
                     }}
                   />
                )
                 
                )}
              </div>
            </Box>
          </div>
          <div className='bttCreate'>
            <BaseButton text='Create' className='' type='primary' width='100%' />
          </div>
        </form>
      </div>
      <MintNFTDialog
        visible={isOpenDialogMintNFT}
        onClose={() => {
          setIsOpenDialogMintNFT(false)
        }}
      />
      <AddTraitDialog
        visible={isOpenDialogAddTrait}
        onClose={() => {
          setIsOpenDialogAddTrait(false)
        }}
        setNftTrait={setNftTrait}
      />
    </MintNFTStyle>
  )
}

export default MintNFTPage
