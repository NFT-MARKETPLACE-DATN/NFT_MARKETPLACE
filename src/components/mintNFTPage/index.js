import React, { useState, useEffect } from 'react'
import MintNFTStyle from './mintNFTStyle'

const MintNFTPage = () => {
  return (
    <MintNFTStyle>
      <div className='MintNFTPage'>
        <div className='header'>
          <div className='title'>Create an NFT</div>
          <div className='informationMinNFT'>
            Once your item in minted you will not be able to change any of its information
          </div>
        </div>
        <div className='form'></div>
      </div>
    </MintNFTStyle>
  )
}

export default MintNFTPage
