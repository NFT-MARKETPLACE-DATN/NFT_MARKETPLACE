import { useState,useEffect } from 'react'
import WalletConnectDialog from './components/walletConnect/index';
import GlobalStyle from './GlobalStyle';
import Header from './components/header';
const App = () => {
  const [openWalletConnect, setOpenWalletConnect] = useState(false);
  const [account, setAcount] = useState("");
  const [code, setCode] = useState();
  const handleOpen = () => {
    setOpenWalletConnect(true)
  }
  const handleDisConnect = async () => {
    await window.phantom.solana.disconnect({ onlyIfTrusted: true });
    setAcount("")
  }
  const handleInstallPhanTomWallet = async () => {
    window.open('https://phantom.app/', '_blank');
  }
  
  return (
    <>
    {/* {(account == "" || account == null) ?  
     <button onClick={handleOpen}>Connect</button>
     :
     <>
      <div>account: {account}</div>
      <button onClick={handleDisConnect}>Disconnect</button>
     </>
    }
    {code == 0 && (<>
      <div>Chua co phatom wallet tren may tinh </div>
      <div>Click vao day de tai</div>
      <button onClick={handleInstallPhanTomWallet}>Install PhanTom wallet</button>
    </>) }
    
      <WalletConnectDialog
        visible={openWalletConnect}
        onClose={() => {
          setOpenWalletConnect(false)
        }}
        setAcount={setAcount}
        setCode={setCode}
      /> */}
      <Header></Header>
      <GlobalStyle/>
    </>
  )
}

export default App
