import styled from 'styled-components'

const AccountPageStyle = styled.div`
  margin-top: 10px;
  padding-left: 3rem;
  padding-right: 3rem;
  // @media screen and (min-width: 1600px) {
  //     padding-left:3rem;
  //     padding-right:4rem;
  // }
  @media screen and (max-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 600px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .account {
    background-color: #ffff;
    // padding:0px 10px;
    margin: 0 10px;

    .accountInfo {
      position: relative;
      .account-background {
        position: relative;
        max-height: 320px;
        overflow: hidden;
        .backgroundInfo {
          height: 100%;
          padding-bottom: 25%;
          position: relative;
          background-color: rgba(229, 232, 235, 0.314);
          .imageInput {
            position: absolute;
            max-height: 320px;
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
                cursor: pointer;
              }
            }
          }
          .imageInput:hover + .uploadImgBtn{
            justify-content: center;
            display: flex;
          }
          .uploadImgBtn {
            display:none;
            // width: 100%;
            // height: 260px;
            // height: 100%;
            height:30px;
            width:30px;
            background-color: #f1f5fa;
            border: none;
            // padding: 60px;
            border-radius: 6px;
            // display:flex;
            left: 50%;
            top: 125px;
            position: absolute;
            @media screen and (max-width: 900px) {
              top: 100px;
            }
            @media screen and (max-width: 650px) {
              top: 70px;
            }
            @media screen and (max-width: 500px) {
              top: 55px;
            }
            // .IconUploadBackGround{
            //   height:30px;
            //   width:30px;
            // }
          }
          .imageHover{
            width: 100%;
            // height:100%;
            // max-height: 475px;
            img {
              width: 100%;
              // max-height: 320px;
              max-height: 600px;
            }
          }
          // .imageHover:hover +.hoverNFT{
          //   display:block;
          // }
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
      }
      .account-logo {
        // width: 100%;
        height: 40px;
        @media screen and (max-width: 1000px) {
          
        }
        .logo {
          height: 120px;
          width: 120px;
          border-radius: 50%;
          padding: 4px;
          // position: absolute;
          // bottom: 10px;
          position: relative;
          top: -100px;
          left:-10px;
          @media screen and (max-width: 1000px) {
            height: 90px;
            width: 90px;
            // bottom: 30px;
            top: -75px;
          }
          @media screen and (max-width: 600px) {
            height: 60px;
            width: 60px;
            top: -45px;
          }

        }
      }
      .account-name{
        line-height: 36px;
        font-weight: 600;
        font-size: 32px;
        margin-left: 15px;
      }
    }
    // .mainAccountPage{
      .accountTab{
        margin-top:15px;
        .MuiTabs-root{
          .MuiTabs-scroller{
            .MuiTabs-flexContainer{
              button{
                text-transform: capitalize;
              }
            }
          }
        }
      }
      .accountPageItem{
        
      }
      // }
    
  }
`

export default AccountPageStyle
