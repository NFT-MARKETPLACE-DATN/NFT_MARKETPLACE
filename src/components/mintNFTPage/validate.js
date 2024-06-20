export const validate = values => {
    const errors = {};
    if (!values.imageNFT) {
      errors.imageNFT = 'IamgeError';
    };
    if(values.nameNFT && values.nameNFT.length > 30) errors.nameNFT = "length > 30";
    if(!values.nameNFT){
      errors.nameNFT = "No name"
    };
    if(values.symbolNFT && values.symbolNFT.length > 13){
      errors.symbolNFT = "length > 13"
    };
    if(!values.symbolNFT){
      errors.symbolNFT = " no ádsf"
    };
    return errors;
  };
  