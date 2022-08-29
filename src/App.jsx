import AddContactForm from './components/ContactForm/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import style from './App.module.css';


function App() {
  return (
    <section className={style.section}>
      <h1 className={style.title}>Phonebook</h1>
      <AddContactForm />
      <h2 className={style.titleContact}>Contacts</h2>
      <Filter/>
      <ContactList/>
    </section>
  );
}

export default App;

