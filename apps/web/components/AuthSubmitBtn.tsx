import { IoMdArrowDropright } from "react-icons/io";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


export default function AuthSubmitBtn({text}: {text: string}) {
    return (
        <button className="font-mono font-bold border border-gray50 w-full px-2 py-3 rounded-full bg-amber-400 cursor-pointer hover:bg-amber-500 flex justify-center items-center">
            {text}
            <MdKeyboardDoubleArrowRight />
        </button>
    )
}