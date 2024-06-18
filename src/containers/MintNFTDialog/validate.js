const validateNftTrait = values => {
    const errors = {};
    if (!values.traitType) {
      errors.traitType = 'Requirement Trait Type';
    }
    if(!values.traitValue){
      errors.traitValue = "Requirement Trait Name"
    };
    return errors;
  };

export {validateNftTrait}
  