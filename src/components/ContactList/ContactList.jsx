import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../store/contactsSlice';

function ContactList() {
  const contacts = useSelector(({ contacts: { items } }) => items);
  const filter = useSelector(({contacts: {filter}}) => filter)
  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizeFilter));
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  };

  return (
    <ul className={style.ul}>
      {filterContacts().map((contact) => (
        <li key={contact.id} className={style.listItem}>
          <span className={style.name}>{contact.name}:</span>
          <span className={style.number}>{contact.number}</span>
          <>
          <button className={style.button}
                  onClick={() => {
                    handleDelete(contact.id)
                  }}>
            Delete
          </button>
          </>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

