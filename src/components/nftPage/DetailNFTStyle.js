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
    .itemNFT{
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
        .descriptionNFT{
          max-width:50%;
          // gap:10px;
          // display: flex;
          // flex-direction: column;
          .imageNFT{
            width:100%;
          }
          .infoNFT{
            margin-top:10px;
          }
        }
    }
`;


export default DetailNFTStyle;