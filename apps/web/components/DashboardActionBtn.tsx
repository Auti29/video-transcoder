

type MarcTypes = "marc-1" | "marc-2";

interface DashboardActionBtnI {
    label: string, 
    marc?: MarcTypes
}

export default function DashboardActionBtn({label, marc}: DashboardActionBtnI) {
    return(
        <button className={` text-sm hover:rounded-none transition-all duration-300 cursor-pointer px-6 py-4 font-semibold rounded-3xl w-full h-full text-center border-0 ${(!marc || marc==="marc-1") ? " bg-[#0072e3] text-white" : " bg-amber-400"} ${marc === "marc-2" && " text-black"}`}>
            {label}
        </button>
    );
}