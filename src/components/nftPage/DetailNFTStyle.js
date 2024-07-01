import styled from 'styled-components'
const DetailNFTStyle = styled.div`
  // width: 100%;
  margin-top: 10px;
  padding-left: 3rem;
  padding-right: 3rem;
  @media screen and (max-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .nftItem {
    background-color: #ffff;
    display: flex;
    padding: 20px;
    gap: 30px;
    @media screen and (max-width: 1100px) {
      padding: 30px;
      flex-direction: column;
      position: relative;
    }
    @media screen and (max-width: 600px) {
      padding: 20px;
    }
    .infoNFT {
      min-width: 50%;
      // gap:10px;
      // display: flex;
      // flex-direction: column;
      @media screen and (max-width: 1100px) {
        max-width: 100%;
        margin-top: 50px;
      }
      .imageNFT {
        width: 100%;
        .cardNFT{
          .image{
            width: 100%;
          }
        }
      }
      .descriptionNFT {
        margin-top: 10px;
        .labelDescription {
          display: flex;
          align-items: center;
          .labelText {
            line-height: 30px;
            font-weight: 600;
            font-size: 18px;
            margin-left: 5px;
          }
        }
        .creatorNFT {
          // align-items: center;
          // color: rgb(138, 147, 155);
          display: flex;
          flex-direction: column;
          .infoCreated{
            .labelHeader {
              line-height: 24px;
              font-size: 16px;
              color: rgb(138, 147, 155);
            }
            .labelText{
              font-weight: 600;
            }
          }
          .infoDescription{
            .MuiInputBase-root{
              padding: 10px 0;
              .MuiInputBase-input{
                // color:black;
                // font-weight: 400;
              }
            }
          }
        }
        .infoTraits{
          display: flex;
          align-items: center;
          justify-content: space-between;
          .labelTraits{
            display: flex;
            align-items: center;
            gap: 10px;
            .labelText{
              font-size: 18px;
            }
          }
        }
        .infoSmartContract {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .labelInfoSC {
            display: flex;
            align-items: center;
            gap: 10px;
            .labelText {
              font-size: 18px;
            }
          }
        }
        .infoSC{
          .info{
            display: flex;
            justify-content: space-between;
            .labelText{
              fontWeight:500
            }
          }
        }
      }
    }
    .marketNFT {
      // min-width:300px;
      min-width: 40%;
      max-width: 50%;
      @media screen and (max-width: 1100px) {
        max-width: 100%;
      }
      .nameNFT{
        margin-bottom:20px;
        @media screen and (max-width: 1100px) {
          position: absolute;
          top: 10px;

        }
        .nameNFT {
          font-size: 30px;
          font-weight: 600;
          max-width: 100%;
          margin: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
        }
        .symbolNFT{
          
        }
        .ownerNFT{
          .labelHeader {
            line-height: 24px;
            font-size: 16px;
            color: rgb(138, 147, 155);
          }
          .labelText{
            font-weight: 600;
          }
        }
      }

      .listingNFT{
        .priceItemNFT{
          .titilePrice{
            font-size: 14px;
            line-height: 20px;
            color: rgb(138, 147, 155);
          }
          .MuiCardContent-root{
            padding:10px;
            .price{
              align-items: center;
              display: flex;
              font-weight: 600;
              font-size: 30px;
            }
          }
       
        }
        .tradeNFT{
          display: flex;
          // justify-content: center;
          gap: 15px;
          margin-top:20px;
          @media screen and (max-width: 600px) {
            flex-direction: column;
          }
          .priceNFT{
            width:50%;
            @media screen and (max-width: 600px) {
              width:100%;
            }

            .buyBtn{
              width:100%;
              // height:50px;
              line-height: 24px;
              font-weight: 600;
              font-size: 16px;
              padding-top: .75rem;
              padding-bottom: .75rem;
              padding-left: 1.5rem;
              padding-right: 1.5rem;
              color: #FFFF;
              transition-duration: .2s;
              animation-duration: .2s;
              border-radius: 10px;
              text-transform : capitalize;
            }
          }
          .offerNFT{
            width:50%;
            @media screen and (max-width: 600px) {
              width:100%;
            }
            .makeOfferBtn{
              width:100%;
              line-height: 24px;
              font-weight: 600;
              font-size: 16px;
              padding-top: .75rem;
              padding-bottom: .75rem;
              padding-left: 1.5rem;
              padding-right: 1.5rem;
              color: #000;
              background-color: #DCDCDC;
              transition-duration: .2s;
              animation-duration: .2s;
              border-radius: 10px;
              text-transform : capitalize;
            }
          }
        } 
      }
    }
  }
`

export default DetailNFTStyle
