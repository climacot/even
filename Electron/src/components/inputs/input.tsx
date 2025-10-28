import { InputHTMLAttributes, forwardRef, useId } from "react";
import clsx from "clsx";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { label, isError, errorMessage, ...restProps } = props;
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="block font-semibold mb-2 text-neutral-950">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        name={id}
        className={clsx(
          "px-2 py-3 border border-gray-200 rounded-md w-full focus:border-blue-600 placeholder:text-gray-500",
          isError ? "" : ""
        )}
        {...restProps}
      />
      {isError && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
});
