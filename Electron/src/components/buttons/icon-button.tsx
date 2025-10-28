export const IconButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      className="rounded-full p-2 flex justify-center items-center cursor-pointer hover:bg-gray-200"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
