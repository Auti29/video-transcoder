import Link from "next/link";
import { RefObject, useState } from "react";
import { PiVideoLight } from "react-icons/pi";
import UploadComp from "./UploadComp";
import { MdDone } from "react-icons/md";

interface AddAssetI {
    ref: RefObject<HTMLDivElement | null>;
}

export default function AddAsset({ref}: AddAssetI) {
    const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [currpage, setCurrpage] = useState(1);


    return(
        <div ref={ref} className="bg-white w-[38%] px-6 py-6 rounded-lg shadow-xl text-gray60">
            <h2 className="text-[22px] font-sans font-bold">Upload asset</h2>
            <p className="text-sm font-semibold font-sans mt-1 text-gray50">{"Upload. Transcode. Stream."}</p>
            <div className="w-[60%] m-auto flex justify-between items-center mt-5">
                <div className="flex flex-col items-center justify-center ">
                    <span className={`text-sm  ${currpage === 1 ? " text-gray60 font-bold": " text-gray30 font-semibold"} mb-2`}>
                        Upload
                    </span>
                    <div className={`flex justify-center items-center w-5 h-5 ${currpage >= 1 ? " bg-blue-500 " : " bg-gray30 border-0"}  rounded-full text-center text-[12px] text-white font-bold`}>{currpage > 1 ? <MdDone size={15} /> : 1}</div>
                </div>
                <span className={`text-center h-5  mt-4 ${currpage > 1 ? " text-blue-500 font-extrabold" :" text-gray30"}`}>-----------</span>
                <div className="flex flex-col items-center justify-center ">
                    <span className={`text-sm  ${currpage === 2 ? " text-gray60 font-bold": " text-gray30 font-semibold"} mb-2`}>
                        Details
                    </span>
                    <div className={`flex justify-center items-center w-5 h-5 ${currpage >= 2 ? " bg-blue-500" : " bg-gray30"} border-0 rounded-full text-center text-[12px] text-white font-semibold`}>{currpage > 2 ? <MdDone size={15} /> : 2}</div>
                </div>
                <span className={`text-center h-5  mt-4 ${currpage > 2 ? " text-blue-500 font-extrabold" :" text-gray30"}`}>-----------</span>
                <div className="flex flex-col items-center justify-center">
                    <span className={`text-sm  ${currpage === 3 ? " text-gray60 font-bold": " text-gray30 font-semibold"} mb-2`}>
                        Review
                    </span>
                    <div className={`flex justify-center items-center w-5 h-5 ${currpage >= 3 ? " bg-blue-500" : " bg-gray30"} border-0 rounded-full text-center text-[12px] text-white font-semibold`}>{currpage > 3 ? <MdDone size={15} /> : 3}</div>
                </div>
            </div>
            {
                currpage === 1 
                &&
                <UploadComp setState={setSelectedVideoUrl} setFile={setSelectedFile}/>
            }
        
        </div>
    );
}