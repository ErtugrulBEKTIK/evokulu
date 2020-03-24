import * as Yup from "yup";

const validations = Yup.object().shape({
  username: Yup
    .string()
    .min(4, 'En az 4 karakter')
    .required('Gerekli'),
  password: Yup
    .string()
    .min(6, 'En az 6 karakter')
    .required('Gerekli')
});

module.exports = validations;