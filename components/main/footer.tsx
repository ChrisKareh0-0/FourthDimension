import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-[#030014] text-gray-200 shadow-lg p-[30px] border-t border-[#2A0E61]/50">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap gap-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[250px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[18px] text-[rgb(112,66,248)] mb-4">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[12px] hover:text-[rgb(112,66,248)] transition-colors duration-300"
                >
                  {Icon && <Icon className="text-[18px] mr-3" />}
                  <span className="text-[15px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-[30px] text-[15px] text-center text-gray-400">
          &copy; Fourth Dimension {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
