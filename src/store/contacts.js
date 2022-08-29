import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://630bbd2ded18e82516584c11.mockapi.io/api/v1/' }),
  tagTypes: ['contacts'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['contacts']
    }),
  }),
});


export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;
