import Link from "next/link";
import Logo from "../../../components/Logo";
import MainGrid from "../../../components/MainGrid";
import { FaArrowLeft, FaArrowRight, FaGithub, FaGoogle } from "react-icons/fa";
import AuthBtn from "../../../components/AuthBtn";
import Input from "../../../components/Input";
import AuthSubmitBtn from "../../../components/AuthSubmitBtn";


export default function Login() {
    return (
        <MainGrid>
            <div className="h-full w-full grid grid-cols-10">
                <div className="col-span-6 flex flex-col justify-center items-center">
                    <div className="w-[85%] flex-1 border border-t-0 border-b-0"></div>
                    <div className="text-[25px] font-bold font-mono border w-full text-center border-l-0 border-r-0 ">
                        <span className="border inline-block border-t-0 border-b-0  w-[85%]">
                            <span className="w-full h-full inline-block outline outline-black rounded-3xl bg-black text-white">Transcode and serve vidoes at scale with transcodeX</span>
                        </span>
                    </div>
                    <div className="w-[85%] h-10 border border-t-0 border-b-0"></div>
                    <div className=" border flex w-full justify-center items-center border-l-0 border-r-0">
                        <div className="font-mono text-center w-[85%] border border-t-0 border-b-0">
                            <p className="bg-white outline rounded-4xl p-3">
                                Convert videos into any format in seconds. Our cloud-powered transcoding engine delivers high-quality output with optimized performance, no matter the file size or resolution.
                            </p>
                            
                        </div>
                    </div>
                    <div className="w-[85%] flex justify-center h-5 border border-t-0 border-b-0">
                        <div className="w-10 border border-t-0 border-b-0"></div>
                        <div className="w-10 border border-t-0 border-b-0 border-l-0"></div>
                    </div>
                    <div className="border w-full flex justify-center items-center border-l-0 border-r-0">
                        <div className="w-[85%] border border-t-0 border-b-0  flex justify-center items-center">
                        <button className="w-10 h-10 border border-t-0 border-b-0 flex justify-center items-center cursor-pointer hover:bg-gray-500 ">
                            <FaArrowLeft /> 
                        </button>
                        <button className="w-10 h-10 border border-t-0 border-b-0 border-l-0 flex justify-center items-center cursor-pointer hover:bg-gray-500">
                            <FaArrowRight /> 
                        </button>
                    </div>
                    </div>
                    <div className="w-[85%] flex-1 border border-t-0 border-b-0 flex justify-center  items-center">
                        <div className="w-10 h-full border border-t-0 border-b-0"></div>
                        <div className="w-10 h-full border border-t-0 border-b-0 border-l-0"></div>

                    </div>
                </div>

                <div className="col-span-4 border-l-[0.5px]  border-black ">
                    <div className="bg-white outline-[0.5px] outline-black rounded-[50px] h-full w-full flex flex-col items-center justify-center">
                        <div className=" flex flex-col items-center w-[90%]">
                            <Logo size="xl"/>
                            <h4 className="text-xl mt-6 font-bold mb-1 font-sans">Log in to your account</h4>
                            <span className="flex justify-center items-center mb-7">
                            <p className="text-gray-500 text-sm">Don't have an account? </p>
                            <Link className="underline ml-0.5 text-sm" href={'/auth/signup'}>signup</Link>
                            </span>
                            <p className="text-gray-500 text-sm">continue with:</p>
                            <div className="flex  w-[58%] justify-between mt-1 mb-7">
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
                            </div>
                            <div className="w-[58%]">
                            <AuthSubmitBtn text="continue"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MainGrid>
    )
}