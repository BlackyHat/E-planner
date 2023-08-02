import { useField, FieldHookConfig } from 'formik';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import scss from './MyTextField.module.scss';

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
      <label>
        {label}
        <select {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className={scss.errorMessage}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default MySelectField;
