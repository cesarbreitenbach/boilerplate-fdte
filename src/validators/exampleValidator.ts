import * as Yup from 'yup';

export const exampleValidator = Yup.object().shape({
   name: Yup.string()
             .required('Nome é obrigatorio'),
   email: Yup.string()
             .required('Email é obrigatorio'),
   whatsapp: Yup.string()
             .required('Whatsapp é obrigatorio'),
   cep: Yup.string().required('CEP é obrigatorio'),
   street: Yup.string(),
   number: Yup.string()
 })