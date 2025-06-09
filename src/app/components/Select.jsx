export const Select = ({ initialValue="", name="", onChange = () => {} }) => {
    return (
        <select defaultValue={initialValue} name={name} className="outline-none text-sm" onChange={onChange}>
            <option value="name">
                Nombre
            </option>
            <option value="price">
                Precio (menor a)
            </option>
            <option value="stock">
                Stock (menor a)
            </option>
        </select>
    )
}