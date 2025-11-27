import { IoIosInformationCircleOutline } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";

export default function AssetRow() {
    return (
        <div className="w-full grid grid-cols-12 pt-4 pb-4 border-b border-gray30 cursor-pointer hover:bg-gray-200">
            <div className="col-span-1 text-center flex w-full justify-center items-center text-gray50">
                <TfiVideoClapper size={20}/>
            </div>
            <div className="col-span-4 pl-2 w-full flex flex-col justify-center items-baseline flex-wrap">
                <span className="text-gray60 font-semibold text-[15px]">user_video_title_01</span>
                <span className="text-gray40 text-[13px]">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4i</span>
            </div>
            <div className="col-span-2 pl-2 flex w-full items-center justify-center flex-wrap">
                <span className="text-gray60 font-sans text-[14px] ">14:20</span>
            </div>
            <div className="col-span-2  pl-2 flex w-full items-center justify-center flex-wrap">
                <span className="text-gray60 font-sans text-[14px] ">Ready</span>
            </div>
            <div className="col-span-2 pl-2 flex w-full items-center justify-center flex-wrap">
                <span className="text-gray60 font-sans text-[14px] ">Nov 26, 8:20 PM</span>
            </div>
            <div className="col-span-1 pl-2 flex w-full items-center justify-center flex-wrap">
                <span className="text-gray50"><IoIosInformationCircleOutline size={23}/></span>
            </div>
        </div>
    );
}