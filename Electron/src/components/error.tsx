export const Error = ({ message }: { message: string }) => {
  return <div className="p-2 bg-red-50 border border-red-300 rounded-md">{message}</div>;
};
