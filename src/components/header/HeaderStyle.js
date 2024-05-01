import styled from 'styled-components';

const HeaderStyle = styled.div`
    width: 100%;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
    position: sticky;
    z-index: 10;
    top:0;
    // border-bottom: 1px solid #ccc;
    background-color: rgb(241, 245, 250);
    .bottomHeader{
        display: flex;
        justify-content: flex-end;
        padding:10px 20px;
        background:rgb(255, 255, 255);
        .right-header{

        }
        .left-header{
            display: flex;
            .left-header-item{
                display: flex;
                width: 100%;
                gap:10px;
                justify-content: flex-end;
                @media screen and (max-width: 600px) {
                    // justify-content:unset;
                    margin-left: 10px;
                }
                @media screen and (max-width: 400px) {
                    margin-left: 5px;
                }
              .userLogin{
                display:flex;
                gap:15px;
                @media screen and (max-width: 600px) {
                  gap:5px;
                }
                @media screen and (max-width: 400px) {
                  align-items:center;
                  // gap:5px;
                }
                .userIcon{
                  .userBtn {
                    cursor: pointer;
                    border: 0;
                    padding: 0;
                    font-size: 0px;
                    // background-color: #e2e2e2;
                    border-radius: 50%;
                    border: 4px solid #f9f9f9;
                    span {
                      @media screen and (max-width: 993px) {
                        display: none;
                      }
                    }
                    img {
                      height: 30px;
                      width: 30px;
                      border-radius: 50%;
                      padding: 4px;
                      @media screen and (max-width: 400px) {
                        height: 25px;
                        width: 25px;
                        padding: 2px;
                      }
                      @media screen and (max-width: 280px) {
                        height: 20px;
                        width: 20px;
                      }
                    }
                  }
                  .userBtnActive {
                    border-color: #ccdbec;
                  }
                }
              }
                .disconnectBtn,
                .connectBtn{
                    gap:10px;
                    min-width:110px;
                    font-size: 16px;
                    text-transform: capitalize;
                    border-radius: 10px;
                    @media screen and (max-width: 600px) {
                        font-size: 13px;
                        min-width:100px;
                        gap:10px;
                      }
                    @media screen and (max-width: 400px) {
                        font-size: 12px;
                        min-width:70px;
                        height:90%;
                        padding:0px;
                        .loginIcon{
                          display:none;
                        }
                        // gap:5px;
                      }
                      @media screen and (max-width: 280px) {
                        font-size: 7px;
                        height:80%;
                        min-width:50px;
                        padding:0px;
                      }
                  }
                .connectBtn:hover{
                    background: linear-gradient(to right, rgb(205, 116, 204), rgb(255, 189, 89), rgb(112, 221, 136));
                }
                .disconnectBtn:hover{
                    background: linear-gradient(to left, rgb(205, 116, 204), rgb(255, 189, 89), rgb(112, 221, 136));

                }

                // .left-menu-mobile{
                //     @media screen and (max-width: 600px) {
                //         align-items: center;
                //         display: flex;
                //       }
                //     .menu-icon {
                //         width: 32px;
                //         height: 20px;
                //         position: relative;
                //         cursor: pointer;
                //         color: #004b9e;
                //         font-size: 12px;
                //         font-weight: bold;
                //         @media screen and (max-width: 430px) {
                //           font-size: 11px;
                //         }
                //       }
                //     .btnToggleMenu {
                //         border: 0;
                //         background: none;
                //         height:100%
                //         @media screen and (min-width: 600px) {
                //           display: none;
                //         }
                //     }
                //     .bar {
                //         width: 100%;
                //         height: 4px;
                //         background-color: #004b9e;
                //         margin-bottom: 6px;
                //         transition: transform 0.3s ease;
                //         border-radius: 20px;
                //       }
                //     .open .bar:first-child {
                //         transform: translateY(5px) rotate(45deg);
                //       }
                //     .bar:last-child {
                //         margin-bottom: 0;
                //       }
                //     .open .bar:last-child {
                //         transform: translateY(-5px) rotate(-45deg);
                //         margin-bottom: 4px;
                //       }
                   
                // }
            }
      }
     
    }


`;

export default HeaderStyle;