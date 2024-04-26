import React from 'react';
// import CheckIcon from 'images/customIcons/check.svg';
// import CloseIcon from 'images/customIcons/close.svg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function BaseToast() {
  return (
    <>
      <ToastContainer
        className="baseToast"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        rtl={false}
        pauseOnFocusLoss
        draggable
        progressClassName="processBar"
        // closeButton={<img src={CloseIcon} alt="icon" />}
        // icon={<img src={CheckIcon} alt="icon" />}
        // position='top-right'
        // autoClose={5000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        // pauseOnHover
        // theme='light'
      />
    </>
  )
}

// ToastContainer.propTypes = {
//   typeIcon: PropTypes.bool,
//   //   className: PropTypes.string,
// };

export default BaseToast
