import Joi from 'joi'

export const rules = {
  name: Joi.string().max(10).min(3)
}


const buildError = (errors) => {
  if (!errors.error) return null;

  let errorObj = {};

  errors.error.details.map(error => {
    errorObj[error.context.label] = error.message
  });

  return errorObj;
}

export const getValidationSchema = (keys) => {
  let validationObj = {}
  keys.map(key => {
    if (rules[key]) {
      validationObj[key] = rules[key]
    }
  })

  return Joi.object().keys(validationObj)
}

export const validateForm = (form, schema) => buildError(Joi.validate(form, schema));
