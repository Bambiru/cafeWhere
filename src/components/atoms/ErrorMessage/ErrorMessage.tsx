import { ElementType } from 'react';

interface errorMessage {
  as?: ElementType;
  message: string;
  className?: string;
}

function ErrorMessage({
  as: ComponentName = 'span',
  message,
  className,
  ...props
}: errorMessage) {
  return (
    <ComponentName
      className={`h-5 text-12pxr text-semantic-error ${className}`}
      {...props}
    >
      {message}
    </ComponentName>
  );
}

export default ErrorMessage;
