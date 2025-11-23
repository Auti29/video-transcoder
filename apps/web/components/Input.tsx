

export default function Input({label, placeholder, type}: {label: string, placeholder: string, type: string}) {
    return (
        <div className="flex flex-col w-full my-0.5">
            <label className="text-sm text-gray60 mb-0.5">
              {label}: 
            </label>
            <input
            className="px-2 py-1 border border-gray40 text-center"
            type={type} placeholder={placeholder} />
        </div>
    );
}