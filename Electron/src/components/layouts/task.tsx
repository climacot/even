export const Task = ({ description }: { description?: string }) => {
  return (
    <div>
      <div className="text-lg font-semibold">Tarea</div>
      <div>{description || "..."}</div>
    </div>
  );
};
