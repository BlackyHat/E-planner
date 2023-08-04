import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';

import DatePickerInput from '../DatePickerInput/DatePickerInput';
import scss from './DatePickerField.module.scss';

export interface IDatePickerProps {
  name: string;
  initialValue?: Date | null;
}

const DatePickerField: React.FC<IDatePickerProps> = ({
  name = 'date',
  initialValue,
}) => {
  const { t } = useTranslation();

  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  const selectedDate = field.value
    ? new Date(field.value)
    : initialValue || null;

  return (
    <div className={scss.container}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        name={name}
        enableTabLoop={false}
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
              {t('Cancel')}
            </button>
          </li>
          <li>
            <button type="button" className={scss.chooseButton}>
              {t('Choose day')}
            </button>
          </li>
        </ul>
      </DatePicker>
    </div>
  );
};

export default DatePickerField;
