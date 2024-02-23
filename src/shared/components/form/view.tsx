import { forwardRef, FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  return <form ref={ref} {...props} />;
});

Form.displayName = "Form";
