/**
 *
 * Loading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import LoadingStyle from './loadingStyle';

function Loading({ loading }) {
  return (
    <>
      {loading && (
        <LoadingStyle>
          {/* <div className={classNames(props.className, 'loadingWrapper')}>
            <div className="loadingIcon" />
          </div> */}
          <div className="loading_container">
            <div className="breeding-rhombus-spinner">
              <div className="rhombus child-1" />
              <div className="rhombus child-2" />
              <div className="rhombus child-3" />
              <div className="rhombus child-4" />
              <div className="rhombus child-5" />
              <div className="rhombus child-6" />
              <div className="rhombus child-7" />
              <div className="rhombus child-8" />
              <div className="rhombus big" />
            </div>
          </div>
        </LoadingStyle>
      )}
    </>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
};

export default Loading;
