"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export default function DetailsComp({
assetFile, 
setCurrpage, 
videoUrl
}: 
{
    assetFile: File | null,  
    setCurrpage: Dispatch<SetStateAction<number>>, 
    videoUrl: string | null
}) {
    const [assetTitle, setAssetTitle] = useState<string>("");

    useEffect(() => {
        if(assetFile?.name != undefined){
            setAssetTitle(assetFile.name.split('.')[0]);
        }
    }, [assetFile]);
    
    
    const handleNextpageClick = () => {
        setCurrpage(prev => prev+1);
    }

    const handleBackpageClick = () => {
        setCurrpage(prev => prev-1);
    }



    console.log(assetFile);
    console.log(videoUrl);

    return(
        <div className="text-gray60">
            <div className="mt-7"> 
                <span className=" flex justify-center items-center w-fit">
                    <p className="text-sm font-semibold mr-1 text-center">Local preview</p>
                    <CiCircleInfo size={17} className=" font-semibold"/>
                </span>
                <div className="h-65 border m-auto mt-2">
                </div>
            </div>

            <div className="mt-6">
                <span className=" flex justify-center items-center w-fit">
                    <p className="text-sm font-semibold mr-1 text-center">Title</p>
                    <CiCircleInfo size={17} className=" font-semibold"/>
                </span>
                <input
                 onChange={(e) => {
                    setAssetTitle(e.target.value);
                 }}
                 className="w-full mt-2  text-[12.5px] px-2 py-2 border bg-gray-100 font-sans border-gray40 font-semibold"
                 type="text" 
                 placeholder="file name"
                 value={assetTitle}
                 />
            </div>

            <div className="mt-6 flex justify-end">
                <button 
                onClick={handleBackpageClick}
                className="flex justify-center items-center px-6 py-2 border hover:bg-gray-200 border-gray60 rounded-full mr-1 cursor-pointer">
                    <span className="flex justify-center items-center w-fit">
                        <MdArrowBackIos size={14}/>
                        <p className="text-sm font-semibold font-sans ml-2">Back</p>
                    </span>    
                </button>
                <button 
                onClick={handleNextpageClick}
                className="flex justify-center items-center w-fit px-6 py-2 border-0 text-white hover:bg-blue-700 bg-btnblue border-gray60 rounded-full  cursor-pointer">
                    <span className="flex justify-center items-center ">
                        <p className="text-sm font-semibold font-sans mr-2">Next</p>
                        <MdArrowForwardIos size={14}/>
                    </span>    
                </button>
            </div>

        </div>
    );
}