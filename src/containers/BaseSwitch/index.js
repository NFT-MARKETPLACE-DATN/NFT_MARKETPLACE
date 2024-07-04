import React from 'react';
import PropTypes from 'prop-types';

import { Switch, FormControlLabel } from '@mui/material';

import { styled } from '@mui/material/styles';
const BaseSwitch = props => {
  const { checked, onChange, label } = props;
  const SwitchComponent = styled(propsSwitch => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...propsSwitch}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 3,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(20px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#004B9E',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#004B9E',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        // color:
        //   theme.palette.mode === 'light'
        //     ? theme.palette.grey[100]
        //     : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 16,
      height: 16,
    },
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 700,
      }),
    },
  }));

  return (
    <FormControlLabel
      control={
        <SwitchComponent
          sx={{ m: 1 }}
          onChange={onChange}
          checked={checked}
          {...props}
        />
      }
      label={label}
    />
  );
};

BaseSwitch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default BaseSwitch;
