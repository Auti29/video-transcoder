import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import MainGrid from "./MainGrid";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
import Input from "./Input";
import AuthSubmitBtn from "./ActionBtn";
import ActionBtn from "./ActionBtn";


type AuthPageType = "login" | "signup";

interface AuthBaseGridI {
    page: AuthPageType;
}

export default function AuthBaseGrid({page}: AuthBaseGridI) {
    return (
        <MainGrid>
            <div className="h-full w-full grid grid-cols-10">
                <div className="col-span-6 flex flex-col justify-center items-center">
                    <div className="flex-1 flex border-0 justify-between items-center px-5 w-full ">
                        <div className=" border border-r-0 border-gray-500 h-full w-[50%] border-t-0 border-b-0 ">
                        </div>
                        <div className="flex flex-col justify-center items-center border border-gray-500 h-full w-[50%] border-t-0 border-b-0 p-2"></div>
                    </div>

                    <div className="flex w-full border border-l-0 border-r-0 border-b-0 border-gray-500 justify-between items-center ">
                        <div className="w-5 h-full bg-amber-400"></div>
                        <div className=" border border-r-0 border-gray-500 h-full w-[50%] border-t-0 border-b-0">
                            <div className="rounded-r-[35px] outline outline-gray-500 bg-gray60 text-white flex flex-col justify-center items-center h-full w-full px-5 py-9">
                            <h2 className="font-bold text-lg">Parallel Processing at Scale</h2>
                            <p className="text-sm text-center text-[#adb9c6] px-3">
                                Your videos are processed by automatically scaled worker nodes. Whether you upload one video or a thousand, our system ensures consistent speed and reliability.                        
                            </p>
                            </div>
                        </div>

                        <div className=" border border-gray-500 h-full w-[50%] border-t-0 border-b-0 ">
                        <div className="rounded-l-[35px] outline outline-gray-500 bg-gray60 text-white flex flex-col justify-center items-center h-full w-full px-5 py-9">
                            <h2 className="font-bold text-lg">Upload Once, Deliver Everywhere</h2>
                            <p className="text-sm text-center text-[#adb9c6] px-3">
                                Transcode to MP4, HLS, DASH, or custom presets. Get playback-ready URLs that work seamlessly across all devices, platforms, and networks.                        
                            </p>    
                        </div>
                        </div>
                        <div className="w-5 h-full bg-[#00be43]"></div>

                    </div>


                    <div className="flex w-full border border-l-0 border-r-0 border-gray-500 justify-between items-center">
                        <div className="w-5 h-full bg-[#0072e3]"></div>

                        <div className=" border border-r-0 border-gray-500 h-full w-[50%] border-t-0 border-b-0">
                            <div className="rounded-r-[35px] outline outline-gray-500 bg-gray60 text-white flex flex-col justify-center items-center h-full w-full px-5 py-9">
                            <h2 className="font-bold text-lg">Real-Time Status Tracking </h2>
                            <p className="text-sm text-center text-[#adb9c6] px-3">
                                    Monitor your transcoding jobs in real time. From upload to processing to completion you know exactly where each video stands.    
                            </p>

                            </div>
                        </div>
                        <div className=" border border-gray-500 h-full w-[50%] border-t-0 border-b-0 ">
                            <div className="rounded-l-[35px] outline outline-gray-500 bg-gray60 text-white flex flex-col justify-center items-center h-full w-full px-5 py-9">
                            <h2 className="font-bold text-lg">Developer-Friendly API</h2>
                            <p className="text-sm text-center text-[#adb9c6] px-3">
                                Easily integrate video transcoding into your apps with a clean, modern REST API. Queue jobs, track progress, and retrieve URLs with just a few lines of code.                        
                            </p>
                            </div>
                        </div>
                        <div className="w-5 h-full bg-[#CF2017]"></div>

                    </div>

                     <div className="flex-1 flex border-0 justify-between items-center px-5 w-full ">
                        <div className=" border border-r-0 border-gray-500 h-full w-[50%] border-t-0 border-b-0">
                        </div>
                        <div className="flex flex-col justify-center items-center border border-gray-500 h-full w-[50%] border-t-0 border-b-0 p-2"></div>
                    </div>
                </div>

                <div className="col-span-4 border-l-[0.5px]  border-gray-500 ">
                    <div className="bg-white outline-[0.5px] outline-gray-500 rounded-[50px] h-full w-full flex flex-col items-center justify-center">
                        <div className=" flex flex-col items-center w-[90%]">
                            <Logo size="3xl"/>
                            {page === "login" ? 
                            (
                            <h4 className="text-xl mt-5 font-bold mb-1 font-sans max-w-[62%] text-center">
                                <span className="underline">Log in</span> <span>to your account</span>
                            </h4>
                            ): 
                            (
                            <h4 className="text-xl mt-5 font-bold mb-1 font-sans max-w-[62%] text-center">
                                Transcode and build scalable video workflows effortlessly.
                            </h4>
                            )
                            }
                            <span className="flex justify-center items-center mb-7">
                            <p className="text-gray-500 text-sm">
                                    {`${page === "login" ? "Don't have an account?": "Already have an account?"}`}
                            </p>
                            {page === "login" ? <Link className="underline ml-0.5 text-sm" href={'/auth/signup'}>signup</Link> : 
                                <Link className="underline ml-0.5 text-sm" href={'/auth/login'}>login</Link> 
                            }
                            </span>
                            <p className="text-gray-500 text-sm">continue with:</p>
                            <div className="flex  w-[62%] justify-between mt-1 mb-7">
                                <AuthBtn text="Github">
                                    <FaGithub size={20}/>
                                </AuthBtn>
                                <AuthBtn text="Google">
                                    <FaGoogle size={20}/>
                                </AuthBtn>
                            </div>
                            <div className="w-[58%] py-1 mb-7">
                            <Input type="text" placeholder="johndoe123" label="Username"/>
                            <Input type="password" placeholder="passcode" label="Password"/>
                            {
                                page === "signup" &&
                                <Input type="email" placeholder="johndoe@gmail.com" label="Email" />
                            }
                            </div>
                            <div className="w-[58%]">
                            <ActionBtn text="continue"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainGrid>

    )
}