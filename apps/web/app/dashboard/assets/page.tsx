import ActionBtn from "../../../components/ActionBtn";
import AssetRow from "../../../components/AssetRow";
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
                    <div className="flex w-full items-center justify-between">
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

                    
                    <div className="flex flex-col items-center w-full mt-6 px-3 ">
                            <div className="w-full border-b border-gray30 grid grid-cols-12 text-[13px] font-semibold pt-1 pb-3 text-gray50">
                                <div className="col-span-1"></div>
                                <div className="col-span-4  pl-2">TITLE/ID</div>
                                <div className="col-span-2  flex w-full items-center justify-center pl-2">DURATION</div>
                                <div className="col-span-2  flex w-full items-center justify-center pl-2">STATUS</div>
                                <div className="col-span-2  flex w-full items-center justify-center pl-2">CREATED AT</div>
                                <div className="col-span-1  flex w-full items-center justify-center pl-2">DETAILS</div>
                            </div>
                            <AssetRow />
                            <AssetRow />
                            <AssetRow />
                            <AssetRow />
                            <AssetRow />
                    </div>
                </div>
            </div>
        </div>
    )
}