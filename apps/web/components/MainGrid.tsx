import { ReactNode } from "react";

export default function MainGrid({children}: {children: ReactNode}) {
    return (
        <div className="bg-[#e2e4dd] grid grid-cols-12 h-screen w-screen">
            <div className="col-span-1  border-gray-500 h-full flex justify-center items-center"> 
                <div className="h-[90%] w-full border-b-[0.5px] border-t-[0.5px]  border-gray-500">

                </div>
            </div>

            <div className="col-span-10 border-l-[0.5px] border-r-[0.5px] border-gray-500 h-full flex justify-center items-center">
                <div className="h-[90%] w-full border-t-[0.5px] border-b-[0.5px] border-gray-500">
                    {children}
                </div>
            </div>

            <div className="col-span-1 border-r-[0.5px] border-gray-500 h-full flex justify-center items-center">
                <div className="h-[90%] w-full border-b-[0.5px] border-t-[0.5px]  border-gray-500">
                    
                </div>
            </div>
        </div>
    )
}