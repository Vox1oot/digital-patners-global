import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import schema from '../yup/index.js';

const MainForm = () => {
  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
    initialValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      checkbox: false,
    },
    validationSchema: schema,
    onSubmit: () => {

    }
  });

  return (
    <Form className="form-container p-5" onSubmit={handleSubmit}>
      <div className="form-header m-auto">
        For business enquiries please use the form below
      </div>
      <p className='m-auto mt-2 text-center labels'>*Required</p>
      <Form.Group className="mb-3 labels" controlId="name" >
        <Form.Label>Name*</Form.Label>
        <Form.Control
          className={errors.name && 'is-invalid'}
          type="text"
          value={values.name} 
          onChange={handleChange} 
          autoComplete="off"
          autoFocus
          required/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="company" >
        <Form.Label>Company*</Form.Label>
        <Form.Control
          className={errors.company && 'is-invalid'}
          type="text"
          value={values.company} 
          onChange={handleChange}
          autoComplete="off"
          required/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="email" >
        <Form.Label>E-mail*</Form.Label>
        <Form.Control
          className={errors.email && 'is-invalid'}
          type="email"
          value={values.email} 
          onChange={handleChange} 
          autoComplete="off"
          required/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          value={values.phone}
          autoComplete="off"e
          onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          value={values.subject}
          autoComplete="off"
          onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="message" required>
        <Form.Label>Message*</Form.Label>
        <Form.Control
          className={errors.message && 'is-invalid'}
          type="text"
          value={values.message}
          autoComplete="off"
          onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3 labels" controlId="checkbox">
        <Form.Check 
          checked={values.checkbox}
          onChange={handleChange}
          className="d-flex"
          type="checkbox" 
          label={
            <span>I accept <a href={'#'} target="_blank" rel="Terms and Privacy Policy">Terms and conditions</a>
            </span>
          }/>
      </Form.Group>
      
      <Button className="d-block m-auto" variant="secondary" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Form>
  );
}

export default MainForm;