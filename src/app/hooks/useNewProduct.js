import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

import { addProduct } from '../../store'

export const useNewProduct = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createProduct = (name, price, description, stock) => {

        if(!name || !price || !description || !stock){
            alert("Debe colocar todos los datos solicitados")
            return
        }

        dispatch( addProduct({

            id: new Date().getTime() + 100,
            name,
            price,
            description,
            stock
        }) )

        alert("Producto agregado con exito")
        navigate(-1)
    }

    return {
        createProduct,
    }
}