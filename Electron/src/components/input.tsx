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
      <label
        htmlFor={id}
        className="block text-sm font-medium mb-2 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <input
          ref={ref}
          type="text"
          id={id}
          name={id}
          className={clsx(
            isError
              ? "py-2.5 sm:py-3 px-4 block w-full border border-red-500 rounded-lg sm:text-sm focus:border-red-500 focus:ring-red-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400"
              : "py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          )}
          aria-describedby="hs-validation-name-error-helper"
          {...restProps}
        />
        {isError && (
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
            <svg
              className="shrink-0 size-4 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" x2="12" y1="8" y2="12"></line>
              <line x1="12" x2="12.01" y1="16" y2="16"></line>
            </svg>
          </div>
        )}
      </div>
      {isError && (
        <p
          className="text-sm text-red-600 mt-2"
          id="hs-validation-name-error-helper"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
});
