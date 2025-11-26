import ActionBtn from "../../../components/ActionBtn";
import DashboardActionBtn from "../../../components/DashboardActionBtn";
import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";


export default function AssetsPage() {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col">
            <DashboardNavbar />
            <div className="flex-1 overflow-hidden grid grid-cols-18 ">
                <div className="col-span-1 hover:w-48 transition-all duration-300 ease-in-out z-20">
                <DashboardSidebar />
                </div>
                
                {/* main comp */}
                <div className="col-span-17 pt-5 px-8">
                    <div className=" flex w-full items-center justify-between">
                        <h2 className="text-2xl font-bold font-sans text-gray60">ASSETS</h2>
                        <div className="grid grid-cols-16">
                             <div className="col-span-1 py-2">
                                <div className="border-t border-b border-gray30 h-full"></div>
                            </div>
                            <div className="col-span-7 border-l border-r border-gray30  flex justify-center items-center h-full py-2 ">
                                <span className="border-t border-b border-gray30 w-full">
                                <DashboardActionBtn label="Create new asset"/>
                                </span>
                            </div>
                            <div className="col-span-7  flex border-r border-gray30 justify-center items-center h-full py-2 ">
                                <span className="border-t border-b border-gray30 w-full">
                                <DashboardActionBtn label="See all assets" marc="marc-2"/>
                                </span>
                            </div>
                            <div className="col-span-1 py-2">
                                <div className="border-t border-b border-gray30 h-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}