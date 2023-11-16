import { FieldError } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

export interface FieldProps {
  label: string;
  error?: FieldError;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface IField extends TypeInputPropsField {}
