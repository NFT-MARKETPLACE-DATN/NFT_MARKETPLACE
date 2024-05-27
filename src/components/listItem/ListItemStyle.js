import styled from 'styled-components';
const ListItemStyle = styled.div`
    width: 100%;
    // margin : 10px;
    .gird {
        margin: 0;
        width: 100%;
        .css-1v2c24a-MuiGrid-root {
            margin: 0;
        }
        .itemNFT{
            // padding:12px;
            padding-left:0px;
            // @media screen and (max-width: 1600px) {
            //     padding-left: 0px ;
            //   }
            .bttNFT{
                width:100%;
                padding:0px;
                .infoNFT{
                    // max-width: 100%;
                    height: 100%;
                    width: 380px;
                    border-radius:10%;
                    @media screen and (max-width: 1600px) {
                        width: 250px;
                    }
                    @media screen and (max-width: 1200px) {
                        width: 230px;
                    }
                    @media screen and (max-width: 1070px) {
                        width: 210px;
                    }
                    @media screen and (max-width: 970px) {
                        width: 190px;
                    }
                    @media screen and (max-width: 900px) {
                        width: 350px;
                    }
                    @media screen and (max-width: 780px) {
                        width: 270px;
                    }
                    @media screen and (max-width: 650px) {
                        width: 220px;
                    }
                    @media screen and (max-width: 500px) {
                        width: 190px;
                    }
                    @media screen and (max-width: 410px) {
                        width: 160px;
                    }
                    @media screen and (max-width: 380px) {
                        width: 130px;
                    }
                    @media screen and (max-width: 300px) {
                        width: 110px;
                    }
                    .imageNFT{
                        // min-width: 100%;
                        // min-height: 100%;
                        // max-height: 100%;
                        // height:100%;
                        width:100%;
                        
                    }
                    .nameNFT{
                       
                    }
                }
            }
            
        }
      
      
    }
`;

export default ListItemStyle;