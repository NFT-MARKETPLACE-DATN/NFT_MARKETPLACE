import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingStyle = styled.div`
  // .loadingWrapper {
  //   position: fixed;
  //   z-index: 999;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: rgb(0, 0, 0, 0.25);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex-wrap: nowrap;
  //   &.forMobile {
  //     justify-content: flex-start;
  //     align-items: flex-start;
  //     .loadingIcon {
  //       width: 30px;
  //       height: 30px;
  //       margin: 10px;
  //       border-width: 2px;
  //     }
  //   }
  // }
  // .loadingIcon {
  //   width: 60px;
  //   height: 60px;
  //   border-radius: 50%;
  //   border: 6px solid #004b9e;
  //   border-color: #004b9e transparent #004b9e transparent;
  //   animation: ${rotate} 2s linear infinite;
  // }

  .loading_container {
    position: fixed;
    z-index: 9999999999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    &.forMobile {
      justify-content: flex-start;
      align-items: flex-start;
      .loadingIcon {
        width: 30px;
        height: 30px;
        margin: 10px;
        border-width: 2px;
      }
    }
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .breeding-rhombus-spinner {
    height: 65px;
    width: 65px;
    position: relative;
    transform: rotate(45deg);
  }

  .breeding-rhombus-spinner,
  .breeding-rhombus-spinner * {
    box-sizing: border-box;
  }

  .breeding-rhombus-spinner .rhombus {
    height: calc(65px / 7.5);
    width: calc(65px / 7.5);
    animation-duration: 2000ms;
    top: calc(65px / 2.3077);
    left: calc(65px / 2.3077);
    background-color: #004b9e;
    position: absolute;
    animation-iteration-count: infinite;
  }

  .breeding-rhombus-spinner .rhombus:nth-child(2n + 0) {
    margin-right: 0;
  }

  .breeding-rhombus-spinner .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(100ms * 1);
  }

  .breeding-rhombus-spinner .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(100ms * 2);
  }

  .breeding-rhombus-spinner .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(100ms * 3);
  }

  .breeding-rhombus-spinner .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(100ms * 4);
  }

  .breeding-rhombus-spinner .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(100ms * 5);
  }

  .breeding-rhombus-spinner .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(100ms * 6);
  }

  .breeding-rhombus-spinner .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(100ms * 7);
  }

  .breeding-rhombus-spinner .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(100ms * 8);
  }

  .breeding-rhombus-spinner .rhombus.big {
    height: calc(65px / 3);
    width: calc(65px / 3);
    animation-duration: 2000ms;
    top: calc(65px / 3);
    left: calc(65px / 3);
    background-color: #004b9e;
    animation: breeding-rhombus-spinner-animation-child-big 2s infinite;
    animation-delay: 0.5s;
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }

  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
`;

export default LoadingStyle;
