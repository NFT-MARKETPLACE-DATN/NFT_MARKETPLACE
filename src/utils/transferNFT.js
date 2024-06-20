import { createCreateMetadataAccountV3Instruction, createCreateMasterEditionV3Instruction, createSetCollectionSizeInstruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID,createTransferInstruction,createMintToInstruction,createApproveInstruction,getAssociatedTokenAddressSync,ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction ,createAccount, createMint,getMint, mintTo, getMinimumBalanceForRentExemptMint,getAccountLenForMint ,MINT_SIZE ,createInitializeMintInstruction, createInitializeAccountInstruction } from "@solana/spl-token";
import { Connection,getOrCreateAssociatedTokenAccount, Keypair, PublicKey, Transaction,sendAndConfirmTransaction,  Signer , SystemProgram , clusterApiUrl   } from "@solana/web3.js";
import {
    PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  } from "@metaplex-foundation/mpl-token-metadata";
  import { getConnected } from "./walletConnet";
export const transferNFT = async () =>{
  const con = new Connection(process.env.SOLANA_URL, 'confirmed');
  const wallet = await getConnected();
  try {
    const associatedToken = getAssociatedTokenAddressSync( //Get the address of the associated token account for a given mint and owner
      new PublicKey("EH7puJivNHNeHYt1WeKZB2X555mBY4UgdBWJiLaVHQ2r"), //collection Mint
      new PublicKey(wallet.walletAddress), // oner
      false,
      // TOKEN_PROGRAM_ID,
    )
    const programId = TOKEN_PROGRAM_ID;
    const associatedTokenProgramId  = ASSOCIATED_TOKEN_PROGRAM_ID;
      console.log(associatedToken.toBase58());
    const initializeMintInstructionAssociatedTokenAccount = createAssociatedTokenAccountInstruction(
      new PublicKey(wallet.walletAddress),
      associatedToken,
      new PublicKey(wallet.walletAddress),
      new PublicKey("EH7puJivNHNeHYt1WeKZB2X555mBY4UgdBWJiLaVHQ2r"),// address mint
      programId,
      associatedTokenProgramId
    )
  
  // const transferInstruction = createTransferInstruction( // Token program ID
  //     new PublicKey("7ZCgciL1PXmYkoxwGXuSkPD6x6yFXnLWqGxLkiS9SQMt"),     // Tài khoản nguồn
  //     associatedToken,              // Tài khoản đích
  //     new PublicKey("EekXeiFnnxRBGDmnMBM4auwYBqA7FcALHxrH2v3UWiZy"), // Delegate Public Key (đã được ủy quyền)
  //     [],                                           // Danh sách các tài khoản đồng ký (nếu có)
  //     1                                             // Số lượng token cần chuyển (1 cho NFT)
  // );
    const transferNFT = createTransferInstruction(
        new PublicKey("H6iJ7fhDauJfD9rhzVVS8JzMif66zK9UgvBWHq3NaoPZ"), //nguồn
        new PublicKey("Z77KLA5gPuDNttfmLrSCnkeiWdY31wdCUhHuDKDU3Sf"), //đích CX3Bo2H92PeDf6723HtXcZ3kzXR67Q3g2JUo2W5Kqohb
        new PublicKey(wallet.walletAddress),
        1,
        [],
        programId
    )
    // console.log(walletPayer.publicKey.toBase58());
    const transaction = new Transaction()
    // .add(initializeMintInstructionAssociatedTokenAccount)
    .add(transferNFT);
    transaction.feePayer =  new PublicKey(wallet.walletAddress);
    const { blockhash } = await con.getRecentBlockhash();
    transaction.recentBlockhash = blockhash;
    // transaction.sign(walletPayer);
    const signedTransaction = await wallet.provider.signTransaction(transaction);
    console.log(signedTransaction);
    const signature = await con.sendRawTransaction(signedTransaction.serialize());
    console.log(signature);
  } catch (error) {
    
  }
}