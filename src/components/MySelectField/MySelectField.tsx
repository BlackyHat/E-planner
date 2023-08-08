import { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import clsx from 'clsx';

import { BsChevronCompactDown } from 'react-icons/bs';
import scss from './MySelectField.module.scss';

interface MySelectField {
  label: string;
  name: string;
  options: string[];
  placeholder: string;
}

const MySelectField: React.FC<MySelectField> = ({
  label,
  options,
  placeholder,
  ...props
}) => {
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();
  const [open, setOpen] = useState(false);

  const handleOptionChange = (option: string) => {
    setFieldValue(field.name, option);
    setOpen(!open);
  };

  return (
    <>
      <div
        className={clsx(scss.dropdownOverlay, open ? scss.active : scss.closed)}
        onClick={() => setOpen(false)}
      ></div>
      <div className={scss.dropdownContainer}>
        <p className={scss.label}>{label}</p>
        <button
          className={clsx(scss.button)}
          onClick={() => setOpen(!open)}
          type="button"
          aria-label={placeholder}
        >
          {field.value || placeholder}
          <span className={scss.openIconWrapper} onClick={() => setOpen(!open)}>
            <BsChevronCompactDown className={scss.openIcon} />
          </span>
        </button>

        <ul
          className={clsx(scss.dropdownMenu, open ? scss.active : scss.closed)}
        >
          {options.map((option) => (
            <li
              key={option}
              className={scss.dropdownItem}
              onClick={() => handleOptionChange(option)}
              value={option}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MySelectField;
