'use client';

import clsx from 'clsx';
import React from 'react';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id = '',
  type,
  required,
  register,
  errors,
  disabled,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="
      block
      text-sm
      font-medium
      text-gray-900
      "
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          {...register(id, { required })}
          className={clsx(
            `
          form-input
          block
          w-full
          py-1.5
          text-grey-900
          shadow-sm
          rounded-md
          border-0
          ring-1
          ring-inset
          ring-gray-300
          placeholder:text-gray-400
          focus:ring-2
          focus:ring-inset
          focus:ring-sky-600,
          `,
            errors[id] && 'ring-rose-500',
            disabled && 'opacity-50'
          )}
        />
      </div>
    </div>
  );
};

export default Input;
