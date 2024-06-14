import { createCreateMetadataAccountV3Instruction, createCreateMasterEditionV3Instruction, createSetCollectionSizeInstruction } from "@metaplex-foundation/mpl-token-metadata";
import { TOKEN_PROGRAM_ID,createMintToInstruction,getAssociatedTokenAddressSync,ASSOCIATED_TOKEN_PROGRAM_ID, createAssociatedTokenAccountInstruction ,createAccount, createMint,getMint, mintTo, getMinimumBalanceForRentExemptMint,getAccountLenForMint ,MINT_SIZE ,createInitializeMintInstruction, createInitializeAccountInstruction } from "@solana/spl-token";
import { Connection, Keypair, PublicKey, Transaction, sendAndConfirmTransaction,  Signer , SystemProgram , clusterApiUrl   } from "@solana/web3.js";
import {
    PROGRAM_ID as TOKEN_METADATA_PROGRAM_ID,
  } from "@metaplex-foundation/mpl-token-metadata";
// import { loadWalletKey } from "./utils";
import { getConnected } from "./walletConnet";
// const bs58 = require('bs58');

// Creates a metaplex collection NFT
export const initCollection = async (
    connection,
    phantomWallet
  ) => {
    // console.log(connection);
    const con = new Connection("https://solana-devnet.g.alchemy.com/v2/UZe8cyrmtLjH44EJ2mm8VZdo1ofTDCfA", 'confirmed');
    const wallet = await getConnected();
    const collectionAddress = Keypair.generate(); //Token mint account

    const lamports = await getMinimumBalanceForRentExemptMint(new Connection(connection, 'confirmed'));
    const programId = TOKEN_PROGRAM_ID;
    const associatedTokenProgramId  = ASSOCIATED_TOKEN_PROGRAM_ID;
    const createAccountInstructionAddressCollection = SystemProgram.createAccount({
      fromPubkey: new PublicKey(phantomWallet),
      newAccountPubkey: collectionAddress.publicKey, // địa chỉ tài khoản
      space: MINT_SIZE,
      lamports,
      programId,
    });
    const initializeMintInstructionAddressCollection = createInitializeMintInstruction(
      collectionAddress.publicKey, // Địa chỉ tài khoản mint
      0, // Số thập phân (decimals)
      new PublicKey(phantomWallet), // mintAuthority
      new PublicKey(phantomWallet), // freezeAuthority (nếu có)
      TOKEN_PROGRAM_ID
    );
    console.log("collectionAddress", collectionAddress.publicKey.toBase58());

    // const tokenAccountCollection = Keypair.generate();//Token Account quản lý collection
    
    // const createAccountInstructionTokenAccount = SystemProgram.createAccount({
    //   fromPubkey: new PublicKey(phantomWallet),
    //   newAccountPubkey: tokenAccountCollection.publicKey,
    //   space: MINT_SIZE,
    //   lamports,
    //   programId,
    // });

    const associatedToken = getAssociatedTokenAddressSync( //Get the address of the associated token account for a given mint and owner
      collectionAddress.publicKey, //collection Mint
      new PublicKey(phantomWallet), // oner
      false,
      // TOKEN_PROGRAM_ID,
    )
    const initializeMintInstructionAssociatedTokenAccount = createAssociatedTokenAccountInstruction(
      new PublicKey(phantomWallet),
      associatedToken,
      new PublicKey(phantomWallet),
      collectionAddress.publicKey,
      programId,
      associatedTokenProgramId
    )
    console.log("tokenAccountCollection", associatedToken.toBase58());
    // const initializeMintInstructionTokenAccount =  createInitializeAccountInstruction(
    //   tokenAccountCollection.publicKey,
    //   collectionAddress.publicKey,
    //   new PublicKey(phantomWallet),
    //   TOKEN_PROGRAM_ID
    // );
    // console.log("tokenAccountCollection", tokenAccountCollection.publicKey.toBase58());
  
    // 1 token  collectionMint vào account collectionTokenAccount
    const mintToAddressCollectionToTokenAccount = createMintToInstruction(
      collectionAddress.publicKey,
      associatedToken,
      new PublicKey(phantomWallet),
      1
    );

    const [collectionMetadataAccount, _b] = PublicKey.findProgramAddressSync(
      [
        Buffer.from("metadata", "utf8"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        collectionAddress.publicKey.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    );
    const collectionMeatadataIX = createCreateMetadataAccountV3Instruction(
      {
        metadata: collectionMetadataAccount,
        mint: collectionAddress.publicKey,
        mintAuthority: new PublicKey(phantomWallet),
        payer: new PublicKey(phantomWallet),
        updateAuthority: new PublicKey(phantomWallet),
      },
      {
        createMetadataAccountArgsV3: {
          data: {
            name: "MarketPlace Test 2",
            symbol: "ARTCHAIN",
            uri: "https://azure-acute-bee-777.mypinata.cloud/ipfs/QmeheDt5FVAEXS6FAcxyNYtT8JtdXSGoiuYRmyukkCV3F6",
            sellerFeeBasisPoints: 0,
            creators: null,
            collection: null,
            uses: null,
          },
          isMutable: true,
          collectionDetails: null,
        },
      }, 
      TOKEN_METADATA_PROGRAM_ID
    );
    console.log("collectionMeatadataIX",collectionMeatadataIX);
    const [collectionMasterEditionAccount, _b2] =
        PublicKey.findProgramAddressSync(
          [
            Buffer.from("metadata", "utf8"),
            TOKEN_METADATA_PROGRAM_ID.toBuffer(),
            collectionAddress.publicKey.toBuffer(),
            Buffer.from("edition", "utf8"),
          ],
          TOKEN_METADATA_PROGRAM_ID
    );
    const collectionMasterEditionIX = createCreateMasterEditionV3Instruction(
      {
        edition: collectionMasterEditionAccount,
        mint: collectionAddress.publicKey,
        mintAuthority:  new PublicKey(phantomWallet),
        payer:  new PublicKey(phantomWallet),
        updateAuthority:  new PublicKey(phantomWallet),
        metadata: collectionMetadataAccount,
        tokenProgram: TOKEN_PROGRAM_ID
      },
      {
        createMasterEditionArgs: {
          maxSupply: 0,
        },
      }, 
      TOKEN_METADATA_PROGRAM_ID
    );
    console.log("collectionMasterEditionIX",collectionMasterEditionIX);

    const sizeCollectionIX = createSetCollectionSizeInstruction(
      {
        collectionMetadata: collectionMetadataAccount,
        collectionAuthority:  new PublicKey(phantomWallet),
        collectionMint: collectionAddress.publicKey,
      },
      {
        setCollectionSizeArgs: { size: 10000 },
      },
      TOKEN_METADATA_PROGRAM_ID
    );
    console.log("sizeCollectionIX",sizeCollectionIX);
    // const transaction = new Transaction().add(
    //   SystemProgram.createAccount({
    //     fromPubkey: new PublicKey(phantomWallet),
    //     newAccountPubkey: collectionAddress.publicKey, // địa chỉ tài khoản
    //     space: MINT_SIZE,
    //     lamports,
    //     programId,
    //   }),
    //   createInitializeMintInstruction(
    //     collectionAddress.publicKey, // Địa chỉ tài khoản mint
    //     0, // Số thập phân (decimals)
    //     new PublicKey(phantomWallet), // mintAuthority
    //   )

    // )

    try {
      const transaction = new Transaction()
      .add(createAccountInstructionAddressCollection)
      .add(initializeMintInstructionAddressCollection)
      .add(initializeMintInstructionAssociatedTokenAccount)
      .add(mintToAddressCollectionToTokenAccount)
      .add(collectionMeatadataIX)
      .add(collectionMasterEditionIX)
      .add(sizeCollectionIX);
      transaction.feePayer = new PublicKey(phantomWallet);
      const { blockhash } = await con.getRecentBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.sign(collectionAddress);
      const signedTransaction = await wallet.provider.signTransaction(transaction);
      console.log(signedTransaction);
      const signature = await con.sendRawTransaction(signedTransaction.serialize());
      console.log(signature);
    } catch (error) {
      console.log(error);
    }
  };

export async function main(){
    // const keypair = loadWalletKey("CNFTKDRCpENe7S1hPvDS2E6YJr3fKKUbc3DWuyjF1mEW.json");
    const wallet = Keypair.fromSecretKey(
        new Uint8Array([
          201, 248, 129, 145, 128, 218, 95, 80, 230, 175, 113, 51, 40, 111, 217, 130, 27, 158, 254, 75, 166, 97, 134, 232,
          205, 29, 151, 131, 103, 218, 67, 92, 202, 211, 163, 67, 242, 61, 145, 96, 8, 57, 157, 60, 198, 140, 88, 205, 229,
          202, 166, 35, 239, 197, 255, 166, 80, 232, 220, 82, 176, 178, 112, 116
        ])
      )
    const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/UZe8cyrmtLjH44EJ2mm8VZdo1ofTDCfA",'confirmed');
    
  await initCollection(connection, wallet);
}

