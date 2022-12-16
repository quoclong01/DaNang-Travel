import * as yup from 'yup';

export const ProfileSchema = yup.object().shape({
  username: yup
    .string('')
    .required('name_is_required')
    .min(6, 'name_must_least_6_char')
    .max(30, 'name_must_less_30_char'),
  phoneNumber: yup
    .string('')
    .required('phone_is_required')
    .matches(/^[0-9]*$/, 'phone_must_be_number')
    .min(9, 'phone_must_least_9_char')
    .max(30, 'phone_must_less_30_char'),
  birthdate: yup.string('').required('birthday_is_required'),
  address: yup
    .string('')
    .required('address_is_required')
    .min(10, 'address_must_least_10_char')
    .max(100, 'address_must_less_100_char'),
  gender: yup.string('').required('gender_is_required'),
});
