import Link from "next/link";
import { RefObject } from "react";
import { PiVideoLight } from "react-icons/pi";

interface AddAssetI {
    ref: RefObject<HTMLDivElement | null>;
}

export default function AddAsset({ref}: AddAssetI) {
    return(
        <div ref={ref} className="bg-white w-[38%] px-6 py-6 rounded-lg shadow-xl text-gray60">
            <h2 className="text-[22px] font-sans font-bold">Upload asset</h2>
            <p className="text-sm font-semibold font-sans mt-1 text-gray50">{"Upload. Transcode. Stream."}</p>
            <div className="w-[60%] m-auto flex justify-between items-center mt-5">
                <div className="flex flex-col items-center justify-center ">
                    <span className="text-sm font-semibold text-gray40 mb-2">
                        Upload
                    </span>
                    <div className="w-5 h-5 bg-gray30 border-0 rounded-full text-center text-[12px] text-white font-semibold">1</div>
                </div>
                <span className="text-center h-5  mt-4 text-gray30">-----------</span>
                <div className="flex flex-col items-center justify-center ">
                    <span className="text-sm font-semibold text-gray40 mb-2">
                        Details
                    </span>
                    <div className="w-5 h-5 bg-gray30 border-0 rounded-full text-center text-[12px] text-white font-semibold">2</div>
                </div>
                <span className="text-center h-5 mt-4 text-gray30">-----------</span>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-semibold text-gray40 mb-2">
                        Review
                    </span>
                    <div className="w-5 h-5 bg-gray30 border-0 rounded-full text-center text-[12px] text-white font-semibold">3</div>
                </div>
            </div>

            <div className="mt-7">
                <p className="text-sm font-semibold">Upload from your device</p>
                <div className="rounded-lg mt-3 h-50 w-full bg-blue-200 flex flex-col justify-center items-center text-gray60 hover:border-2 hover:border-blue-400">
                    <input type="file" id="input" name="input_video" accept="video/mp4, video/mov" 
                    className="hidden"/>
                    <label htmlFor="input" className="font-sans font-semibold flex justify-center items-center h-full w-full cursor-pointer hover:underline">upload a local .mp4 file</label>
                </div>
            </div>

            <div className="mt-6 flex flex-col w-full py-1 justify-center items-baseline">
                <label className="text-sm font-semibold">Upload from public URL</label>
                <div className= "h-fit mt-2 w-full flex justify-center items-center ">
                    <input 
                    className="w-[80%] text-[12.5px] px-2 py-2 border bg-gray-100 font-sans border-gray40"
                    type="text" 
                    placeholder="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"/>
                    <button className="flex-1 py-2 text-[13px] border border-[#0072e3]   bg-[#0072e3] text-white font-semibold rounded-none font-sans ml-0.5  cursor-pointer">FETCH</button>
                </div>
            </div>

            <div className="mt-6">
                <span className="text-sm font-semibold">Upload using API</span>
                <div className="flex w-full justify-baseline items-center mt-2 border pl-5 py-5 rounded-lg border-gray40 hover:bg-blue-200 hover:border-blue-600 cursor-pointer hover:shadow-md">
                    <PiVideoLight
                    className="text-gray40 mr-5"
                    size={40}/>
                    <Link href={'/docs'}>
                        <div className="flex flex-col text-gray60">
                        <span className="font-bold text-[14px] font-sans">{"Developer Upload (API)"}</span>
                        <span className="text-[13px] text-gray50 font-sans underline decoration-gray50 font-semibold">Integrate video uploads directly from your backend using our REST API</span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}