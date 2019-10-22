import React from 'react';
import { Form } from 'semantic-ui-react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  mobile: string;
  amount: string;
}


const SendMoneyForm: React.FC<FormikProps<FormValues>> = (props) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input
          fluid
          name='mobile'
          label='Mobile number'
          placeholder='Mobile number'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.mobile}
          error={touched.mobile ? errors.mobile : false}
        />
        <Form.Input
          fluid
          name='amount'
          label='Amount to send'
          placeholder='Amount to send'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.amount}
          error={touched.amount ? errors.amount: false}
        />
      </Form.Group>
      <Form.Button primary floated='right' content='Transfer' />
    </Form> 
  );
}


interface FormProps {
  initialValues?: FormValues;
}


export default withFormik<FormProps, FormValues>({
  mapPropsToValues: props => ({
    mobile: props.initialValues ? props.initialValues.mobile : '',
    amount: props.initialValues ? props.initialValues.amount : '',
  }),
  validationSchema: Yup.object().shape({
    mobile: Yup.string().required("Mobile number is required"),
    amount: Yup.number().required("Amount is required")
  }),
  handleSubmit({ mobile, amount } : FormValues) {
    console.log({ mobile, amount })
  }
})(SendMoneyForm);
