import { forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Modal = forwardRef<HTMLDivElement, Props>((props, _) => {
  const { children } = props;

  return (
    <div className="fixed inset-0 bg-black/20 flex justify-center items-center">
      <div className="bg-white rounded-md">{children}</div>
    </div>
  );
});
