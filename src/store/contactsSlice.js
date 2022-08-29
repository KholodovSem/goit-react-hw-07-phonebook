import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [
      {
        id: "id-1",
        name: "Rosie Simpson",
        number: "459-12-56"
      },
      {
        id: "id-2",
        name: "Hermione Kline",
        number: "443-89-12"
      },
      {
        id: "id-3",
        name: "Eden Clements",
        number: "645-17-79"
      },
      {
        id: "id-4",
        name: "Annie Copeland",
        number: "227-91-26"
      }
    ],
      filter: ''
  }
}

const contactsSlice = createSlice({
  name: 'Contacts',
  initialState,
  reducers: {
    addContact ({ contacts: {items} }, { payload }) {
      const { name } = payload;
      const includesTest = items.find((el) => el.name.toLowerCase() === name.toLowerCase());

      if (includesTest) {
        return alert(`${name} is already in contacts.`);
      }

      items.push(payload)
    },
    deleteContact (state, { payload }) {
       state.contacts.items = state.contacts.items.filter((item) => item.id !== payload)
    },
    handleChangeFilter (state, {payload}){
      state.contacts.filter = payload;
    }
  }
})

export const {addContact, deleteContact, handleChangeFilter} = contactsSlice.actions;
export default contactsSlice.reducer;
