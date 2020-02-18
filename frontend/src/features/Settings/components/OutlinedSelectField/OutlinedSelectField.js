import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

import OutlinedTextField from 'features/Settings/components/OutlinedTextField/OutlinedTextField';

function OutlinedSelectField({
  name, label, value, onChange, options,
}) {
  return (
    <OutlinedTextField
      id={name}
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      select
    >
      {options.map(option => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </OutlinedTextField>
  );
}

OutlinedSelectField.defaultProps = {
  value: undefined,
};

OutlinedSelectField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default OutlinedSelectField;
