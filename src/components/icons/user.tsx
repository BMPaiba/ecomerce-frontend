import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function PersonIcon({
  className,
}: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-full", className)}
    >
      <path
        d="m5.559 16.094-.567.406.567.406A8.44 8.44 0 0 0 10.5 18.5c1.85 0 3.55-.596 4.942-1.594l.566-.406-.566-.406A8.44 8.44 0 0 0 10.5 14.5a8.44 8.44 0 0 0-4.941 1.594Zm10.773-.58.382.298.31-.372A8.46 8.46 0 0 0 19 10c0-4.696-3.804-8.5-8.5-8.5A8.5 8.5 0 0 0 2 10c0 2.072.745 3.965 1.976 5.44l.31.372.382-.298a9.45 9.45 0 0 1 11.664 0ZM1 10C1 4.756 5.256.5 10.5.5S20 4.756 20 10s-4.256 9.5-9.5 9.5S1 15.244 1 10Zm6.5-2.5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3Zm1 0c0 1.106.894 2 2 2s2-.894 2-2-.894-2-2-2-2 .894-2 2Z"
        fill="#0C0C0C"
        stroke="#5D4FC4"
      />
    </svg>
  );
}
