const validate = (values) => {
    const errors = {};
    if (!values.price) {
      errors.price = 'Field cannot be empty';
    } else if (!/^\d+(\.\d+)?$/.test(values.price)) {
      errors.price = 'Only numbers are allowed';
    }
    else if(values.price == values.defaultPirce){
        errors.price = 'Price not change';
    }
    return errors;
  };

export default validate