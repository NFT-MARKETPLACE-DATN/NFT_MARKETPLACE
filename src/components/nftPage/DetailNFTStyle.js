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
        margin-top: 60px;
      }
      .imageNFT {
        width: 100%;
        .cardNFT{
          .image{
            // min-height: 600px;
            width: 100%;
          }
        }
      }
      .descriptionNFT {
        margin-top: 10px;
        .infoDescriptionNFT{
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
                font-size: 18px;
                color: rgb(138, 147, 155);
              }
              .labelText{
                font-weight: 600;
                font-size: 20px;
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
          .nftTraits{
            // min-with:150px;
            .gird{
              .itemTraits{
                
                .item{
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  background: rgba(18, 18, 18, 0.04);
                  gap:5px;
                  .trait_type{
                    line-height: 18px;
                    font-size: 14px;
                  }
                  .value{
                    line-height: 20px;
                    font-weight: 600;
                    font-size: 16px;
                  }
                }
                .MuiCollapse-wrapper{
                  .MuiCollapse-wrapperInner{
                    // display: flex;
                  }
                }
              }

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
        .name {
          font-size: 35px;
          font-weight: 600;
          // max-width: 100%;
          margin: 0px;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
          .symbol{
            margin-left:8px;
            font-size: 22px;
            color: rgb(138, 147, 155);
          }
        }
       
        .ownerNFT{
          margin-top: 10px;
          //  @media screen and (max-width: 1100px) {
          //     margin:0;
          //     position: relative;
          //     top: 50px;
          //   }
          .labelHeader {
            line-height: 24px;
            font-size: 16px;
            color: rgb(138, 147, 155);
          }
          .labelText{
            font-weight: 600;
            font-size: 20px;
          }
        }
      }

      .listingNFT{
        .priceItemNFT{
          .titilePrice{
            font-size: 16px;
            line-height: 20px;
            color: rgb(138, 147, 155);
            padding:5px;
          }
          .detailPrice{
            display: flex;
            align-items: center;
            gap:10px;
            .MuiCardContent-root{
              padding:10px;
              .priceValue{
                align-items: center;
                display: flex;
                font-weight: 600;
                font-size: 35px;
              }
            }
            .changePriceBtn{
              height: 45px;
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
        }
        .tradeNFT{
          display: flex;
          gap: 15px;
          margin-top:20px;
          @media screen and (max-width: 1100px) {
            justify-content: center;
          }
          @media screen and (max-width: 600px) {
            flex-direction: column;
          }
          .priceNFT{
            width:50%;
            @media screen and (max-width: 1100px) {
              width:100%;
              display: flex;
              justify-content: center;
            }
            @media screen and (max-width: 600px) {
              width:100%;
            }
            .listBtn,
            .unListBtn,
            .buyBtn{
              width:100%;
              // min-width:200px;
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
              @media screen and (max-width: 1100px) {
                min-width:500px;
              }
              @media screen and (max-width: 800px) {
                min-width:300px;
              }
              @media screen and (max-width: 600px) {
                min-width:100%;
              }
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
