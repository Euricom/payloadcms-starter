import Link from 'next/link';
import LoginForm from './_components/loginForm';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * TODO:
 * Make login work
 * Validation
 * Redirect when already logged in
 * Store path that was wanted to be visited and redirect there after login
 */

const LoginPage = async () => {
  return (
    <div className='bg-gray-100 px-4 dark:bg-gray-950'>
      <div className='absolute m-3'>
        <Link href='/'>
          <Button variant={'ghost'}>
            <ArrowLeft /> Back
          </Button>
        </Link>
      </div>
      <div className='flex min-h-[100dvh] items-center justify-center '>
        <div className='w-full max-w-md space-y-6'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold'>Welcome</h1>
            <p className='text-gray-500 dark:text-gray-400'>Sign in to your account to continue</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
