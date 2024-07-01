import React, { useState, useEffect } from 'react';
import MintNFTStyle from './mintNFTStyle';
import { useFormik } from 'formik';
import Loading from '../../containers/Loading';
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
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { validate } from './validate'
import { toast } from 'react-toastify'
import DeleteIcon from '../../images/logos/deleteIcon.svg'
import EditIcon from '../../images/logos/EditIcon.svg'
import UploadIcon from '../../images/logos/UploadIcon.svg'
import BaseButton from '../../containers/base/Button'
import { MintNFTDialog, AddTraitDialog } from '../../containers/MintNFTDialog'
import { uploadImgaeFirebase } from '../../utils/uploadImageFirebase'
import { uploadMetaData } from '../../utils/uploadMetaData'
import { initCollection } from '../../utils/createMintNFT'
import { useLocation, useNavigate } from 'react-router-dom'
import {createNft,setLoading} from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';

const MintNFTPage = () => {
  // const [fileKey, setFileKey] = useState(0)
  const dispatch = useDispatch();
  const {account,accountInfo} = useSelector(state => state.globalState || {});
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [isOpenDialogMintNFT, setIsOpenDialogMintNFT] = useState(false);
  const [isOpenDialogAddTrait, setIsOpenDialogAddTrait] = useState(false);
  const [transaction,setTransaction] = useState();
  const [addressNft,setAddressNft] = useState();
  const [nftTrait, setNftTrait] = useState([]);
  const navigate = useNavigate();
  
  const handlerDeleteImageNFT = () => {
    setImagePreviewUrl(null);
    formik.setFieldValue('imageNFT', null);
  }
  const handlerAddTrait = () => {
    setIsOpenDialogAddTrait(true)
  }
  // const handlerEditTrait = (item,index) =>{
  //   // console.log(nftTrait);
  //   setIsOpenDialogAddTrait(true);
  // };
  const handlerDeleteTrait = (item, index) => {
    setNftTrait((prevTraits) => prevTraits.filter((_, i) => i !== index))
  }
  useEffect(() => {
    if (!localStorage.getItem('walletAdress')) navigate('/')
  }, [])
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      imageNFT: null,
      nameNFT: null,
      symbolNFT: null,
      descriptionNFT: null
      // attributes:[]
    },
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      event.preventDefault();
      // await dispatch(register(values));
      setSubmitting(true);
      try {
        dispatch(setLoading(true));
        const imageURL = await uploadImgaeFirebase(values.imageNFT, 'imageNFT');
        if (imageURL.status == true) {
          const data = {
            name: values.nameNFT,
            symbol: values.nameNFT,
            description: values.descriptionNFT,
            seller_fee_basis_points: 100,
            image: imageURL.result,
            attributes: nftTrait,
            properties: {
              files: [
                {
                  uri: imageURL.result,
                  type: "image/png"
                }
              ],
              category: "image",
              creators: [
                {
                  address: account,
                  share: 100
                }
              ]
            },
          }
          const uploadDataToIDFS = await uploadMetaData(data);
          if (uploadDataToIDFS.status == true) {
            const result =  await initCollection(data,uploadDataToIDFS.result);
            if(result.status){
              setTransaction(result.result);
              setAddressNft(result.mint_address);
              const params = {
                nftName:values.nameNFT,
                symbol: values.nameNFT,
                image: imageURL.result,
                description: values.descriptionNFT,
                attribute: nftTrait,
                mintAddress: result.mint_address,
                tokenAccount: result.token_account,
                transaction: result.result,
                userID: accountInfo.id,
                metadataUrl:uploadDataToIDFS.result
              }
              dispatch(createNft(params))
              setIsOpenDialogMintNFT(true);
              
            }else{
              if(result.result == "Unexpected error"){
                toast.error("Your SOL balance is insufficient OR Blockchain Solana slot not running ");//Please check your account balance again
              }else{
                toast.error(result.result);
              }
              
              dispatch(setLoading(false))
            }
          }else{
            toast.error('Upload file IDFS flase. Try again ');
            dispatch(setLoading(false))
          }
        }else{
          toast.error('Upload file flase. Try again');
          dispatch(setLoading(false))
        }
      } catch (error) {
        toast.error(error.message);
        console.log(error);
        dispatch(setLoading(false))
      }finally {
        setSubmitting(false);
      }
     


     
    }
  })
  return (
    <>
    <Loading loading={false}></Loading>
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
                    // console.log(event.target.files[0])
                    const file = event.target.files[0]
                    if (file) {
                      const fileSize = file.size / (1024 * 1024)
                      if (fileSize > 10) {
                        toast.error('File > 10MB ')
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
                          toast.error('File > 10MB ')
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
                // onBlur={formik.handleBlur}
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
                placeholder='Symbol your NFT'
                type='text'
                fullWidth
                // onBlur={formik.handleBlur}
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
              <div className='descriptionTraits'>
                Traits describe attributes of your item. They appear as filters inside your collection page and are also
                listed out inside your item page.
              </div>
              <Button className='addTrait' onClick={handlerAddTrait}>
                <AddIcon />
                <span className='labelTrait'>Add trait</span>
              </Button>
              <div className='traitNFT'>
                {nftTrait &&
                  nftTrait.map((item, index) => (
                    <TextField
                      key={index}
                      className='trait'
                      fullWidth
                      hiddenLabel
                      name='search'
                      type='text'
                      variant='outlined'
                      margin='dense'
                      autoComplete='off'
                      //  value={item.trait_type}
                      disabled
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            {item.trait_type} | {item.value}
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position='end'>
                            {/* <IconButton onClick={() => handlerEditTrait(item,index)}>
                              <img src={EditIcon} alt="edit-icon" />
                            </IconButton> */}
                            <IconButton onClick={() => handlerDeleteTrait(item, index)}>
                              <img src={DeleteIcon} alt='delete-icon' />
                            </IconButton>
                          </InputAdornment>
                        )
                      }}
                    />
                  ))}
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
        transaction={transaction}
        addressNft={addressNft}
      />
      <AddTraitDialog
        visible={isOpenDialogAddTrait}
        onClose={() => {
          setIsOpenDialogAddTrait(false)
        }}
        setNftTrait={setNftTrait}
      />
    </MintNFTStyle>
    </>

  )
}

export default MintNFTPage
