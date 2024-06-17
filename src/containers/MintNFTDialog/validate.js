const validateNftTrait = values => {
    const errors = {};
    if (!values.traitType) {
      errors.traitType = 'Requirement Trait Type';
    }
    if(!values.traitName){
      errors.traitName = "Requirement Trait Name"
    };
    return errors;
  };

export {validateNftTrait}
  