export const Search = ({ placeholder = "", name="", value="", type="text", onChange = () => {} }) => {
    return (
        <span className="flex items-center gap-2 border border-neutral-400 p-1 px-3 rounded-sm">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className="outline-none text-sm" />
        </span>
    )
}