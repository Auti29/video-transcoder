import { Underline } from "lucide-react";
import { Dispatch, SetStateAction } from "react";


type MarcTypes = "marc-1" | "marc-2";

interface DashboardActionBtnI {
    label: string, 
    marc?: MarcTypes, 
    setState?: Dispatch<SetStateAction<boolean>>
}

export default function DashboardActionBtn({label, marc, setState}: DashboardActionBtnI) {
    return(
        <button 
        onClick={() => setState && setState(true)}
        className={` text-sm hover:rounded-none transition-all duration-300 cursor-pointer px-6 py-4 font-semibold rounded-3xl w-full h-full text-center border-0 ${(!marc || marc==="marc-1") ? " bg-[#0072e3] text-white" : " bg-amber-400"} ${marc === "marc-2" && " text-black"}`}>
            {label}
        </button>
    );
}