type sizeOptions = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

export default function Logo({size, color}: {size: sizeOptions, color?:string}) {
    return(
        <div className="flex">
            <h2 className={`font-gugi text-${size} font-bold ${color && `text-${color}`}`}>transcodeX</h2>
        </div>
    );
}