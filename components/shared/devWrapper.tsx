import React, { ReactNode } from "react";

interface Breakpoint {
  name: string;
  color: string;
  visible: string;
}

interface DevWrapperProps {
  children?: ReactNode;
  color?: boolean;
  text?: boolean;
}

const breakpoints: Breakpoint[] = [
  { name: "XS", color: "bg-amber-600", visible: "block sm:hidden" },
  { name: "SM", color: "bg-green-500", visible: "hidden sm:block md:hidden" },
  { name: "MD", color: "bg-red-500", visible: "hidden md:block lg:hidden" },
  { name: "LG", color: "bg-yellow-400", visible: "hidden lg:block xl:hidden" },
  { name: "XL", color: "bg-pink-300", visible: "hidden xl:block 2xl:hidden" },
  { name: "2XL", color: "bg-teal-500", visible: "hidden 2xl:block 3xl:hidden" },
  { name: "3XL", color: "bg-blue-500", visible: "hidden 3xl:block" },
];

export const DevWrapper: React.FC<DevWrapperProps> = ({
  children,
  color = true,
  text = true,
}) => {
  return (
    <div className="relative w-full h-screen portrait:max-h-[780px]">
      {breakpoints.map((bp) => (
        <div
          key={bp.name}
          className={`${color ? bp.color : ""} ${
            bp.visible
          } absolute flex items-start`}
        >
          {/* Text Breakpoint */}
          {text && (
            <div className="absolute top-0 left-0 m-4 p-5 z-50 text-white font-bold text-4xl border-4 bg-black">
              {bp.name}
            </div>
          )}

          {/* Container Children */}
          <div className="w-full">{children}</div>
        </div>
      ))}
    </div>
  );
};
