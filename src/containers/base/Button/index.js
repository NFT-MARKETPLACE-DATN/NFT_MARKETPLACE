import React from 'react';

import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import BaseButtonStyle from './BaseButtonStyle';

const BaseButton = props => {
  const { text, className, divClassName, type, width, height, typeButton, variant,icon,onClick } = props;
  const renderClassName = () => {
    switch (type) {
      case 'primary':
        return 'btnBox';
      case 'secondary':
        return 'btnBox btnBoxBorder';
      case 'none':
        return 'btnBox btnBoxNone';
      default:
        break;
      
    }
  };
  return (
    <BaseButtonStyle>
      <div className={`${renderClassName()} ${divClassName || ''}`}>
        <Button
          variant={variant}
          size="large"
          type={typeButton || 'submit'}
          className={className}
          sx={{ width, height, boxShadow: 'none !important' }}
          onClick={onClick}
        //   {...props}
        >
          {text} {icon? <img src={icon} className='icon'/>:""}
        </Button>
      </div>
    </BaseButtonStyle>
  );
};

BaseButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  divClassName: PropTypes.string,
  typeButton: PropTypes.string,
  variant:PropTypes.string,
  icon:PropTypes.any,
};

export default BaseButton;
