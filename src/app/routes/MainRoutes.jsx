import { Navigate, Route, Routes } from "react-router"

import { ProductsPage, UsersPage, CartPage, PerfilPage } from "../pages"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/perfil" element={<PerfilPage />} />
        </Routes>
    )
}