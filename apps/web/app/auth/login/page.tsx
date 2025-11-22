import Link from "next/link";
import Logo from "../../../components/Logo";
import MainGrid from "../../../components/MainGrid";
import { GithubIcon } from "lucide-react";
import { FaGithub, FaGoogle } from "react-icons/fa";


export default function Login() {
    return (
        <MainGrid>
            <div className="h-full w-full grid grid-cols-10">
                <div className="bg-amber-400 col-span-6">

                </div>

                <div className="col-span-4 border-l-[0.5px]  border-black ">
                    <div className="bg-white outline-[0.5px] outline-black rounded-[50px] h-full w-full flex flex-col items-center">
                        <Logo />
                        <h4>log in to your account</h4>
                        <span className="flex">
                        <p>don't have an account? </p>
                        <Link href={'/signup'}>signup</Link>
                        </span>
                        <div >
                            <p>continue with:</p>
                            <div className="flex">
                            <button className="flex">
                                    <FaGithub />
                                    <p>github</p>
                            </button>
                             <button className="flex">
                                    <FaGoogle />
                                    <p>google</p>
                            </button>
                            </div>
                        </div>
                        <label>
                            username: 
                        </label>
                        <input type="text" placeholder="johndoe" />
                        <label>
                            password: 
                        </label>
                        <input type="password" placeholder="passcode" />
                        <button>
                            continue
                        </button>
                    </div>
                </div>

            </div>
        </MainGrid>
    )
}