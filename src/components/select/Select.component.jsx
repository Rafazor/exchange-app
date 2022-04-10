import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';

export default function SelectComponent(props) {
  const {
    onChange, options, label,
  } = props;

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      onChange={handleChange}
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}

SelectComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(Object).isRequired,
  label: PropTypes.string.isRequired,
};
