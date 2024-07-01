export const validate = values => {
    const errors = {};
    if (!values.imageNFT) {
      errors.imageNFT = 'IamgeError';
    };
    if(values.nameNFT && values.nameNFT.length > 10) errors.nameNFT = "length > 10";
    if(!values.nameNFT){
      errors.nameNFT = "No name"
    };
    if(values.symbolNFT && values.symbolNFT.length > 15){
      errors.symbolNFT = "length > 15"
    };
    if(!values.symbolNFT){
      errors.symbolNFT = " no ádsf"
    };
    return errors;
  };
  