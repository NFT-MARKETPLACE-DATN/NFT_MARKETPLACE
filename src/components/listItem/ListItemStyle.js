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
        // .bttNFT:hover +.buyNFT {
        //     display:block;
        // }
        .itemNFT:hover{
            .buyNFT {
                display:block;
            }
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
                    // height:380px;
                    border-radius:10%;
                    @media screen and (max-width: 1600px) {
                        width: 300px;
                    }
                    @media screen and (max-width: 1400px) {
                        width: 265px;
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
                        height:280px;
                        // width:200px;
                        // padding:2px;
                        @media screen and (max-width: 1600px) {
                            height:250px;
                        }
                        @media screen and (max-width: 1200px) {
                            height:220px;
                        }
                        @media screen and (max-width: 900px) {
                            height:280px;
                        }
                        @media screen and (max-width: 750px) {
                            height:260px;
                        }
                        @media screen and (max-width: 650px) {
                            height:230px;
                        }
                        @media screen and (max-width: 500px) {
                            height:200px;
                        }
                        @media screen and (max-width: 400px) {
                            height:180px;
                        }
                        @media screen and (max-width: 370px) {
                            height:160px;
                        }
                        .img{
                            height:100%;
                            width:100%;  
                            border-radius:10%;
                        }
                        
                    }
                    .nameNFT{
                       
                    }
                    .buyNFT{
                        // display:none;
                        // display: flex;
                        // justify-content: center;
                        padding-bottom: 10px;
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        width: 100%;
                        .bttBuy{
                            display: flex;
                            justify-content: center;
                            // height:40px;
                            width:90%;
                            // background-color:#1976d2;
                            border-radius:10%;
                            color: #ffffff;
                            font-size: 16px;
                            border-radius: 30px;
                            padding: 7px 0px;
                            background: #004b9e;
                            border: 5px solid #ccdbec;
                            text-transform: none;
                            box-shadow: none !important;
                           img{
                            margin-right:10px
                           }
                        }
                        .bttBuy:hover{
                            border: 5px solid #004b9e;
                        }
                    }
                }
            }
            
        }
      
      
    }
`;

export default ListItemStyle;