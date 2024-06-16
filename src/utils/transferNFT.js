import { createCreateMetadataAccountV3Instruction, createCreateMasterEditionV3Instruction, createSetCollectionSizeInstruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID,createTransferInstruction,createMintToInstruction,createApproveInstruction,getAssociatedTokenAddressSync,ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction ,createAccount, createMint,getMint, mintTo, getMinimumBalanceForRentExemptMint,getAccountLenForMint ,MINT_SIZE ,createInitializeMintInstruction, createInitializeAccountInstruction } from "@solana/spl-token";
import { Connection,getOrCreateAssociatedTokenAccount, Keypair, PublicKey, Transaction,sendAndConfirmTransaction,  Signer , SystemProgram , clusterApiUrl   } from "@solana/web3.js";
import {
    PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  } from "@metaplex-foundation/mpl-token-metadata";
  import { getConnected } from "./walletConnet";
export const transferNFT = async () =>{
    const con = new Connection("https://solana-devnet.g.alchemy.com/v2/UZe8cyrmtLjH44EJ2mm8VZdo1ofTDCfA", 'confirmed');
    const wallet = await getConnected();
    // const walletPayer = Keypair.fromSecretKey(
    //     new Uint8Array([
    //       201, 248, 129, 145, 128, 218, 95, 80, 230, 175, 113, 51, 40, 111, 217, 130, 27, 158, 254, 75, 166, 97, 134, 232,
    //       205, 29, 151, 131, 103, 218, 67, 92, 202, 211, 163, 67, 242, 61, 145, 96, 8, 57, 157, 60, 198, 140, 88, 205, 229,
    //       202, 166, 35, 239, 197, 255, 166, 80, 232, 220, 82, 176, 178, 112, 116
    //     ])
    //   )
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
}