import { useState, useEffect } from 'react'
import WalletConnectDialog from './components/walletConnect/index'
import GlobalStyle from './GlobalStyle'
import Header from './components/header'
import HomePage from './components/homePage'
const App = () => {
  const [openWalletConnect, setOpenWalletConnect] = useState(false)
  const [account, setAcount] = useState('')
  const [code, setCode] = useState()
  const handleOpen = () => {
    setOpenWalletConnect(true)
  }
  const handleDisConnect = async () => {
    await window.phantom.solana.disconnect({ onlyIfTrusted: true })
    setAcount('')
  }
  const handleInstallPhanTomWallet = async () => {
    window.open('https://phantom.app/', '_blank')
  }

  return (
    <>
      <Header/>
      <HomePage />
      <GlobalStyle />
    </>
  )
}

export default App
