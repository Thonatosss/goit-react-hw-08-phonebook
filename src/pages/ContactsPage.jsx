import { Contacts } from "components/Contacts/Contacts";
import { Filter } from "components/Filter/Filter";
import { UserForm } from "components/Form/Form";
import { PhonebookWrapper } from "components/Form/Form.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations/fetchContacts";
import { contactsSelector } from "redux/selectors/contactsSelector";

export const ContactsPage = () => {
  const contacts = useSelector(contactsSelector);
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchContacts());
   }, [dispatch]);
  return (
    <PhonebookWrapper>
      <h1>Phonebook</h1>
      <UserForm />
      <h2>Find contact by name</h2>
      <Filter />
      {contacts.length === 0 ? <p>You don't have contacts </p> : <Contacts />}
    </PhonebookWrapper>
  );
};
