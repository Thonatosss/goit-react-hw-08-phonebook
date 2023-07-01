import { useDispatch, useSelector } from "react-redux";
import { ContactsList, ContactsListItem, DeleteButton } from "./Contacts.styled";
import { contactsSelector } from "redux/selectors/contactsSelector";
import { filterSelector } from "redux/selectors/filterSelector";
import { deleteContact } from "redux/operations/deleteContact";



const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  
  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );

  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <ContactsList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactsListItem key={id}>
              {name} : {number}
              <DeleteButton type="button" onClick={()=>(removeContact(id))}>Delete Contact</DeleteButton>
            </ContactsListItem>
          );
        })}
      </ContactsList>
    </div>
  );
};

export { Contacts };
