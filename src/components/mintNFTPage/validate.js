export const validate = values => {
    const errors = {};
    if (!values.imageNFT) {
      errors.imageNFT = 'IamgeError';
    }
    if(!values.nameNFT){
      errors.nameNFT = "No name"
    }
    if(!values.supplyNFT){
      errors.supplyNFT = " no ádsf"
    }
    return errors;
  };
  