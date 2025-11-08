import WebIcon from "@/components/icons/web";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export const Navigations = ({
  navigations,
  onPressed,
}: {
  onPressed: (url: string) => void;
  navigations: {
    url: string;
    rated?: number;
  }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref) return;
    ref.current?.scrollTo({
      top: ref.current.scrollHeight,
      behavior: "smooth",
    });
  }, [navigations]);

  const hasNavigations = navigations.length === 0;

  return (
    <div
      id="list"
      className="grid overflow-hidden"
      style={{ gridTemplateRows: "auto 1fr" }}
    >
      <div className="block font-semibold mb-2 text-neutral-950">
        Recursos calificados
      </div>
      <div
        ref={ref}
        className={clsx(
          "flex flex-col gap-2 px-2 py-3 border border-gray-200 rounded-md overflow-y-auto",
          hasNavigations && "justify-center items-center"
        )}
      >
        {hasNavigations ? (
          <span className="text-gray-500">
            Aún no se ha calificado ningún recurso.
          </span>
        ) : (
          navigations.map((n, i) => (
            <div
              key={i}
              className="flex gap-4 cursor-pointer hover:bg-gray-100"
              onClick={() => onPressed(n.url)}
            >
              <div className="flex items-center">
                <WebIcon />
              </div>
              <span className="flex-1 break-all line-clamp-2 font-medium">
                {n.url}
              </span>
              <div className="flex items-center px-4">
                <span className="text-blue-600 font-semibold">{n.rated}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
