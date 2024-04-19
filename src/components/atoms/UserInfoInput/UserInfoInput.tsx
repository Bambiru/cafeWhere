import { InputField } from '@/components/molecules/InputField/InputField';
import { Dispatch, SetStateAction } from 'react';

const inputStyle =
  'h-full w-full rounded-xl px-5 py-3 font-normal outline-none';

interface InputError {
  borderColor: string;
  message: string;
}

interface UserInfoInput extends InputField {
  setError: Dispatch<SetStateAction<InputError>>;
}

function UserInfoInput({
  id,
  type = 'text',
  placeholder,
  required,
  message,
  setUser,
  validateInput,
  setError,
}: UserInfoInput) {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className={inputStyle}
        required={required}
        onChange={(e) => {
          const value = e.target.value;
          if (validateInput?.(value) || value === '') {
            setUser?.(value);
            setError?.({
              borderColor: 'border-greyscale-70',
              message: '',
            });
          } else {
            setError({
              borderColor: 'border-semantic-error',
              message: message || '',
            });
          }
        }}
      />
    </>
  );
}

export default UserInfoInput;
