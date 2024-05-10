'use client';

import { useAuth } from '@/components/providers/Auth.provider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user === null) {
      console.log('Redirecting to login');
      window.location.href = '/login';
    }
  }, [router, user]);

  const logUserOut = async () => {
    await logout();
  };

  if (!user) return null;

  return (
    <div>
      <div>
        <h1>HEADER</h1>
        <div>{user?.email}</div>
        <Button onClick={logUserOut}>LOGOUT</Button>
        <Link href={'/app'}>App</Link>
        <Link href={'/app/test'}>Test</Link>
      </div>
      {children}
    </div>
  );
};

export default AppLayout;
