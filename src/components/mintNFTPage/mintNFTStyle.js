import styled from 'styled-components'
const MintNFTStyle = styled.div`
  margin-top: 10px;
  //  background-color: #f0f3f5;
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
  .MintNFTPage {
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 2rem 5rem 5rem 5rem;
    // @media screen and (min-width: 650px) {
    //   padding: 0 4rem 4rem 4rem;
    // };
    // @media screen and (max-width: 649px) {
    //   padding: 0 4rem 4rem 4rem;
    // }; 

    // .mainNFTPage {
  
      
      .comon-style {
        display: flex;
        justify-content: center;
        gap: 8vw;
        @media screen and (max-width: 1200px) {
          gap: 6vw;
        };
        @media screen and (max-width: 950px) {
          gap: 4vw;
        };
  
      }
      .header {
        .headerInfo {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
          max-width: 600px;
        }
        @media screen and (max-width: 800px) {
          .headerMobi {
            display: none;
          }
        }
        .title {
          line-height: 36px;
          font-weight: 600;
          font-size: 32px;
        }
        .informationMinNFT {
          line-height: 24px;
          font-size: 16px;
        }
      }
      .formCreateNFT {
        width: 100%;
        height: 100%;
        padding: 15px 0 5px 0;
        @media screen and (max-width: 800px) {
          flex-direction: column;
          align-items: center;
          padding: 15px 0 15px 0;
        }
        .imageNFT:hover {
          background-color: #e0e0e0;
          .hoverNFT {
            display: block;
          }
        }
        .imageNFT {
          position: relative;
          width: 100%;
          max-width: 600px;
          max-height: 600px;
          overflow: hidden;
          @media screen and (max-width: 1200px) {
            max-width: 500px;
            max-height: 400px;
          }
          @media screen and (max-width: 950px) {
            max-width: 430px;
            max-height: 380px;
          }
          @media screen and (max-width: 800px) {
            max-width: 100%;
            max-height: 500px;
          }
          // @media screen and (max-width: 650px) {
          //   max-width: 380px;
          //   max-height: 380px;
          // }
          // @media screen and (max-width: 450px) {
          //   max-width: 270px;
          //   max-height: 270px;
          // }
          // @media screen and (max-width: 320px) {
          //   max-width: 200px;
          //   max-height: 200px;
          // }
          .imageInput {
            position: absolute;
            height: 100%;
            div {
              height: 100%;
              input {
                // height: 260px;
                height: 100%;
                padding: 0px;
                // max-width: 468px;
                width: 100%;
                opacity: 0;
              }
            }
            // div >
          }
          .uploadImgBtn {
            width: 100%;
            // height: 260px;
            height: 100%;
            background-color: #f1f5fa;
            border: none;
            padding: 60px;
            border-radius: 6px;
            .uploadImgText {
              font-size: 16px;
              color: #707070;
              margin-top: 20px;
              line-height: 24px;
            }
            .imageSize {
              display: flex;
              flex-direction: column;
            }
          }
          .imgInfoError {
            background-color: #ffe8e8;
          }
          .imageHover {
            width: 100%;
            height:100%;
            img {
              width: 100%;
              height:100%;
            }
          }
          .hoverNFT {
            display: none;
          }
          .imgExist {
            top: 0;
          }
          .deleteImgIcon {
            position: absolute;
            top: 3px;
            right: 3px;
            border: 0px;
            background-color: #e0e0e0;
          }
        }
        .imformationNFT {
          max-width: 600px;
          width: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          @media screen and (max-width: 650px) {
            max-width: 400px;
            max-height: 400px;
          }
          .label {
            margin-bottom: 5px;
            line-height: 24px;
            font-weight: 600;
            font-size: 16px;
          }
          .descriptionTraits{
            line-height: 20px;
            font-size: 14px;
            padding-bottom:1.25rem;
          }
          .addTrait{
            padding:0px;
            display: flex;
            justify-content: flex-start;
            color: black;
            width: 100%;
            gap:5px;
            .labelTrait{
              line-height: 24px;
              font-weight: 600;
              font-size: 16px;
              text-transform:capitalize;
            }
            
          }
          .traitNFT{
            .trait{
              .vertical-line{
                width: 2px;
                height: 100%;
                background-color: black;
                border: none;
                transform: rotate(90deg);
              }
            }
          }
        }
        .bttCreate {
          // transform: translateY(0%) translateZ(0px);
          position: absolute;
          bottom: 10px;
          width: 300px;
          @media screen and (max-width: 500px) {
            width: 200px;
          }
          @media screen and (max-width: 350px) {
            width: 100px;
          }
        }
      }
    // }
  }
`

export default MintNFTStyle
