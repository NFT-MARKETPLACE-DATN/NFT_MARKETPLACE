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
          height: 0px;
          padding-bottom: 25%;
          position: relative;
          background-color: rgba(229, 232, 235, 0.314);
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
        
      }
    }
  }
`

export default AccountPageStyle
