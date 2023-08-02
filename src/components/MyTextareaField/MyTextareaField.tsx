import {
  ClassAttributes,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
  DetailedHTMLProps,
} from 'react';
import { useField, FieldHookConfig } from 'formik';
import clsx from 'clsx';

import { MdClear } from 'react-icons/md';
import scss from './MyTextareaField.module.scss';

interface MyTextareaField {
  label: string;
}

const MyTextareaField = ({
  label,
  ...props
}: MyTextareaField &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLInputElement> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > &
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
        <textarea
          className={clsx(
            scss.input,
            meta.error && meta.touched ? scss.isInvalid : ''
          )}
          {...field}
          {...props}
        />
        {field.value && (
          <MdClear className={scss.clearIcon} onClick={clearInput} />
        )}
        {meta.touched && meta.error ? (
          <div className={scss.errorMessage}>{meta.error}</div>
        ) : null}
      </label>
    </>
  );
};

export default MyTextareaField;
