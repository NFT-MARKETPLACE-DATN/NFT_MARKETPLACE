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
        display:flex;
        flex-direction: column;
        @media screen and (min-width: 1200px) {
          padding:0 4rem 4rem 4rem;
          // padding-right:4rem;
      }
        .header{
          .headerInfo{
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 100%;
            max-width:600px;
          }
        }
        .formCreateNFT{
          display:flex;
          width:100%;
          height:100%;
          gap:8vw;
          .imageNFT {
            position: relative;
            width:100%;
            max-width:600px;
            max-height:600px;
            .imageInput {
              position: absolute;
              height: 100%;
              div{
                height: 100%;
                input {
                  // height: 260px;
                  height: 100%;
                  padding:0px;
                  // max-width: 468px;
                  width:100%;
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
          }
          .imformationNFT{
            max-width:600px;
            width:100%;
            max-hieght:100%;
          }
          
        }
      }
     
     
`

export default MintNFTStyle
