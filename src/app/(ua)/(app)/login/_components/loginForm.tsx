'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuth } from '@/components/providers/Auth.provider';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

type FormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirect = useRef(searchParams.get('redirect'));
  const { login, user } = useAuth();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) router.push('/app');
  }, [router, user]);

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>({
    defaultValues: {
      email: 'test@test.com',
      password: 'hoi',
    },
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        console.log('Attempting to login with email:', data.email);
        await login(data);
        if (redirect?.current) router.push(redirect.current as string);
        else router.push('/app');
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.');
      }
    },
    [login, router]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      {error && <p className='text-red-500'>{error}</p>}
      <Input
        name='email'
        label='Email'
        required
        type='email'
        register={register}
        error={errors.email}
      />
      <Input
        name='password'
        label='Password'
        required
        type='password'
        register={register}
        error={errors.password}
      />
      <Button className='w-full' type='submit' disabled={isLoading}>
        {isLoading ? 'Processing' : 'Sign In'}
      </Button>
    </form>
  );
};

export default LoginForm;
