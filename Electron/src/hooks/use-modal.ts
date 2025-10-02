import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<{ isOpen: boolean; url?: string }>({
    isOpen: false,
  });

  const openModal = (url?: string) => setIsOpen({ isOpen: true, url });
  const closeModal = () => setIsOpen({ isOpen: false, url: undefined });

  return { isOpen, openModal, closeModal };
};
