import { InputBase } from '@/components/ui/input/input';
import React from 'react';
import styles from './SignUp.module.scss';
import { regExpHelper } from '@/utils/helpers/regExp.helper';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/services/auth/auth.service';
import { toast } from 'react-toastify';
import { Spinner } from '@/components/ui/Spinner/Spinner';
import { setToken } from '@/utils/token';

type FormType = {
  name: string;
  email: string;
  password: string;
};

const formValidation = {
  name: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('ONE_LETTER'),
      message: 'Имя должно содержать хотя бы одну букву',
    },
  },
  email: {
    required: 'Поле обязательно к заполнению',
    pattern: {
      value: regExpHelper('EMAIL'),
      message: 'Введите корректный email',
    },
  },
  password: {
    required: 'Поле обязательно к заполнению',
    minLength: {
      value: 8,
      message: 'Пароль должен быть не менее 8 символов',
    },
    validate: {
      hasUppercase: (value: string) =>
        /[A-Z]/.test(value) || 'Пароль должен содержать хотя бы одну заглавную букву',
    },
  },
};

const SignUp = () => {
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
    mutationFn: (data: SignUpDto) => AuthService.signUp(data),
    onSuccess: (data) => {
      setToken(data.access_token);
      toast.success('Вы успешно зарегистрировались!');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    mutate({
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.password,
    } as SignUpDto);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <InputBase
        type='text'
        placeholder='Имя'
        {...register('name', formValidation.name)}
        error={errors?.name?.message}
      />
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
      <button className={styles.button} disabled={!isValid || isPending}>
        {isPending ? <Spinner /> : 'Зарегистрироваться'}
      </button>
    </form>
  );
};

export default SignUp;
