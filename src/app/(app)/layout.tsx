'use client';

import { AuthProvider } from '@/components/providers/Auth.provider';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppLayout;
