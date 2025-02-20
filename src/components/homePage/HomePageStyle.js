import styled from 'styled-components';

const HomePageStye = styled.div`
    margin-top:10px;
    //  background-color: #f0f3f5;
    padding-left: 3rem;
    padding-right: 3rem;
    // @media screen and (min-width: 1600px) {
    //     padding-left:3rem;
    //     padding-right:4rem;
    // }
    @media screen and (max-width: 1200px) {
        padding-left:2rem;
        padding-right:2rem;
    }
    @media screen and (max-width: 600px) {
        padding-left:1rem;
        padding-right:1rem;
    }
    .silde{
        margin-top:10px;
        height:400px;
        @media screen and (max-width: 1600px) {
            height:350px;
        }
        @media screen and (max-width: 1100px) {
            height:300px;
        }
        @media screen and (max-width: 1000px) {
            height:350px;
        }
        // @media screen and (max-width: 900px) {
        //     height:260px;
        // }
        // @media screen and (max-width: 750px) {
        //     height:230px;
        // }
        @media screen and (max-width: 750px) {
            height:280px;
        }
        @media screen and (max-width: 600px) {
            height:350px;
        }
        @media screen and (max-width: 480px) {
            height:280px;
        }
        @media screen and (max-width: 400px) {
            height:240px;
        }
        .mySwiper{
            height:100%;
            .slide{
                display: flex;
                justify-content: center;
                .slide1{
                    height:100%;
                    width: 95%;
                    @media screen and (max-width: 1000px) {
                        width: 100%;
                    }
                    @media screen and (max-width: 600px) {
                        width: 95%;
                    }
                }
            }

           
        }
    }
    .main-homepage{
        margin:20px 0px;
        background-color:#ffff;
        // padding-left:10px;
        // padding-right:20px;
        .tab-homepage{
            margin-bottom: 15px;
            display:flex;
            justify-content: space-between;
            padding: 10px 10px 0px 10px;
            .tabSelect{
                @media screen and (max-width: 850px) {
                    padding: 8px 10px;
                    font-size: 14px;
                }
               @media screen and (max-width: 600px) {
                    min-width:80px
                }
            }
            .search-homepage{
                .searchInput{
                    div {
                        border-radius: 20px;
                        background-color: #fafafa;
                        height: 40px;
                    }
                }
                @media screen and (max-width: 850px) {
                    width: 180px;
                }
                @media screen and (max-width: 650px) {
                    width: 130px;
                }
            }
            .arrow_price{
                .typeValue {
                    color: #000;
                    font-size: 14px;
                    font-weight: normal;
                    border-radius: 10px;
                    min-width: 150px;
                    text-align: center;
                    @media screen and (max-width: 850px) {
                        min-width: 100px;
                        font-size: 12px;
                    }
                }
                
            }
        }
       
        .list-item{
            width: 100%
            padding-left:5px;
            padding-right:5px;
            .pagination{
            display: flex;
            justify-content: center;
            margin-top: 20px;
            }
        }
    }

`;

export default HomePageStye;