export const validate = values => {
    const errors = {};
    if (!values.imageNFT) {
      errors.imageNFT = 'Image is requirement';
    };
    if(values.nameNFT && values.nameNFT.length > 10) errors.nameNFT = "The length of NFTs name must be less than 10 characters";
    if(!values.nameNFT){
      errors.nameNFT = "The name is requirement"
    };
    if(values.symbolNFT && values.symbolNFT.length > 15){
      errors.symbolNFT = "The length of NFTs symbol must be less than 15 characters"
    };
    if(!values.symbolNFT){
      errors.symbolNFT = "The symbol is requirement"
    };
    return errors;
  };
  