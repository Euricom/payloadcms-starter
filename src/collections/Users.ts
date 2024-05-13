import type { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    admin: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    // Email and password added by default
    // Add more fields as needed
    {
      name: 'firstName',
      label: 'First name',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      label: 'Last name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
    },
  ],
};
