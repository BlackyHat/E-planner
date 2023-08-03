import { Formik, Form } from 'formik';
import { toast } from 'react-hot-toast';
import { eventSchema } from '../../validation/validationYup';
// import { clsx } from 'clsx';
import scss from './EventForm.module.scss';
import MyTextField from '../MyTextField/MyTextField';
import MyTextareaField from '../MyTextareaField/MyTextareaField';
import DatePickerField from '../DatePickerField/DatePickerField';
import TimePickerField from '../TimePickerField/TimePickerField';
import MySelectField from '../MySelectField/MySelectField';
import { eventCategories, eventPriorites } from '../../helpers/enums';

const type = null;
const eventId = null;
const eventData = null;

const EventForm = () => {
  const getInitData = () => {
    const initValues = {
      title: '',
      description: '',
      date: undefined,
      time: undefined,
      location: '',
      category: '',
      priority: '',
    };
    if (!type && eventData) {
      const eventValues = { ...initValues, eventData };
      return eventValues;
    }
    return initValues;
  };

  return (
    <Formik
      initialValues={getInitData()}
      validationSchema={eventSchema}
      onSubmit={async (values) => {
        console.log(values);
        try {
          if (!type && eventId) {
            // await updateEvent()
            toast.success('Success. The event updated!');
          }

          if (type && eventId) {
            // await addTask()
            toast.success('Success. The new event added!');
          }
        } catch (error) {
          toast.error('Sorry.Something went wrong.');
        }
      }}
    >
      {({ submitForm, values, isSubmitting, errors, dirty, isValid }) => {
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
            <DatePickerField name="date" initialValue={values.date} />
            <TimePickerField name="time" initialValue={values.time} />
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
              placeholder="Choose cateprioritygory"
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
              {!type ? 'Add event' : 'Save'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EventForm;
