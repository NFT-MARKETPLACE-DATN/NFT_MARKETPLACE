import React, { useState, useEffect } from 'react'
import MintNFTStyle from './mintNFTStyle'
import { useFormik } from 'formik';

const MintNFTPage = () => {

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: '',
      password: '',
      subscribe: false,
    },
    // validate,
    onSubmit: async values => {
      // await dispatch(register(values));
    },
  });
  return (
    <MintNFTStyle>
      <div className='MintNFTPage'>
        <div className='header'>
          <div className='title'>Create an NFT</div>
          <div className='informationMinNFT'>
            Once your item in minted you will not be able to change any of its information
          </div>
        </div>
        <div className='form'>
          <form onSubmit={formik.handleSubmit}></form>
        </div>
      </div>
    </MintNFTStyle>
  )
}

export default MintNFTPage
