import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61ba061948df2f0017e5a8a2.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    blockContactToggle: builder.mutation({
      query: ({ id, contact }) => ({
        url: `/contacts/${id}`,
        method: 'PUT',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: ({ contact }) => ({
        url: `/contacts`,
        method: 'POST',
        body: { ...contact, isBlocked: false },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useBlockContactToggleMutation,
  useAddContactMutation,
} = contactsAPI;
