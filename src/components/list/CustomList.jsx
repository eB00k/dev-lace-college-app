import { SquareCheck } from "lucide-react";
import { twMerge } from "tailwind-merge";

function CustomList({ list, className = "" }) {
  console.log(list);
  return (
    <ul
      className={twMerge("max-w-md space-y-1 list-inside text-sm", className)}
    >
      {list.map((req, index) => (
        <li key={index} className="flex items-center">
          <span>
            <SquareCheck className={"h-4 w-4 me-2 text-main font-bold"} />
          </span>
          {req.text}
        </li>
      ))}
    </ul>
  );
}

export default CustomList;
