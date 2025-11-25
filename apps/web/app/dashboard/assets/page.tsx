import DashboardNavbar from "../../../components/DashboardNavbar";
import DashboardSidebar from "../../../components/DashboardSidebar";


export default function AssetsPage() {
    return (
        <div className="h-screen w-screen overflow-hidden flex flex-col">
            <DashboardNavbar />
            <div className="flex-1 overflow-hidden grid grid-cols-18 ">
                <div className="col-span-1 hover:w-48 transition-all duration-2000 ease-in-out z-20">
                <DashboardSidebar />
                </div>
            
                <div className="col-span-17 ">
                    main component
                </div>
            </div>
        </div>
    )
}