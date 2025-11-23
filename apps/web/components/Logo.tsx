
type sizeOptions = "sm" | "md" | "lg" | "xl" | "2xl";

const selectSize: Record<sizeOptions, string> = {
    "sm": "10px",
    "md": "15px", 
    "lg": "20px", 
    "xl": "25px", 
    "2xl": "30px"
}


export default function Logo({size}: {size: sizeOptions}) {
    return(
        <div className="flex">
            <h2 className={`font-gugi text-[${selectSize[size]}] font-bold`}>transcodeX</h2>
        </div>
    );
}