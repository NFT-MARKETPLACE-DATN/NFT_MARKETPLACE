import styled from 'styled-components';

const WalletConnectStyle = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
    .marketplace-logo{
        width:120px;
        height:120px;
       // border-radius:50%;
    }
    .connect-title{
        margin-top:10px
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

                .phantom-title{
                    display: flex;
                    align-items: center;
                    gap:10px;
                    .logoImage{
                        border-radius:50%;
                    }
                    .itemName{
                        font-size: 16px;
                        color: rgb(112, 112, 112);
                        text-transform:capitalize;
                    }
                
                }
            }
        
       
    }
`;

export default WalletConnectStyle;
