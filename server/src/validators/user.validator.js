import Joi from '@hapi/joi';

export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).required(),
    dob: Joi.date().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.number()
      .default(/^\d{10}$/)
      .required()
  });

  const { error, value } = schema.validate(req.body);

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
