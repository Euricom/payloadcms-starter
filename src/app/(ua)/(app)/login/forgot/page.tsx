import Link from 'next/link';
import LoginForm from './_components/forgotPasswordForm';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
            <h1 className='text-3xl font-bold'>Whoops, forgot your password</h1>
            <p className='text-gray-500 dark:text-gray-400'>
              Enter your mail address, if we know you we&apos;ll help you out by sending an email.
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
