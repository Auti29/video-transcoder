"use client";
import { IoEyeOutline, IoEyeSharp, IoVideocamOutline } from "react-icons/io5";
import { PiBugBeetleLight, PiCodeLight, PiCodepenLogoLight, PiGraph, PiGraphLight, PiStackLight, PiTimer, PiVideoLight } from "react-icons/pi";
import SidebarComp from "./SidebarComp";
import Link from "next/link";
import { VscGithubAlt } from "react-icons/vsc";
import { CiBeaker1, CiMicrochip, CiNoWaitingSign, CiPalette, CiWavePulse1 } from "react-icons/ci";
import { usePathname } from "next/navigation";

export default function DashboardSidebar() {
    // const [isHovered, setIsHovered] = useState<boolean>(false);
    const pathname = usePathname()
    console.log(pathname);

    return (
        <div className={`h-full w-full bg-[#ecede8] border-r border-gray-400 text-gray60 py-5 group text-sm`}>
            <div className="pl-6">
                <h3 className="text-[13px] font-bold">VIDEO</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                    <Link href={'/dashboard/assets'}>
                        <SidebarComp label="Assets">
                            <PiVideoLight size={23} />
                        </SidebarComp>
                    </Link>
                    <Link href={'/dashboard/comps'}>
                        <SidebarComp label="Components">
                            <PiCodeLight size={23} />
                        </SidebarComp>
                    </Link>
                    <Link href={'/dashboard/integrate'}>
                        <SidebarComp label="Add to your app">
                            <PiCodepenLogoLight className="font-normal" size={23} />
                        </SidebarComp>
                    </Link>
                     
                </div>
            </div>

            <div className="pl-6">
                <h3  className="text-[13px] font-bold ml-1">DATA</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                    <Link href={'/dashboard/data/overview'}>
                        <SidebarComp label="Overview">
                            <PiGraphLight size={23} />
                        </SidebarComp>
                    </Link>
                    <Link href={'/dashboard/data/views'}>
                        <SidebarComp label="Views">
                            <IoEyeOutline size={23} />
                        </SidebarComp>
                    </Link>
                    <Link href={'/dashboard/data/metrics'}>
                        <SidebarComp label="Metrics">
                            <CiWavePulse1 size={25} />
                        </SidebarComp>
                    </Link>
                        <SidebarComp label="Logs">
                            <PiStackLight size={23} />
                        </SidebarComp>
                        <SidebarComp label="Errors">
                            <CiNoWaitingSign size={21} />
                        </SidebarComp>
                </div>
            </div>

            <div className="pl-6">
                <h3 className="text-[13px] font-bold">OTHER</h3>
                <div className="flex flex-col justify-center items-baseline w-fit pt-3 text-[#53585d]">
                       <SidebarComp label="Documentation">
                            <CiPalette size={25}/>
                       </SidebarComp>
                        <Link href={'https://github.com/Auti29/video-transcoder'} target="_blank">
                            <SidebarComp label="Contribute">
                                <VscGithubAlt size={23} />
                            </SidebarComp>
                        </Link>
                       <SidebarComp label="Report bug">
                            <PiBugBeetleLight size={23}/> 
                       </SidebarComp>
                </div>
            </div>
        </div>
    )
}