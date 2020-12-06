import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email adress').required('Required'),
        password: Yup.string()
          .min(6, 'Minimum 6 symbols')
          .max(20, 'Maximum 20 symbols')
          .required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        console.log(values);
        // await new Promise(resolve => setTimeout(() => resolve(''), 2000));
        setSubmitting(false);
      }}
    >
      <Form>
        <Field type="email" name="email" />
        <ErrorMessage name="email" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
);

export default Basic;
