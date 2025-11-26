import { GrUserAdmin } from "react-icons/gr";
import Logo from "./Logo";
import { GoOrganization, GoQuestion } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

export default function DashboardNavbar(){
    return(
        <div className="flex w-full bg-gray60 h-15 items-center text-white px-5 justify-between">
            <div className="flex items-center text-center">
                <Logo size="2xl" color="white"/>
                <span className="text-[29px] mx-4 mb-1 text-gray40">/</span>
                <span className="flex items-center">
                <GoOrganization className="mr-2"/> 
                <h3 className="text-sm font-bold">username</h3>
                </span>
            </div>

            <div className="flex items-center">
                <span className="border border-gray50 rounded-lg px-3 py-1 text-sm text-center mr-3 hover:bg-gray50 cursor-pointer">Feedback</span>
                <span className="text-2xl hover:bg-gray50 p-1 rounded-lg mr-3 cursor-pointer">
                <GoQuestion />

                </span>
                <span className="text-2xl hover:bg-gray50 p-1 rounded-lg cursor-pointer">
                    <FiUser />
                </span>
            </div>
        </div>
    )
}