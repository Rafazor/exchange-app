import React from 'react';
import PropTypes from 'prop-types';
import { Autocomplete, TextField } from '@mui/material';

export default function SelectComponent(props) {
  const {
    onChange, options, label, id,
  } = props;

  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      onChange={handleChange}
      disablePortal
      id={id}
      autoHighlight
      getOptionLabel={(option) => option.label}
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
  id: PropTypes.string.isRequired,
};
