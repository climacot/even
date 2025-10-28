import { useId } from "react";

export const Likert = ({
  label,
  values,
  labels,
  onChange,
  variant,
  value,
}: {
  label?: string;
  values: string[];
  labels: string[];
  onChange: (value: string) => void;
  variant: "vertical" | "horizontal";
  value?: string;
}) => {
  const id = useId();

  return variant === "vertical" ? (
    <div className="p-0.5 rounded-md overflow-hidden max-w-md bg-[linear-gradient(to_top,#FF2B2A,#FF8901,#FFC547,#25D654,#14A33A)]">
      <div className="flex flex-col rounded-sm overflow-hidden bg-white">
        {values.map((v, index) => (
          <div key={v} className="">
            <label
              htmlFor={`${id}-${v}`}
              className="border-b border-gray-200 px-4 py-4 flex flex-row gap-2 justify-start flex-1 cursor-pointer hover:bg-gray-50"
            >
              <div className="">
                <input
                  value={v}
                  id={`${id}-${v}`}
                  name={id}
                  type="radio"
                  className="cursor-pointer checked:accent-blue-600"
                  onChange={(event) => onChange(event.target.value)}
                />
              </div>
              <span className="select-none">
                <span className="font-semibold">{v}</span>. {labels[index]}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  ) : variant === "horizontal" ? (
    <div>
      {label && <div className="font-medium mb-2">{label}</div>}
      <div className="p-0.5 mb-1 rounded-md overflow-hidden bg-[linear-gradient(to_right,#FF2B2A,#FF8901,#FFC547,#25D654,#14A33A)]">
        <div className="flex flex-row bg-white rounded-sm overflow-hidden">
          {values.map((v) => (
            <label
              className="px-2 py-4 flex flex-row gap-2 justify-center flex-1 cursor-pointer hover:bg-gray-50"
              htmlFor={`${id}-${v}`}
              key={v}
            >
              <input
                onChange={(event) => onChange(event.target.value)}
                checked={value ? value === v : undefined}
                type="radio"
                name={id}
                className="cursor-pointer checked:accent-blue-600"
                id={`${id}-${v}`}
                value={v}
              />
              <span className="select-none">{v}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-row">
        {labels.map((label, index) => (
          <span
            className="flex justify-center first:justify-start last:justify-end flex-1 text-gray-600"
            key={index}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};
