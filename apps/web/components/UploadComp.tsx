import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { PiVideoLight } from "react-icons/pi";

export default function UploadComp({
    setState, 
    setFile, 
    setCurrpage
}: {
    setState: Dispatch<SetStateAction<string | null>>, 
    setFile: Dispatch<SetStateAction<File | null>>, 
    setCurrpage: Dispatch<SetStateAction<number>>
}) {

    function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.files && e.target.files[0]){
            const file: File = e.target.files[0];
            setState(URL.createObjectURL(file));
            setFile(file);
            setCurrpage(2);
        }else{
            setState(null);
            setFile(null);
        }
    }


    return(
        <div>
            <div className="mt-7">
                <p className="text-sm font-semibold">Upload from your device</p>
                <div className="rounded-lg mt-3 h-50 w-full bg-blue-200 flex flex-col justify-center items-center text-gray60 hover:border-2 hover:border-blue-400">
                    <input 
                    onChange={handleFileUpload}
                    type="file" id="input" name="input_video" accept="video/mp4, video/mov" 
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
                    <button className="flex-1 py-2 text-[13px] border border-[#0072e3]   bg-[#0072e3] text-white font-semibold rounded-none font-sans ml-0.5  cursor-pointer hover:bg-blue-500">FETCH</button>
                </div>
            </div>

            <div className="mt-6">
                <span className="text-sm font-semibold">Upload using API</span>
                <Link href={'/docs'}>
                    <div className="flex w-full justify-baseline items-center mt-2 border pl-5 py-5 rounded-lg border-gray40 hover:bg-blue-100 hover:border-blue-600 cursor-pointer hover:shadow-md">
                        <PiVideoLight
                        className="text-gray40 mr-5"
                        size={40}/>
                            <div className="flex flex-col text-gray60">
                            <span className="font-bold text-[14px] font-sans">{"Developer Upload (API)"}</span>
                            <span className="text-[13px] text-gray50 font-sans underline decoration-gray50 font-semibold">Integrate video uploads directly from your backend using our REST API</span>
                        </div>
                    
                    </div>
                </Link>
            </div>

        </div>
    )
}