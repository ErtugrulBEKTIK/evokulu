import * as Yup from "yup";

const validations = Yup.object().shape({
  username: Yup
    .string()
    .required('Gerekli'),
  password: Yup
    .string()
    .min(6, 'Çok kısa')
    .required('Gerekli')
});

module.exports = validations;