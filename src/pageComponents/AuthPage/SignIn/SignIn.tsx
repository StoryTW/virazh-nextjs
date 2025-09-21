import { InputBase } from '@/components/ui/input/input';
import React from 'react';
import styles from './SignIn.module.scss';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { setToken } from '@/utils/token';
import { AuthService } from '@/services/auth/auth.service';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/ui/Spinner/Spinner';
import { useRouter } from 'next/navigation';

type FormType = {
  email: string;
  password: string;
};

const formValidation = {
  email: {
    required: 'Поле обязательно к заполнению',
  },
  password: {
    required: 'Поле обязательно к заполнению',
  },
};

const SignIn = () => {
  const router = useRouter();
  const {
    formState: { errors, isValid },
    register,
    handleSubmit,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: (data: SignInDto) => AuthService.signIn(data),
    onSuccess: (data) => {
      setToken(data.access_token);
      router.push('/');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      email: data.email,
      password: data.password,
    } as SignInDto);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputBase
        type='text'
        placeholder='Телефон, email'
        error={errors?.email?.message}
        {...register('email', formValidation.email)}
      />
      <InputBase
        type='text'
        placeholder='Пароль'
        error={errors?.password?.message}
        {...register('password', formValidation.password)}
      />
      <div className={styles.block}>
        <label htmlFor='checkbox' className={styles.label}>
          <input type='checkbox' />
          <p id='checkbox'>Запомнить</p>
        </label>
        <Link href={'/'} className={styles.link}>
          Изменить пароль
        </Link>
      </div>
      <button className={styles.button} disabled={!isValid || isPending}>
        {isPending ? <Spinner /> : 'Войти'}
      </button>
    </form>
  );
};

export default SignIn;
