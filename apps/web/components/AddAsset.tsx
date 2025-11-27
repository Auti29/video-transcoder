import { RefObject } from "react";

interface AddAssetI {
    ref: RefObject<HTMLDivElement | null>;
}

export default function AddAsset({ref}: AddAssetI) {
    return(
        <div ref={ref} className="bg-white p-6 rounded-lg shadow-xl">
            I am a modal
        </div>
    );
}