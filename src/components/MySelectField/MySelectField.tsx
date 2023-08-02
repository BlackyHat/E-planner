import { useField, FieldHookConfig } from 'formik';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import scss from './MySelectField.module.scss';
import clsx from 'clsx';

interface MySelectField {
  label: string;
}

const MySelectField = ({
  label,
  ...props
}: MySelectField &
  FieldHookConfig<string> &
  DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className={scss.label}>
        {label}
        <select
          {...field}
          {...props}
          className={clsx(
            scss.input,
            meta.error && meta.touched ? scss.isInvalid : ''
          )}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className={scss.errorMessage}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MySelectField;
