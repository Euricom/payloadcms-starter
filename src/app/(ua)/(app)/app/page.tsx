'use client';

import { useAuth } from '@/components/providers/Auth.provider';

const AppHomePage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1>Home Page</h1>
      <div>{user?.email}</div>
    </div>
  );
};

export default AppHomePage;
