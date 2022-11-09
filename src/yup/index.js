import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('required').matches(/^[a-zA-Z]+$/gi, 'Only latin letters'),
  company: yup.string().required('required'),
  email: yup.string().required('required').matches(/^[a-z]+@[a-z]+\.[a-z]+$/gi, 'Please enter a valid email address'),
  message: yup.string().required('required'),
  checkbox: yup.bool().oneOf([true], 'Field must be checked'),
});

export default schema;