import { useNavigate } from "react-router"

import { useForm } from "../../hooks"
import { useNewProduct } from "../hooks"

import { AppLayout } from "../layout"
import { Input } from "../components"

export const NewProductPage = () => {

    const navigate = useNavigate()

    const { name, price, description, stock, onChange } = useForm({
        name: "",
        price: "",
        description: "",
        stock: "",
    })
    const { createProduct } = useNewProduct()

    const onAdd = (e) => {

        e.preventDefault()

        createProduct(name, price, description, stock)
    }

    const onBack = () => {
        navigate(-1)
    }

    return (
        <AppLayout>
            <section className="mt-5 w-2/3 border border-neutral-300 shadow-md rounded-sm p-4 mx-auto">
                <h1 className="text-center font-semibold text-lg">
                    Agregar producto
                </h1>
                <form className="flex flex-col gap-4" onSubmit={onAdd}>
                    <Input label="Nombre *" onChange={onChange} value={name} name="name" />
                    <Input type="number" label="Precio *" onChange={onChange} value={price} name="price" />
                    <Input label="Description *" onChange={onChange} value={description} name="description" />
                    <Input type="number" label="Stock *" onChange={onChange} value={stock} name="stock" />
                    <span className="flex gap-4">
                        <button type="button" className="w-full bg-red-700 p-1 rounded-sm font-semibold cursor-pointer hover:text-blue-300 text-white"
                            onClick={onBack}
                        >
                            Volver
                        </button>
                        <button className="w-full bg-neutral-700 p-1 rounded-sm font-semibold cursor-pointer hover:text-blue-300 text-white">
                            Guardar
                        </button>
                    </span>
                </form>
            </section>
        </AppLayout>
    )
}