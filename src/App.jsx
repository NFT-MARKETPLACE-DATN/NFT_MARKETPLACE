import { useState, useEffect } from 'react';
import WalletConnectDialog from './containers/WalletConnect/index'
import GlobalStyle from './GlobalStyle';
import Header from './components/header';
import HomePage from './components/homePage';
import BaseToast from './containers/base/Toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErroPage from './components/erroPage';
import AccountPage from './components/accountPage';
import MintNFTPage from './components/mintNFTPage';
import DetailNFTPage from './components/nftPage';
const App = () => {
  // const [openWalletConnect, setOpenWalletConnect] = useState(false)
  // const [account, setAcount] = useState('')
  // const [code, setCode] = useState()
  // const handleOpen = () => {
  //   setOpenWalletConnect(true)
  // }
  // const handleDisConnect = async () => {
  //   await window.phantom.solana.disconnect({ onlyIfTrusted: true })
  //   setAcount('')
  // }
  // const handleInstallPhanTomWallet = async () => {
  //   window.open('https://phantom.app/', '_blank')
  // }
  return (
    <>
      {/* <Router> */}
        <Header />
        <BaseToast />
        {/* <BrowserRouter> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/users/*' element={<ErroPage></ErroPage>} />
          <Route path='/account' element={<AccountPage />}></Route>
          <Route path='/mint' element={<MintNFTPage />}></Route>
          <Route path='/nft' element={<DetailNFTPage/>}></Route>
          <Route path='/user' element={<DetailNFTPage/>}></Route>
        </Routes>
        {/* </BrowserRouter> */}
      {/* </Router> */}
      <GlobalStyle />
    </>
  )
}

export default App
