import React from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const CustomButton = ({ loading, children, ...props}) => {
  return (
    <Button {...props}>
      {loading ? <CircularProgress size={20}/> : children}
    </Button>
  )
}

export default CustomButton;
