import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import * as dayjs from 'dayjs';
export const formatDateByTz = (date, formatDate) =>dayjs(date).format(formatDate);

const useSearchQuery = () => queryString.parse(useLocation().search);

export const isArrayLength = (a, length = 0) => {
    if (a && Array.isArray(a) && a.length >= length) {
      return true;
    }
    return false;
  };
export const arrayObjectOfUniques = (inputArray, keyNameObj) => {
  console.log(inputArray);
    const arrayOfUniques = [];
    inputArray.filter((item) => {
      const i = arrayOfUniques.findIndex((x) => (x[keyNameObj] === item[keyNameObj]));
      if (i <= -1) {
        arrayOfUniques.push(item);
      }
    });
    console.log(arrayOfUniques);
    return arrayOfUniques || [];
  };


export const formatString = (input)=>{
  if(input.length <= 15){
    return input;
  }
  const start = input.slice(0, 6);
  const end = input.slice(-4);
  return `${start}...${end}`;
}
export {useSearchQuery}