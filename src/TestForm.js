import { LciInput } from './components/LciInput';
import React, { useState, useEffect } from 'react';
import { getValidationSchema } from './utils/rules';
import { keys } from 'lodash';
import Joi from 'joi';

export const TestForm = (props) => {
  const handleChange = name => event => setValues({ ...formValues, [name]: event.target.value });

  const [formValues, setValues] = useState({
    name: ''
  });

  const schema = getValidationSchema(keys(formValues))

  const [errors, checkValidation] = useState(null);

  const getError = (key) => {
    return errors && errors[key] ? errors[key] : null
  }

  const buildError = (errors) => {
    if (!errors.error) return null;

    let errorObj = {};

    errors.error.details.map(error => {
      errorObj[error.context.label] = error.message
    });

    return errorObj;
  }

  useEffect(() => checkValidation(buildError(Joi.validate(formValues, schema))), [formValues])

  return (
    <form>
      <LciInput
        label="Name"
        value={formValues.name}
        handleChange={handleChange('name')}
        error={getError('name')}
      />
    </form>
  );
}