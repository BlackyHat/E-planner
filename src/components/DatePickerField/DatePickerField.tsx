import React, { useRef, useState } from 'react';
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
  const startRef = useRef<DatePicker>(null);
  const [choosedDate, setChoosedDate] = useState<Date | null>(null);

  const { t } = useTranslation();
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const selectedDate = field.value
    ? new Date(field.value)
    : initialValue || null;

  const selectDate = () => {
    setFieldValue(field.name, choosedDate);
    setChoosedDate(null);
    startRef?.current?.setOpen(false);
  };
  const selectAbort = () => {
    setChoosedDate(null);
    startRef?.current?.setOpen(false);
  };

  return (
    <div className={scss.container}>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        ref={startRef}
        name={name}
        enableTabLoop={false}
        selected={selectedDate}
        closeOnScroll={true}
        placeholderText={t('Select date')}
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
        popperPlacement="top-start"
        showPopperArrow={false}
        shouldCloseOnSelect={false}
        customInput={<DatePickerInput />}
        onChange={(val) => {
          setChoosedDate(val);
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
            <button
              type="button"
              onClick={selectAbort}
              className={scss.cancelButton}
            >
              {t('Cancel')}
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={selectDate}
              className={scss.chooseButton}
              disabled={!choosedDate}
            >
              {t('Choose day')}
            </button>
          </li>
        </ul>
      </DatePicker>
    </div>
  );
};

export default DatePickerField;
