import styled from 'styled-components';
const UserTabelStyle =  styled.div`
   margin-top: 20px;
   padding :0 2px;
  // .tableTransaction {
    // .MuiBox-root{
    //     display:none;
    // }
    .MuiTableCell-root {
      border: none !important;
    }
    ::-webkit-scrollbar {
      right: 5px;
      width: 15px;
      height: 15px;
    }

    .typeTransactionCell {
      padding: 5px 0 2px;
      width: 80px;
      text-align: center;
      border-radius: 30px;
    }
    .buy {
      background-color: #edf7e7;
      color: #4baf15;
    }
    .sell {
      background-color: #fbe9e9;
      color: #d82c2c;
    }
    .col2 {
      font-size: 14px;
      font-weight: 500;
      color: #707070;
    }
    .nftImgae {
      .image{
        width: 120px;
        height: 120px;
      }

    }
    .currentValue {
      font-weight: 500;
      .jpCurrencyUnit {
        font-size: 16px;
        color: #000;
        // color: #707070;
      }
    }
    .prevValue {
      font-size: 12px;
      color: #bebec3;
      margin-top: 4px;
    }
    .transactionDateTime {
      font-size: 15px;
      font-weight: 500;
    }
    .rangeDateContainer {
      background-color: #f0f4f9;
      border: 2px solid #f0f4f9;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: 6px;
      padding: 10px 16px;
      height: fit-content;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .rangeDateContainerFocus {
      border: 2px solid #004b9e;
    }
    .inputRangeDate {
      input {
        padding: 0 0 0 8px;
        color: #707070;
        font-size: 14px;
      }
      fieldset {
        border: none !important;
      }
    }

    .typeContainer {
      display: flex;
      align-items: center;
      @media screen and (max-width: 1200px) {
        justify-content: center;
      }
      @media screen and (max-width: 600px) {
        justify-content: end;
      }
      fieldset {
        // border-color: '#eff4f9' !important;
        border: none !important;
      }
      .typeLabel {
        color: #707070;
        font-size: 12px;
        min-width: 24px;
      }
      .typeValue {
        color: #000;
        font-size: 14px;
        font-weight: normal;
      }
      .typeText {
        font-size: 12px;
      }
    }
    .coinsContainer {
      // min-width: 180px;
      background-color: #eff4f9;
      border: 2px solid #f0f4f9;
      border-radius: 6px;
      height: fit-content;
      @media screen and (max-width: 600px) {
        width: 100%;
      }
      fieldset {
        border: none !important;
      }
      input {
        padding: 0;
      }
      .Mui-focused {
        background-color: #fff;
        fieldset {
          border: 2px solid #004b9e !important;
        }
      }
    }
    @media screen and (max-width: 600px) {
      .MuiToolbar-root > div {
        &:last-child {
          display: block !important;
          padding: 0 !important;
        }
      }
    }
    .groupFilter {
      column-gap: 32px;
      // flex-wrap: unset;
      @media screen and (max-width: 1200px) {
        column-gap: 0px;
      }
    }
    .downloadBtn {
      margin: auto;
      display: flex;
      justify-content: end;
      button {
        background-color: #fff;
        border: none;
        color: #bebec3;
        font-size: 14px;
        column-gap: 8px;
      }
      @media screen and (max-width: 600px) {
        display: flex;
        justify-content: end;
        margin-top: -16px;
    }
    }
    .label {
      font-size: 12px;
      margin-right: 4px;
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }
    }
  }
  .onOffText {
    font-size: 12px;
    margin-right: 24px;
  }
  .onOffSwitch {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .dialogFilter {
    padding: 10px;
    border-radius: 6px;
    height: 235px;
    width: 190px;
    position: absolute;
    right: 21%;
    top: 220px;
    z-index: 10;
    background-color: #fff;
    box-shadow: 5px 8px 17px 6px #ededed;
    @media screen and (max-width: 600px) {
      right: 12%;
      top: 1150px;
    }
  // }
  .dialogFilterContent {
    height: 225px;
    width: 160px;
    overflow-y: auto;
    overflow-x: hidden;
    font-size: 12px;
    line-height: 16px;
  }
  .actionItem {
    margin-right: 40px;
    ${'' /* left: -5px; */}
  }
  .tooltip {
    position: absolute;
    background-color: white;
    width: 9.5rem;
    font-size: 12px;
    right: 20px;
    border: 4px;
    box-shadow: 5px 4px 10px #dcdbd6;
    padding: 5px 10px 5px 10px;
  }
  .tooltip:hover {
    cursor: pointer !important;
  }
  .css-zandll {
    padding: 0 !important;
  }
  ${'' /* .MuiTableRow-root:hover {
    background-color: red !important;
    box-shadow: 0px 12px 24px #0000000f !important;
  } */}
`
export default UserTabelStyle;