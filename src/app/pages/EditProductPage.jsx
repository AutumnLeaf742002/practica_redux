import { Navigate, useNavigate, useParams } from "react-router"
import { useSelector } from "react-redux"
import { useEffect } from "react"

import { useForm } from "../../hooks"
import { useEditProduct } from "../hooks"

import { AppLayout } from "../layout"
import { Input } from "../components"

export const EditProductPage = () => {

    const navigate = useNavigate()
    const { id } = useParams()
    const product = useSelector(state => state.product.products).find(product => Number(product.id) === Number(id))

    const { editProduct } = useEditProduct()

    const { name, price, description, stock, onChange, setFormState } = useForm({

        name: product?.name,
        price: product?.price,
        description: product?.description,
        stock: product?.stock,
    })

    const onSubmit = (e) => {

        e.preventDefault()
        editProduct({ id, name, price, description, stock })
    }

    const onBack = () => {
        navigate(-1)
    }

    if (!product) {
        return <Navigate to="/products" />
    }

    return (
        <AppLayout>
            <section className="mt-5 w-2/3 border border-neutral-300 shadow-md rounded-sm p-4 mx-auto">
                <h1 className="text-center font-semibold text-lg">
                    Editar producto
                </h1>
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
                            Editar
                        </button>
                    </span>
                </form>
            </section>
        </AppLayout>
    )
}