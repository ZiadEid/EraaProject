import * as yup from 'yup';

// min 5 characters, 1 upper letter, 1 lower letter, 1 numeric digit
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;



export const loginSchema = yup.object().shape({
  email: yup
  .string()
  .email()
  .required(),
password: yup
  .string()
  .min(5).required()
  .matches(passwordRegex, {message: "you must have uppercase and spesical charachter in your password"})
  .required(),
})