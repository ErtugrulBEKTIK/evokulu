import * as Yup from "yup";

const validations = Yup.object().shape({
  username: Yup
    .string()
    .required('Gerekli'),
  password: Yup
    .string()
    .required('Gerekli')
});

module.exports = validations;