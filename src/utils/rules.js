import Joi from 'joi'

export const rules = {
  name: Joi.string().max(10).min(3)
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