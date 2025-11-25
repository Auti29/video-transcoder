import { ReactNode } from "react";

export default function SidebarComp({label, children}: {label: string, children: ReactNode}) {
    return (
        <span className="flex w-40 mb-3 py-2 pl-2 border-0 rounded-lg pr-2 hover:bg-[#d6d9cf]">
            {children}
            <span className="hidden group-hover:inline ml-4 flex-1">{label}</span>
        </span>
    );
}