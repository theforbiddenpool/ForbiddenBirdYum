import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import fetch from 'isomorphic-fetch';
import { useState } from 'react';
import Alert from '../Misc/Alert';
import { LoginSchema } from '../../utils/schemas';

const { NEXT_PUBLIC_API_URL } = process.env;

const LoginForm = () => {
  const [apiError, setApiError] = useState(null);
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={async (values) => {
        try {
          const response = await fetch(`${NEXT_PUBLIC_API_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });
          if (!response.ok) {
            throw await response.json();
          }
          window.location.replace('http://localhost:3000/');
        } catch (error) {
          setApiError(error.message);
        }
      }}
    >
      {({ isSubmitting, errors }) => {
        const isValid = !Object.keys(errors).length;
        return (
          <Form className="form">
            <h3 className="form-title">Log into your account.</h3>
            {apiError && <Alert type="error" message={apiError} />}
            <div className="form-items">
              <span>Username</span>
              <ErrorMessage name="username">{ (msg) => <span className="formik-error-text">{msg}</span>}</ErrorMessage>
              <Field className="form-inputs" placeholder="Enter your username" type="text" name="username" />
            </div>
            <div className="form-items">
              <span>Password</span>
              <ErrorMessage name="password">{ (msg) => <span className="formik-error-text">{msg}</span>}</ErrorMessage>
              <Field className="form-inputs" placeholder="Enter your password" type="password" name="password" />
            </div>
            <div className="form-items">
              <button className="form-button" type="submit" disabled={isSubmitting || !isValid}>Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
