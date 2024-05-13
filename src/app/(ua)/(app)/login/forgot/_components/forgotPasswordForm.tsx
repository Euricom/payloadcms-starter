'use client';

import { useAuth } from '@/components/providers/Auth.provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
};

const ForgotPasswordForm = (props: any) => {
  const { user, forgotPassword } = useAuth();
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
    },
  });

  const onSubmit = useCallback(
    async (data: FormData) => {
      try {
        await forgotPassword(data);
      } catch (_) {
        setError('There was an error with the credentials provided. Please try again.');
      }
    },
    [forgotPassword]
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
      <Button className='w-full' type='submit' disabled={isLoading}>
        {isLoading ? 'Processing' : 'Reset password'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
