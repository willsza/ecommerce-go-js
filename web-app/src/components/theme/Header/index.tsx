import { ReactNode } from "react";

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="flex items-center border-b-[1px]">{children}</header>
  );
}
