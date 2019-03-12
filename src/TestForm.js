import { MyInput } from './components/MyInput';
import React, { useState, useEffect } from 'react';
import { getValidationSchema, validateForm } from './utils/rules';
import { keys } from 'lodash';

export const TestForm = (props) => {
  const handleChange = name => event => setValues({ ...formValues, [name]: event.target.value });

  const [formValues, setValues] = useState({
    name: ''
  });

  const schema = getValidationSchema(keys(formValues))

  const [errors, checkValidation] = useState(null);

  const getError = (key) => errors && errors[key] ? errors[key] : null;

  useEffect(() => checkValidation(validateForm(formValues, schema)), [formValues])

  return (
    <form>
      <MyInput
        label="Name"
        value={formValues.name}
        handleChange={handleChange('name')}
        error={getError('name')}
      />
    </form>
  );
}