'use client';

import { useAuth } from '@/components/providers/Auth.provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';

const UserPage = () => {
  const { user } = useAuth();

  return (
    <div className='flex flex-col gap-8 md:gap-12'>
      <div className='flex flex-col items-center gap-4 md:flex-row md:gap-8'>
        <div className='flex h-32 w-32 items-center justify-center rounded-full bg-gray-200 text-2xl text-gray-900 dark:bg-gray-700 dark:text-gray-50'>
          {user?.firstName && user?.firstName.charAt(0).toUpperCase()}
          {user?.lastName && user?.lastName.charAt(0).toUpperCase()}
        </div>
        <div className='text-center md:text-left'>
          <h1 className='text-2xl font-bold'>
            {user?.firstName} {user?.lastName}
          </h1>
          <p className='text-gray-500 dark:text-gray-400'>{user?.email}</p>
        </div>
      </div>
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='flex items-center justify-between'>
              <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                Firstname
              </span>
              <span className='text-sm'>{user?.firstName}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>Lastname</span>
              <span className='text-sm'>{user?.lastName}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>Email</span>
              <span className='text-sm'>{user?.email}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assigned companies</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>TODO: list of companies</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>User actions</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            TODO: add actions like change password, delete account, etc.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserPage;
