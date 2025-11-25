"use client";
import { GithubIcon } from "lucide-react";
import { useState } from "react";
import { GoGraph } from "react-icons/go";
import { IoEyeOutline, IoEyeSharp, IoVideocamOutline } from "react-icons/io5";
import { LiaBuffer } from "react-icons/lia";
import { LuBoxes, LuBug } from "react-icons/lu";
import { MdErrorOutline, MdOutlineNetworkCheck } from "react-icons/md";
import { PiGraph, PiTimer } from "react-icons/pi";
import { RiFileHistoryLine } from "react-icons/ri";
import SidebarComp from "./SidebarComp";

export default function DashboardSidebar() {
    // const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <div className={`h-full w-full bg-[#ecede8] border-r border-gray-400 text-gray60 py-5 group text-sm`}>
            <div className="pl-6">
                <h3 className="text-[13px] font-bold">VIDEO</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                    <SidebarComp label="Assets">
                        <IoVideocamOutline size={23} />
                    </SidebarComp>
                    {/* <SidebarComp label="History">
                        <RiFileHistoryLine size={23} />  
                    </SidebarComp> */}
                     
                </div>
            </div>

            <div className="pl-6">
                <h3  className="text-[13px] font-bold ml-1">DATA</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                        <SidebarComp label="Overview">
                            <PiGraph size={23} />
                        </SidebarComp>
                        <SidebarComp label="Views">
                            <IoEyeOutline size={23} />
                        </SidebarComp>
                        <SidebarComp label="Errors">
                            <MdErrorOutline size={23} />
                        </SidebarComp>
                        <SidebarComp label="Metrics">
                            <GoGraph size={23} />
                        </SidebarComp>
                        <SidebarComp label="Logs">
                            <LiaBuffer size={23} />
                        </SidebarComp>
                </div>
            </div>

            <div className="pl-6">
                <h3 className="text-[13px] font-bold">OTHER</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                       <SidebarComp label="Documentation">
                            <LuBoxes size={23}/>
                       </SidebarComp>
                       <SidebarComp label="Contribute">
                            <GithubIcon size={23} />
                       </SidebarComp>
                       <SidebarComp label="Report bug">
                            <LuBug size={23}/> 
                       </SidebarComp>
                </div>
            </div>
        </div>
    )
}