import React from 'react';
import { TextField, FormHelperText } from '@material-ui/core';

export const LciInput = (props) => {
  console.log(props.error);
  return (
    <>
      <TextField
        label={props.label}
        value={props.value}
        onChange={props.handleChange}
        error={props.error ? true : false}
        margin="normal"
        variant="outlined"
      />
      {props.error && <FormHelperText>{props.error}</FormHelperText>}
    </>
  );
}
