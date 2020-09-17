import { FormApi } from 'final-form';
import React from 'react';
import { useField } from 'react-final-form-hooks';
import styles from './Input.module.css';


interface IProps {
  id?: string;
  validate?: boolean;
  placeholder?: string;
  className?: string;
  type: string;
  inputName: string;
  label?: string;
  formReference: FormApi;
}

const Input = (props: IProps) => {
  const { 
    id,
    placeholder,
    type,
    inputName,
    formReference,
    label = ''
  } = props;

  const formInput = useField(inputName, formReference)
 
  return (
    <div className={styles.formControll}>
      {label}
      <input
        {...formInput.input}
        id={id}
        placeholder={placeholder}
        type={type}
        className={styles.input}
        />
        {formInput.meta.touched && formInput.meta.error &&
          <span className={styles.error}>{formInput.meta.error}</span>
        }
        
        </div>
    )
}

export default Input;