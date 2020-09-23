import React from 'react'
import { useForm } from 'react-final-form-hooks';
import { emailValidator, passwordValidator } from '../../validator';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './LoginForm.module.css';

// styledcomponents, emotion

interface FormValues {
  email?: string;
  password?: string;
}


const LoginForm = () => {

  const onSubmit = (values: FormValues) => {
    setTimeout(() => {
      console.log(values)
    }, 400)
  };

  const validate = (values: FormValues) => {
    const {
      email,
      password
    } = values;

    const errors: FormValues = {
    };

    if (email?.length) {
      const isValidEmail = emailValidator(email);
      if (!isValidEmail) {
        errors.email = 'You have entered an invalid email address'
      }
    }

    if (password?.length) {
      const isValidPassword = passwordValidator(password);
      if (!isValidPassword) {
        errors.password = 'You have entered an invalid password.'
      }
    }
    return errors;
  }

  const { form, handleSubmit, submitting, pristine, valid } = useForm({
    onSubmit,
    validate
  })

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Input formReference={form} inputName='email' type="email" placeholder="Enter email" />
      <Input formReference={form} inputName='password' type="password" placeholder="Enter password" />
      <Button disabled={submitting || pristine || !valid} className='submit-button' type="submit">Log in </Button>
    </form>
  )
}

export default LoginForm;
