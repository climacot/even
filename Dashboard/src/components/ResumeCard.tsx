export const ResumeCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div>
      <div>{title}</div>
      <div>{value}</div>
    </div>
  );
};
