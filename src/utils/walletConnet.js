
export const getConnected = async () => {
//   if ((!process.browser && window === undefined) || window === null) {
//     return {
//       walletAddress: null,
//     };
//   }
//   console.log('window', window);
//   console.log('window.ethereum', window.ethereum);
//   // console.log('window.ethereum.isTrustWallet', window.ethereum.isTrustWallet);
//   console.log('window.ethereum.isMetaMask', window.ethereum.isMetaMask);
  // console.log(
  //   'window.ethereum.isSelectingExtension',
  //   window.ethereum.isSelectingExtension,
  //   'check',
  //   window.ethereum.isSelectingExtension in window.ethereum,
  // );
  // console.log('window.ethereum.isExodus', window.ethereum.isExodus);
  try {
    // if (!window.phantom?.solana) return;
     let account = null;
     if ('phantom' in window) {
      const provider = window.phantom?.solana;
      
      if (provider?.isPhantom) {
        let address = await provider.connect();
        // console.log(address);
        account = address.publicKey.toString();
        if (account !== undefined) {
          return {
            provider: provider,
            walletAddress: account,
            code:1
          };
        }
        return {
          provider:provider,
          walletAddress: null,
          code:2
        };
      }
    }
    return{
      walletAddress: null,
      code:0
    }
    // window.open('https://phantom.app/', '_blank');
     
      // const isPhantomInstalled = window.phantom?.solana?.isPhantom
    //   console.log(window.phantom.solana);
    // }
    // else{
    // console.log(window.ethereum);
    //   await window.ethereum.enable();
    //   const accounts = await window.ethereum.request({
    //     method: 'eth_requestAccounts',//eth_accounts
    //   });
    //   account = accounts[0];
    // let address = await window.solflare.connect();
    // // account = address.publicKey.toString();
    // console.log(window.solflare);
    // }  

    // console.log(account);
    // let aaa =  await window.ethereum.request({
    //       method: 'eth_requestAccounts',
    //     })
    //await window.ethereum.request({ method: "eth_requestAccounts" });
    // await window.ethereum.enable();
    
    // console.log('accounts accounts', account);
   

  } catch (err) {
    console.log(`Login to wallet error`, err);

    return {
      walletAddress: null,
    };
  }
};
