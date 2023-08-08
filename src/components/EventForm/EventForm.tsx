import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';

import { addEvent, updateEvent } from '../../redux/events/eventsOperations';
import { selectEventById } from '../../redux/events/eventSelectors';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { eventSchema } from '../../validation/validationYup';
import { eventCategories, eventPriorites } from '../../helpers/enums';

import MyTextField from '../MyTextField/MyTextField';
import MyTextareaField from '../MyTextareaField/MyTextareaField';
import DatePickerField from '../DatePickerField/DatePickerField';
import TimePickerField from '../TimePickerField/TimePickerField';
import MySelectField from '../MySelectField/MySelectField';

import scss from './EventForm.module.scss';

const EventForm = ({ id }: { id?: string }) => {
  const eventData = id ? useAppSelector(selectEventById(id)) : null;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const getInitData = () => {
    const initValues = {
      title: '',
      description: '',
      date: null,
      time: null,
      location: '',
      category: '',
      priority: eventPriorites.MEDIUM,
    };
    if (eventData) {
      const { _id, ...data } = eventData;

      const eventValues = {
        ...initValues,
        ...data,
      };
      return eventValues;
    }
    return initValues;
  };

  return (
    <Formik
      initialValues={getInitData()}
      validationSchema={eventSchema}
      onSubmit={async (values) => {
        try {
          if (eventData && id && values.date) {
            await dispatch(updateEvent({ eventId: id, newEvent: values })),
              toast.success(t('notify.Success. The event updated!'));
            navigate(-1);
          }

          if (!eventData && values.date) {
            toast.promise(dispatch(addEvent(values)), {
              loading: t('notify.Saving...'),
              success: t('notify.The new event added!'),
              error: t('notify.Could not create.'),
            });
            navigate('/');
          }
        } catch (error) {
          toast.error(t('notify.Sorry.Something went wrong.'));
          navigate('/');
        }
      }}
    >
      {({ submitForm, isSubmitting, dirty, isValid }) => {
        return (
          <Form className={scss.formContainer}>
            <MyTextField
              label={t('form.Title')}
              name="title"
              type="text"
              placeholder={t('form.titlePlaceholder')}
            />
            <MyTextareaField
              label={t('form.Description')}
              name="description"
              type="text"
              placeholder={t('form.descriptionPlaceholder')}
              component="textarea"
              rows={5}
            />
            <DatePickerField name="date" />
            <TimePickerField name="time" />
            <MyTextField
              label={t('form.Location')}
              name="location"
              type="text"
              placeholder={t('form.locationPlaceholder')}
            />
            <MySelectField
              label={t('form.Category')}
              name="category"
              placeholder={t('form.categoryPlaceholder')}
              options={Object.values(eventCategories)}
            />

            <MyTextField
              label={t('form.Add picture')}
              name="imageURL"
              type="text"
              disabled={true}
              placeholder={t('form.imagePlaceholder')}
            />

            <MySelectField
              label={t('form.Priority')}
              name="priority"
              placeholder={t('form.priorityPlaceholder')}
              options={Object.values(eventPriorites)}
            />
            <button
              type="submit"
              className={scss.submitButton}
              disabled={isSubmitting || !isValid || !dirty}
              onClick={submitForm}
              aria-label={!eventData ? t('form.Add event') : t('form.Save')}
            >
              {!eventData ? t('form.Add event') : t('form.Save')}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EventForm;
