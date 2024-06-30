import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const useSearchQuery = () => queryString.parse(useLocation().search);

export const isArrayLength = (a, length = 0) => {
    if (a && Array.isArray(a) && a.length >= length) {
      return true;
    }
    return false;
  };
export const arrayObjectOfUniques = (inputArray, keyNameObj) => {
    const arrayOfUniques = [];
    inputArray.filter((item) => {
      const i = arrayOfUniques.findIndex((x) => (x[keyNameObj] === item[keyNameObj]));
      if (i <= -1) {
        arrayOfUniques.push(item);
      }
    });
    return arrayOfUniques || [];
  };
export {useSearchQuery}