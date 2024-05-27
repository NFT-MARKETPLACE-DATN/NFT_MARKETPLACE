import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const useSearchQuery = () => queryString.parse(useLocation().search);


export {useSearchQuery}