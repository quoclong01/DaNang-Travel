import * as yup from 'yup';

export const ChangePasswordSchema = yup.object().shape({
  password: yup
    .string('')
    .required('new_pass_is_required')
    .min(9, 'new_pass_least_9_char')
    .max(30, 'new_pass_less_30_char'),
  confirm_password: yup
    .string('')
    .required('enter_new_pass_is_required')
    .oneOf([yup.ref('password')], 'pass_not_match'),
});
