import * as React from 'react';

import { cn } from '@/lib/utils';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Label } from './label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<FieldValues & any>;
  required?: boolean;
  error: any;
  type?: 'text' | 'number' | 'password' | 'email';
  validate?: (value: string) => boolean | string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, name, label, required, register, error, type = 'text', validate, ...props },
    ref
  ) => {
    return (
      <div className='space-y-2'>
        <Label htmlFor={name}>{label}</Label>
        <input
          id={name}
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...register(name, {
            required,
            validate,
            ...(type === 'email'
              ? {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email',
                  },
                }
              : {}),
          })}
          {...props}
        />
        {error && (
          <div className='text-red-600'>
            {!error?.message && error?.type === 'required'
              ? 'This field is required'
              : error?.message}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
