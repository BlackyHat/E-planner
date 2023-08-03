import * as Yup from 'yup';
import { eventPriorites } from '../helpers/enums';

export const eventSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Type something title')
    .trim(),
  description: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Type something description')
    .trim(),
  location: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Type something location')
    .trim(),
  category: Yup.string()
    .min(3, 'Too Short!')
    .max(250, 'Too Long!')
    .required('Type something category')
    .trim(),
  date: Yup.date().required('Select date'),
  time: Yup.date().required('Select time'),
  priority: Yup.mixed().oneOf(
    Object.values(eventPriorites),
    'Invalid priority!'
  ),
});
