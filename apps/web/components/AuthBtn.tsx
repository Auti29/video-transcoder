import { ReactNode } from "react";


export default function AuthBtn({children, text}: {children: ReactNode, text: string}) {
    return (
        <button className="flex bg-gray-200  border border-gray30 px-6 py-1.5 justify-between items-center cursor-pointer hover:bg-gray-300">
            {children}
            <p className="ml-2 text-gray60">{text}</p>
        </button>
    )
}