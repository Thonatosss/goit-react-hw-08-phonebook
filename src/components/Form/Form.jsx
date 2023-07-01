import { nanoid } from 'nanoid';
import React from 'react';
import { Formik, Form } from 'formik';
import { object, string } from 'yup';
import { FormLabel, FilterButton, FormInput, ContactsForm, ContactsTitle, ErrMessage } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors/contactsSelector';
import {addContact} from 'redux/operations/addContact';



const initialValues = {
  name: '',
  number: '',
};
const schema = object({
  name: string()
    .min(2, 'Name must be at least 2 characters!')
    .max(25, 'Name must be at most 25 characters!')
    .required('Required!'),
  number: string()
    .min(7, 'Number must be at least 7 digits')
    .max(7, 'Number must be at most 7 digits')
    .required('Required!'),
});


function UserForm() {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();

  const attachContact = data => {
    dispatch(addContact(data));
  };
  const handleFormSubmit = (values, { resetForm }) => {
    const { name } = values;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already in contacts.`);
    }
    const id = nanoid();
    const data = { ...values, id };
    attachContact(data);
    resetForm();
  };
  return (
    <ContactsForm>
      <Formik
        onSubmit={handleFormSubmit}
        validationSchema={schema}
        initialValues={initialValues}
        validateOnChange={true}
      >
        <Form>
          <ContactsTitle>PHONEBOOK</ContactsTitle>
          <FormLabel>
            Name
            <FormInput type="text" name="name" required />
            <ErrMessage name="name" component="div"></ErrMessage>
          </FormLabel>

          <FormLabel>
            Number
            <FormInput type="tel" name="number" required />
            <ErrMessage name="number" component="div"></ErrMessage>
            <FilterButton type="submit">Add contact</FilterButton>
          </FormLabel>
        </Form>
      </Formik>
    </ContactsForm>
  );
}

export { UserForm };