import { useState, useEffect } from 'react'
import WalletConnectDialog from './components/walletConnect/index'
import GlobalStyle from './GlobalStyle'
import Header from './components/header'
import HomePage from './components/homePage'
import BaseToast from './components/base/Toast'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErroPage from './components/erroPage'
import AccountPage from './components/accountPage'
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
        </Routes>
        {/* </BrowserRouter> */}
      {/* </Router> */}
      <GlobalStyle />
    </>
  )
}

export default App
