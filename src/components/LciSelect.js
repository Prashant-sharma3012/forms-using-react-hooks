import React from 'react';
import { TextField, FormHelperText } from '@material-ui/core';

export const LciSelect = (props) => {
  return (
    <>
      <TextField
        label={props.label}
        value={props.value}
        onChange={props.handleChange(props.propName)}
        error={props.hasError}
        multiline
        margin="normal"
        variant="outlined"
      />
      <FormHelperText>{props.errorMessage}</FormHelperText>
    </>
  );
}
