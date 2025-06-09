import { createSlice } from "@reduxjs/toolkit";

import products from "../../data/products.json"

export const productSlice = createSlice({

    name: "product",
    initialState: {
        products
    },

    reducers: {

        addProduct: (state, action) => {

            state.products.push(action.payload)
        },

        deleteProduct: (state, action) => {

            state.products = state.products.filter(
                (product) => product.id !== action.payload
            )
        },

        updateProduct: (state, action) => {

            const updatedProduct = action.payload
            const index = state.products.findIndex(p => p.id == updatedProduct.id)

            if (index !== -1) {
                state.products[index] = {
                    ...state.products[index],
                    ...updatedProduct
                }
            }
        }
    }
})

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions