import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeFilter } from '../../store/contactsSlice';

function Filter() {
  const filter = useSelector(({contacts: {filter}}) => filter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.currentTarget.value;

    dispatch(handleChangeFilter(value))
  };

  return (
    <div>
      <p className={style.text}>Find contacts by name</p>
      <input
        className={style.input}
        onChange={handleChange}
        type='text'
        value={filter}
        name='filter'
      />
    </div>
  );
}

export default Filter;

