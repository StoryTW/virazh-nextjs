import React, { FC, forwardRef, TextareaHTMLAttributes } from 'react';
import styles from './Textarea.module.scss';
import { ValidationHint } from '../ValidationHint/ValidationHint';

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, ITextarea>(
  ({ value, onChange, placeholder, rows, error, ...props }, ref) => {
    return (
      <div>
        <textarea
          ref={ref}
          rows={rows}
          className={styles.textarea}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        <ValidationHint errorMsg={error as string} />
      </div>
    );
  },
);

Textarea.displayName = 'Textarea';
