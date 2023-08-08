import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import { BsChevronCompactDown } from 'react-icons/bs';
import scss from './DatePickerInput.module.scss';

const DatePickerInput = forwardRef(
  (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { value, onClick, placeholder, name } = props;
    const { t } = useTranslation();

    return (
      <label className={scss.label}>
        {name}
        <input
          value={value}
          onClick={onClick}
          readOnly
          placeholder={placeholder}
          className={scss.input}
          ref={ref}
        />
        <span className={scss.openIconWrapper} onClick={onClick}>
          <BsChevronCompactDown
            className={scss.openIcon}
            aria-label={t('Select')}
          />
        </span>
      </label>
    );
  }
);

export default DatePickerInput;
