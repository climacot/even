import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "soft";
  color?: "blue" | "yellow" | "white";
  isFullWidth?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    { variant = "solid", color = "blue", isFullWidth = true, ...restProps },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        className={clsx(
          {
            solid: "border",
            soft: "border",
          }[variant],
          {
            blue: "bg-blue-600 hover:bg-blue-700 border-blue-600 hover:border-blue-700 disabled:bg-blue-400 disabled:border-blue-400 text-white",
            yellow:
              "bg-yellow-400 border-yellow-400 text-yellow-950 hover:bg-yellow-500 hover:border-yellow-500",
            white: "bg-white text-black border-gray-200",
          }[color],
          isFullWidth && "w-full",
          "px-4 py-3 rounded-md cursor-pointer font-semibold",
          "disabled:cursor-default select-none",
          "flex justify-center gap-2"
        )}
        {...restProps}
      />
    );
  }
);
