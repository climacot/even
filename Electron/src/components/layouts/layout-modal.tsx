export const LayoutModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed inset-0 bg-black/10 flex justify-center items-center">
      <div className="bg-white rounded-md overflow-hidden">{children}</div>
    </div>
  );
};
