import { TextareaHTMLAttributes, forwardRef } from "react";

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return <textarea ref={ref} {...props} />;
});

TextArea.displayName = "TextArea";
