export const Input = ({ label = "no label", type = "text", value="", name="", onChange=() => { } }) => {
    return (
        <div className="flex flex-col relative">
            <input type={type} onChange={onChange}
                className="w-full outline-none border-b border-neutral-500 p-2 peer/input text-sm z-20"
                placeholder=""
                value={value}
                name={name}
            />
            <label className="absolute left-2 -top-3 text-sm z-10 text-neutral-600 transition-all
                peer-placeholder-shown/input:top-1/2
                peer-placeholder-shown/input:-translate-y-1/2
                peer-placeholder-shown/input:text-base    
            ">
                {label}
            </label>
        </div>
    )
}