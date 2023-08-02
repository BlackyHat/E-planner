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
import { eventCategories } from '../../helpers/enums';

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
    console.log('initForm');
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
              {/* <option value={eventCategories.ART}>{eventCategories.ART}</option> */}
              {/* <option value={eventCategories.BUSINESS}>
                {eventCategories.BUSINESS}
              </option>
              <option value={eventCategories.CONFERENCE}>
                {eventCategories.CONFERENCE}
              </option> */}
              {/*<option value={eventCategories.MUSIC}>
                {eventCategories.MUSIC}
              </option>
              <option value={eventCategories.PARTY}>
                {eventCategories.PARTY}
              </option>
              <option value={eventCategories}>{eventCategories}</option>
              <option value={eventCategories}>{eventCategories}</option>
              <option value={eventCategories}>{eventCategories}</option> */}
            </MySelectField>

            {/* <Field
            type="text"
            id="title"
            name="title"
            placeholder={'Enter the event title'}
            className={clsx(
              scss.input,
              errors.title && touched.title ? scss.isInvalid : '',
              !errors.title && touched.title ? scss.isValid : ''
            )}
          />
          <ErrorMessage
            name="address"
            component="div"
            className={scss.errorMessage}
          /> */}
            {/* <Field
            minRows={3}
            maxRows={6}
            fullWidth={true}
            id="outlined-multiline-static"
            multiline
            margin="dense"
            name="description"
            autoComplete="category description"
            autoFocus
            placeholder="Enter some description..."
          /> */}
            {/* <DatePickerField name="startDate" initialValue={values.dateStart} />
          <DatePickerField name="endDate" initialValue={values.dateEnd} /> */}

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
