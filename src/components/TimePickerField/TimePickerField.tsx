import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import DatePickerInput from '../DatePickerInput/DatePickerInput';
import './TimePickerField.module.scss';
// import { getDate } from '../../utils/transformDate';
export interface ITimePickerFieldProps {
  name: string;
  initialValue?: Date | null;
}

const TimePickerField: React.FC<ITimePickerFieldProps> = ({
  name = 'time',
  initialValue,
}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const selectedTime = field.value
    ? new Date(field.value)
    : initialValue || null;

  return (
    <DatePicker
      selected={selectedTime}
      name={name}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      dateFormat="h:mm aa"
      placeholderText="Select time"
      popperPlacement="top-start"
      showPopperArrow={false}
      fixedHeight
      customInput={<DatePickerInput />}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      popperModifiers={[
        {
          name: 'preventOverflow',
          options: {
            rootBoundary: 'viewport',
            tether: false,
            altAxis: true,
          },
        },
      ]}
    />
  );
};

export default TimePickerField;
