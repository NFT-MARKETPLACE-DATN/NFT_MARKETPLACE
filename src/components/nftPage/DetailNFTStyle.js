import styled from 'styled-components';
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
    .nftItem{
        background-color: #ffff;
        display:flex;
        padding:20px;
        gap:15px;
        @media screen and (max-width: 1200px) {
          padding:10px;
        }
        @media screen and (max-width: 600px) {
          padding:5px;
        }
        .infoNFT{
          max-width:50%;
          // gap:10px;
          // display: flex;
          // flex-direction: column;
          .imageNFT{
            width:100%;
          }
          .descriptionNFT{
            margin-top:10px;
            .labelDescription{
              display: flex;
              align-items: center;
              .labelText{
                line-height: 30px;
                font-weight: 600;
                font-size: 18px; 
                margin-left:5px;          
              }
            }
            .creatorNFT{
              align-items: center;
              // color: rgb(138, 147, 155);
              display: flex;
          
              .labelHeader{
                line-height: 24px;
                font-size: 16px;
                color: rgb(138, 147, 155);
              }
            }
          }
        }
    }
`;


export default DetailNFTStyle;