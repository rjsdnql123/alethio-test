import React from 'react';
import useLoginHook from '../../hooks/userHook';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function LoginView() {
  const { userProfile, loginApi } = useLoginHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    loginApi(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">email</label>
      <input
        id="email"
        {...register('email', {
          required: 'required',
          pattern: {
            value: /\S+@\S+.\S+/,
            message: 'Entered value does not match email format',
          },
        })}
        type="email"
      />
      {errors.email && <span role="alert">{errors.email.message}</span>}
      <label htmlFor="password">password</label>
      <input
        id="password"
        {...register('password', {
          required: 'required',
          minLength: {
            value: 5,
            message: 'min length is 5',
          },
        })}
        type="password"
      />
      {errors.password && <span role="alert">{errors.password.message}</span>}
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default LoginView;
