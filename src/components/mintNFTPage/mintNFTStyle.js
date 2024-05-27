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
    @media screen and (min-width: 1200px) {
      padding: 0 4rem 4rem 4rem;
      // padding-right:4rem;
    }
    .comon-style {
      display: flex;
      justify-content: center;
      gap: 8vw;
    }
    .header {
      .headerInfo {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        max-width: 600px;
      }
      @media screen and (max-width: 650px) {
        .headerMobi {
          display: none;
        }
      }
    }
    .formCreateNFT {
      width: 100%;
      height: 100%;
      padding: 15px 0 5px 0;
      @media screen and (max-width: 650px) {
        flex-direction: column;
        align-items: center;
        padding: 15px 0 15px 0;
      }
      .imageNFT:hover{
        background-color: #e0e0e0;
        .hoverNFT{
          display:block;
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
          max-height: 500px;
        }
        @media screen and (max-width: 650px) {
          max-width: 380px;
          max-height: 380px;
        }
        @media screen and (max-width: 450px) {
          max-width: 270px;
          max-height: 270px;
        }
        @media screen and (max-width: 320px) {
          max-width: 200px;
          max-height: 200px;
        }
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
            font-size: 14px;
            color: #707070;
            margin-top: 40px;
          }
        }
        .imgInfoError {
          background-color: #ffe8e8;
        }
        .imageHover{
          width: 100%;
          // height:100%;
          img{
            width: 100%;
            // height:100%;
          }
        }
        .hoverNFT{
          display:none;
        }
        .imgExist{
          top:0;
        }
        .deleteImgIcon{
          position:absolute;
          top:3px;
          right:3px;
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
        .label{
          margin-bottom: 5px;
        }
      }
    }
  }
`

export default MintNFTStyle
