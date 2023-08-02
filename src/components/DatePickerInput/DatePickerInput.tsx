import React, { forwardRef } from 'react';
import scss from './DatePickerInput.module.scss';
import { BsChevronCompactDown } from 'react-icons/bs';

const DatePickerInput = forwardRef(
  (
    props: React.HTMLProps<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const { value, onClick, placeholder } = props;

    return (
      <>
        <input
          value={value}
          onClick={onClick}
          readOnly
          placeholder={placeholder}
          className={scss.input}
          ref={ref}
        />
        <span className={scss.openIconWrapper} onClick={onClick}>
          <BsChevronCompactDown className={scss.openIcon} />
        </span>
      </>
    );
  }
);

export default DatePickerInput;
