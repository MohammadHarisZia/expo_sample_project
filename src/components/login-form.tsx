import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button, ControlledInput, View } from '@/ui';

const schema = z.object({
  name: z.string().optional(),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  onSubmit?: SubmitHandler<FormType>;
  disabled?: boolean;
  buttonText?: string;
};

export const LoginForm = ({
  onSubmit = () => {},
  disabled,
  buttonText = 'Login',
}: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  return (
    <View className="flex w-full flex-col gap-8 p-4">
      <ControlledInput
        testID="email-input"
        control={control}
        name="email"
        inputStyles="bg-white"
        placeholder="Email"
      />
      <ControlledInput
        testID="password-input"
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry={true}
        inputStyles="bg-white"
      />
      <Button
        testID="login-button"
        label={buttonText}
        onPress={handleSubmit(onSubmit)}
        size="lg"
        className="m-0"
        loading={disabled}
      />
    </View>
  );
};
