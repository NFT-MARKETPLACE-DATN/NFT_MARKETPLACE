import styled from 'styled-components';

const WalletConnectStyle = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    .marketplace-logo{
        width:180px;
        height:150px;
       // border-radius:50%;
    @media screen and (max-width: 600px) {
        width:140px;
        height:120px;
      }
    @media screen and (max-width: 400px) {
        width:120px;
        height:100px;
      }

    }
    .connect-title{
        margin-top:10px;
        line-height:36px;
        font-weight:600;
        font-size:26px;

        @media screen and (max-width: 600px) {
            font-size:20px;
            line-height:24px;
            margin-top:5px;
          }
        @media screen and (max-width: 400px) {
            font-size:16px;
            line-height:20px;
            margin-top:3px;
          }
         @media screen and (max-width: 280px) {
            line-height:16px;
            margin-top:2px;
            font-size:14px;
          }
    }
    .phantom-wallet{
        width:100%;
    }

        .listItem{
            width:100%;
            margin: 10px 0px;
            .exItem{
                width:100%;
                justify-content: space-between;
                @media screen and (max-width: 250px) {
                   padding:0px
                }
                .phantom-title{
                    display: flex;
                    align-items: center;
                    gap:20px;
                    @media screen and (max-width: 600px) {
                        gap:10px;
                     }
                    @media screen and (max-width: 250px) {
                         gap:3px;
                      }
                    .logoImage{
                        border-radius:50%;
                        @media screen and (max-width: 600px) {
                            width:40px;
                            height:40px;
                         }
                        @media screen and (max-width: 250px) {
                            width:30px;
                            height:30px;
                         }
                    }
                    .itemName{
                        font-size: 20px;
                        color: rgb(112, 112, 112);
                        text-transform: capitalize;
                        @media screen and (max-width: 600px) {
                            font-size:16px;
                        }
                        @media screen and (max-width: 280px) {
                            font-size:12px;
                            
                        }
                    }
                
                }
            }
        
       
    }
`;

export default WalletConnectStyle;
