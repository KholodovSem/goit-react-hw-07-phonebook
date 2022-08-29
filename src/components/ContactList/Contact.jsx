import { ThreeDots } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import style from './ContactList.module.css';
import { useDeleteContactMutation } from '../../store/contacts';

const Contact = ({name, phone, id}) => {
  const [deleteContact, {isLoading}] = useDeleteContactMutation();

  return (
    <li className={style.listItem}>
      <span className={style.name}>{name}:</span>
      <span className={style.number}>{phone}</span>
      <>
        <button
          disabled={isLoading}
          className={style.button}
          onClick={() => {
            deleteContact(id)
            toast.success(`${name} is successfully deleted`)
          }}
        >
          { isLoading && <ThreeDots
            height="21"
            width="24"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            strokeWidth="4"
            wrapperClass=""
            visible={true}
          />}
          {!isLoading && <span>Delete</span>}
        </button>
      </>
    </li>
  );
};

export default Contact;
