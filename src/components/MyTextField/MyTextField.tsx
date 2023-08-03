import { ClassAttributes, InputHTMLAttributes } from 'react';
import { useField, FieldHookConfig } from 'formik';
import clsx from 'clsx';

import { MdClear } from 'react-icons/md';
import scss from './MyTextField.module.scss';

interface TextFieldProps {
  label: string;
}

const MyTextField = ({
  label,
  disabled,
  ...props
}: TextFieldProps &
  InputHTMLAttributes<HTMLInputElement> &
  ClassAttributes<HTMLInputElement> &
  FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);

  const clearInput = () => {
    helpers.setValue('');
  };

  return (
    <>
      <label className={scss.label}>
        {label}
        <input
          className={clsx(
            scss.input,
            meta.error && meta.touched ? scss.isInvalid : ''
          )}
          disabled={disabled}
          {...field}
          {...props}
        />
        {field.value && !disabled && (
          <MdClear className={scss.clearIcon} onClick={clearInput} />
        )}
        {meta.touched && meta.error ? (
          <div className={scss.errorMessage}>{meta.error}</div>
        ) : null}
      </label>
    </>
  );
};

export default MyTextField;
