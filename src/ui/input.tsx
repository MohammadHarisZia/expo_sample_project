import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import type { TextInput, TextInputProps } from 'react-native';
import { I18nManager, StyleSheet, View } from 'react-native';
import { TextInput as NTextInput } from 'react-native';
import { tv } from 'tailwind-variants';

import { cn } from '@/core';

import colors from './colors';
import { Text } from './text';

const inputTv = tv({
  slots: {
    container: 'mb-2',
    label: 'text-grey-100 mb-1 text-lg dark:text-neutral-100',
    input:
      'font-jakarta mt-0 rounded-xl border-[0.5px] border-neutral-300 bg-neutral-100 px-4 py-3 text-base  font-[500] leading-5 ',
  },
  variants: {
    focused: {
      true: {
        input: 'border-neutral-400',
      },
    },
    error: {
      true: {
        input: 'border-danger-600',
        label: 'text-danger-600 dark:text-danger-600',
      },
    },
    disabled: {
      true: {
        input: 'bg-neutral-200',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  labelStyles?: string;
  inputStyles?: string;
  containerStyles?: string;
}

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends NInputProps,
    InputControllerType<T> {}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    testID,
    labelStyles,
    containerStyles,
    inputStyles,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  const styles = React.useMemo(
    () =>
      inputTv({
        error: Boolean(error),
        focused: isFocussed,
        disabled: Boolean(props.disabled),
      }),
    [error, isFocussed, props.disabled]
  );

  return (
    <View className={cn(styles.container(), containerStyles)}>
      {label && (
        <Text
          testID={testID ? `${testID}-label` : undefined}
          className={cn(styles.label(), labelStyles)}
        >
          {label}
        </Text>
      )}
      <NTextInput
        testID={testID}
        ref={ref}
        placeholderTextColor={colors.neutral[400]}
        className={cn(styles.input(), inputStyles)}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
        style={StyleSheet.flatten([
          { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
          inputProps.style,
        ])}
      />
      {error && (
        <Text
          testID={testID ? `${testID}-error` : undefined}
          className="text-sm text-danger-400 dark:text-danger-600"
        >
          {error}
        </Text>
      )}
    </View>
  );
});

// only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <Input
      ref={field.ref}
      autoCapitalize="none"
      onChangeText={field.onChange}
      value={field.value as string}
      {...inputProps}
      error={fieldState.error?.message}
    />
  );
}
