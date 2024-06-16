import { createCreateMetadataAccountV3Instruction, createCreateMasterEditionV3Instruction, createSetCollectionSizeInstruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID,createMintToInstruction,createApproveInstruction,getAssociatedTokenAddressSync,ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction ,createAccount, createMint,getMint, mintTo, getMinimumBalanceForRentExemptMint,getAccountLenForMint ,MINT_SIZE ,createInitializeMintInstruction, createInitializeAccountInstruction } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Transaction,sendAndConfirmTransaction,  Signer , SystemProgram , clusterApiUrl   } from "@solana/web3.js";
import {
    PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  } from "@metaplex-foundation/mpl-token-metadata";
  import { getConnected } from "./walletConnet";
export const approveNFT = async ( phantomWallet) =>{
  const con = new Connection("https://solana-devnet.g.alchemy.com/v2/UZe8cyrmtLjH44EJ2mm8VZdo1ofTDCfA", 'confirmed');
  const wallet = await getConnected();
  // const associatedToken = getAssociatedTokenAddressSync( //Get the address of the associated token account for a given mint and owner
  //   new PublicKey("GeT8qs3Ng1gj87ENS96pbp4QHoVfH2QcX9JYtnBAZuVE"), //collection Mint
  //   new PublicKey("3GNad18DSitYpiyQuaGgRLvUpT96oe2Arotgj9adQAna"), // oner
  //   false,
  //   // TOKEN_PROGRAM_ID,
  // )
  // console.log(associatedToken.toBase58());

  const transaction = new Transaction().add(
    createApproveInstruction(
       new PublicKey("H6iJ7fhDauJfD9rhzVVS8JzMif66zK9UgvBWHq3NaoPZ"),//associatedToken,
       new PublicKey("EekXeiFnnxRBGDmnMBM4auwYBqA7FcALHxrH2v3UWiZy"), // co quyen chuyen token
       new PublicKey("EmmxVM9nLur3pxUd6SNscLECi4hHhbSKLSCy36gABTZi"), //oner
       1
    )
  );
  transaction.feePayer =  new PublicKey(phantomWallet);
  const { blockhash } = await con.getRecentBlockhash();
  transaction.recentBlockhash = blockhash;
  const signedTransaction = await wallet.provider.signTransaction(transaction);
  console.log(signedTransaction);
  const signature = await con.sendRawTransaction(signedTransaction.serialize());
  console.log(signature);
}