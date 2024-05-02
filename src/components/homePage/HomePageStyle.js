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
        .mySwiper{
            height:100%;
            .slide1{
                // height:30%;
                width: 90%
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
        }
        .list-item{
            width: 100%
            padding-left:5px;
            padding-right:5px;
        }
    }

`;

export default HomePageStye;