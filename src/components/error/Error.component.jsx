import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorComponent({ error }) {
  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={error} autoHideDuration={3000}>
      <Alert severity="error" sx={{ width: '100%' }}>
        Error, please try again!
      </Alert>
    </Snackbar>
  );
}

ErrorComponent.propTypes = {
  error: PropTypes.bool,
};

ErrorComponent.defaultProps = {
  error: false,
};
