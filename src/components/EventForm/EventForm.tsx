import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';
import { eventSchema } from '../../validation/validationYup';
import scss from './EventForm.module.scss';
import MyTextField from '../MyTextField/MyTextField';
import MyTextareaField from '../MyTextareaField/MyTextareaField';
import DatePickerField from '../DatePickerField/DatePickerField';
import TimePickerField from '../TimePickerField/TimePickerField';
import MySelectField from '../MySelectField/MySelectField';
import { eventCategories, eventPriorites } from '../../helpers/enums';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addEvent, updateEvent } from '../../redux/events/eventsOperations';
import { selectEventById } from '../../redux/events/eventSelectors';

const EventForm = ({ id }: { id: string }) => {
  const eventData = useAppSelector(selectEventById(id));
  const dispatch = useAppDispatch();

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
            await dispatch(updateEvent({ eventId: id, newEvent: values }));
            toast.success('Success. The event updated!');
          }

          if (!eventData && values.date) {
            await dispatch(addEvent(values));
            toast.success('Success. The new event added!');
          }
        } catch (error) {
          toast.error('Sorry.Something went wrong.');
        }
      }}
    >
      {({ submitForm, isSubmitting, dirty, isValid }) => {
        return (
          <Form className={scss.formContainer}>
            <MyTextField
              label="Title"
              name="title"
              type="text"
              placeholder="Type some title..."
            />
            <MyTextareaField
              label="Description"
              name="description"
              type="text"
              placeholder="Type some description..."
              component="textarea"
              rows={5}
            />
            <DatePickerField name="date" />
            <TimePickerField name="time" />
            <MyTextField
              label="Location"
              name="location"
              type="text"
              placeholder="Type some location..."
            />
            <MySelectField
              label="Category"
              name="category"
              type="text"
              placeholder="Choose category"
            >
              {Object.values(eventCategories).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </MySelectField>
            <MyTextField
              label="Add picture"
              name="imageURL"
              type="text"
              disabled={true}
              placeholder="Feature in development..."
            />
            <MySelectField
              label="Priority"
              name="priority"
              type="text"
              placeholder="Choose priority"
            >
              {Object.values(eventPriorites).map((priority) => (
                <option key={priority} value={priority}>
                  {priority}
                </option>
              ))}
            </MySelectField>
            {isSubmitting && <span>Submitting...</span>}

            <button
              type="submit"
              className={scss.submitButton}
              disabled={isSubmitting || !isValid || !dirty}
              onClick={submitForm}
            >
              {!eventData ? 'Add event' : 'Save'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EventForm;
