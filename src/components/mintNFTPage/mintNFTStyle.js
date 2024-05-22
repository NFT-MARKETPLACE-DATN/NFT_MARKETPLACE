import styled from 'styled-components'
const MintNFTStyle = styled.div`
      margin-top:10px;
      //  background-color: #f0f3f5;
      padding-left: 3rem;
      padding-right: 3rem;

      @media screen and (max-width: 1200px) {
          padding-left:2rem;
          padding-right:2rem;
      }
      @media screen and (max-width: 600px) {
          padding-left:1rem;
          padding-right:1rem;
      }
      .MintNFTPage{
        background-color: #ffff;
      }

      .imageNFT {
        position: relative;
        .imageInput {
          position: absolute;
          height: 100%;
          div > input {
            height: 260px;
            padding:0px;
            // max-width: 468px;
            width:100%;
            opacity: 0;
          }
        }
      }
      .uploadImgBtn {
        width: 100%;
        height: 260px;
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
`

export default MintNFTStyle
