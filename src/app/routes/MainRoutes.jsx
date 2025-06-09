import { Navigate, Route, Routes } from "react-router"

import { ProductsPage, UsersPage, CartPage, PerfilPage, NewProductPage, EditProductPage } from "../pages"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
            <Route path="/add" element={<NewProductPage />} />
            <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
    )
}