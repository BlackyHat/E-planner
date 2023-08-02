import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import DatePickerInput from '../DatePickerInput/DatePickerInput';

import scss from './DatePickerField.module.scss';

export interface IDatePickerProps {
  name: string;
  initialValue?: Date | null;
}

const DatePickerField: React.FC<IDatePickerProps> = ({ name = 'date' }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const selectedDate = field.value ? new Date(field.value) : null;

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={selectedDate}
      closeOnScroll={true}
      placeholderText="Select date"
      formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
      popperPlacement="top-start"
      showPopperArrow={false}
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
    >
      <ul className={scss.buttonWrapper}>
        <li>
          <button type="button" className={scss.cancelButton}>
            Cancel
          </button>
        </li>
        <li>
          <button type="button" className={scss.chooseButton}>
            Choose day
          </button>
        </li>
      </ul>
    </DatePicker>
  );
};

export default DatePickerField;
