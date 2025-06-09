import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

import { updateProduct } from '../../store'

export const useEditProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const editProduct = (product) => {

        if (!product.name || !product.price || !product.description || !product.stock) {
            alert("Debe llenar todos los datos")
            return
        }

        dispatch(updateProduct(product))
        alert("Producto actualizado correctamente")
        navigate(-1)
    }

    return {
        editProduct
    }
}