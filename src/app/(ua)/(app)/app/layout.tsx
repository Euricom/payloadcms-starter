'use client';

import { useAuth } from '@/components/providers/Auth.provider';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import AppNavbar from './_components/navbar';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user === null) {
      console.log('Redirecting to login');
      window.location.href = '/login';
    }
  }, [router, user]);

  if (!user) return null;

  return (
    <div className='flex h-screen w-full'>
      <AppNavbar />
      <main className='flex-grow p-6'>{children}</main>
    </div>
  );
};

export default AppLayout;
