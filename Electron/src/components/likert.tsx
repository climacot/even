import { useId } from "react";

export const Likert = ({
  label,
  values,
  labels,
  onChange,
  variant,
}: {
  label: string;
  values: string[];
  labels: string[];
  onChange: (value: string) => void;
  variant: "vertical" | "horizontal";
}) => {
  const id = useId();

  return variant === "vertical" ? (
    <ul className="max-w-sm flex flex-col">
      {values.map((value, index) => (
        <li
          key={value}
          className="inline-flex items-center text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-neutral-800 dark:border-neutral-700 dark:text-white"
        >
          <label
            htmlFor={`${id}-${value}`}
            className="relative flex items-start w-full gap-x-2 py-3 px-4 cursor-pointer"
          >
            <div className="flex items-center h-5">
              <input
                value={value}
                id={`${id}-${value}`}
                name={id}
                type="radio"
                className="cursor-pointer border-gray-200 rounded-full disabled:opacity-50 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                onChange={(event) => onChange(event.target.value)}
              />
            </div>
            <span className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500">
              {value} - {labels[index]}
            </span>
          </label>
        </li>
      ))}
    </ul>
  ) : variant === "horizontal" ? (
    <div>
      <label className="block text-sm font-medium mb-2 dark:text-white">
        {label}
      </label>
      <div className="rounded-md border border-gray-200">
        <div className="flex">
          {values.map((value) => (
            <label
              className="flex flex-1 justify-center p-4 cursor-pointer"
              htmlFor={`${id}-${value}`}
              key={value}
            >
              <input
                type="radio"
                name={id}
                className="cursor-pointer shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 checked:border-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id={`${id}-${value}`}
                onChange={(event) => onChange(event.target.value)}
                value={value}
              />
              <span className="text-sm text-gray-500 ms-2 dark:text-neutral-400">
                {value}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        {labels.map((label, index) => (
          <span
            className="flex-1 text-center first:text-left last:text-right"
            key={index}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  ) : null;
};
