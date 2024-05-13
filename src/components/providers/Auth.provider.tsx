import { User } from '@/payload-types';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type ResetPassword = (args: {
  password: string;
  passwordConfirm: string;
  token: string;
}) => Promise<User>;

export type ForgotPassword = (args: { email: string }) => Promise<User>;

export type Login = (args: { email: string; password: string }) => Promise<User>;

export type Logout = () => Promise<void>;

interface AuthContext {
  user?: User | null;
  setUser: (user: User | null) => void;
  logout: Logout;
  login: Login;
  resetPassword: ResetPassword;
  forgotPassword: ForgotPassword;
}

const Context = createContext({} as AuthContext);

const makeCall = async (url: string, method: 'GET' | 'POST', body?: any) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  return await response.json();
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>();

  const login = useCallback<Login>(async (args) => {
    const { errors, user } = await makeCall('/api/users/login', 'POST', args);

    setUser(user);
    return user as User;
  }, []);

  const logout = useCallback<Logout>(async () => {
    await makeCall('/api/users/logout', 'POST');

    setUser(null);
  }, []);

  useEffect(() => {
    if (user) return;
    const fetchUser = async () => {
      const { user } = await makeCall('/api/users/me', 'GET');
      setUser(user);
    };

    fetchUser();
  }, [user]);

  const forgotPassword = useCallback<ForgotPassword>(async (args) => {
    const user = await makeCall('/api/users/forgot-password', 'POST', args);
    setUser(user);
    return user;
  }, []);

  const resetPassword = useCallback<ResetPassword>(async (args) => {
    const user = await makeCall('/api/users/reset-password', 'POST', args);
    setUser(user);
    return user;
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        resetPassword,
        forgotPassword,
      }}
    >
      {children}
    </Context.Provider>
  );
};

type UseAuth<T = User> = () => AuthContext;

export const useAuth: UseAuth = () => useContext(Context);
