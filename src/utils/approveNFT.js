import { createCreateMetadataAccountV3Instruction, createCreateMasterEditionV3Instruction, createSetCollectionSizeInstruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID,createMintToInstruction,createApproveInstruction,getAssociatedTokenAddressSync,ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction ,createAccount, createMint,getMint, mintTo, getMinimumBalanceForRentExemptMint,getAccountLenForMint ,MINT_SIZE ,createInitializeMintInstruction, createInitializeAccountInstruction } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Transaction,sendAndConfirmTransaction,  Signer , SystemProgram , clusterApiUrl   } from "@solana/web3.js";
import {
    PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  } from "@metaplex-foundation/mpl-token-metadata";
  import { getConnected } from "./walletConnet";
export const approveNFT = async (mintAdress,tokenAccount) =>{
  const con = new Connection(process.env.SOLANA_URL, 'confirmed');
  const wallet = await getConnected();
  try {
    // const associatedToken = getAssociatedTokenAddressSync( //Get the address of the associated token account for a given mint and owner
    //   new PublicKey("GeT8qs3Ng1gj87ENS96pbp4QHoVfH2QcX9JYtnBAZuVE"), //collection Mint
    //   new PublicKey(wallet.walletAddress), // oner
    //   false,
    //   // TOKEN_PROGRAM_ID,
    // )
    // console.log(associatedToken.toBase58());
  
    const transaction = new Transaction().add(
      createApproveInstruction(
         tokenAccount,//associatedToken,
         new PublicKey("ARTcqiXX4qxWdteFSQ3eHgmCbaZArFxxxmFSK9PSQzjD"), // co quyen chuyen token
         new PublicKey(wallet.walletAddress),
        //  new PublicKey("EmmxVM9nLur3pxUd6SNscLECi4hHhbSKLSCy36gABTZi"), //oner
         1
      )
    );
    transaction.feePayer =  new PublicKey(wallet.walletAddress);
    const { blockhash } = await con.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    // const signedTransaction = await wallet.provider.signTransaction(transaction);
    // console.log(signedTransaction);
    // const signature = await con.sendRawTransaction(signedTransaction.serialize());
    // console.log(signature);
    const { signature } = await wallet.provider.signAndSendTransaction(transaction);
    console.log(signature);
    const result = await con.getSignatureStatus(signature);
    console.log(result);
    return {
      status: true,
      result:signature
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error.message
    }
  }
  
}