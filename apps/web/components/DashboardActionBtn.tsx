

type MarcTypes = "marc-1" | "marc-2";

interface DashboardActionBtnI {
    label: string, 
    marc?: MarcTypes
}

export default function DashboardActionBtn({label, marc}: DashboardActionBtnI) {
    return(
        <button className={`hover:rounded-none transition-all duration-300 cursor-pointer px-6 py-4 font-semibold rounded-3xl w-full h-full text-center ${(!marc || marc==="marc-1") ? " bg-[#0072e3] border-0 text-white" : " bg-blue-300"} ${marc === "marc-2" && " border-3 text-black border-[#0072e3]"}`}>
            {label}
        </button>
    );
}