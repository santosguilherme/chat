import * as PropTypes from 'prop-types';
import React from 'react';

import { StyledTextField } from './styles/TextField';

function OutlinedTextField({
  value, onChange, label, name, required, select, children,
}) {
  return (
    <StyledTextField
      label={label}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      required={required}
      variant="outlined"
      select={select}
      fullWidth
    >
      {children}
    </StyledTextField>
  );
}

OutlinedTextField.defaultProps = {
  children: undefined,
  required: false,
  select: false,
  value: undefined,
};

OutlinedTextField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  select: PropTypes.bool,
  value: PropTypes.string,
};

export default OutlinedTextField;
