import { createSelector } from 'reselect';
export const selectGlobalState = state => state.globalState;


const makeSelectGlobalState = () =>
  createSelector(
    selectGlobalState,
    globalState => globalState,
  );


  export default makeSelectGlobalState;
  export { selectGlobalState };