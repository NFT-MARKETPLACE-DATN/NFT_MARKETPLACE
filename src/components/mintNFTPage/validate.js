export const validate = values => {
    const errors = {};
    if (!values.imageNFT) {
      errors.imageNFT = 'IamgeError';
    }
    if(!values.nameNFT){
      errors.nameNFT = "No name"
    }
    if(!values.symbolNFT){
      errors.symbolNFT = " no ádsf"
    }
    return errors;
  };
  