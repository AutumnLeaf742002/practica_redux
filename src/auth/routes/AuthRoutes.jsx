import { Navigate, Route, Routes } from "react-router"

import { Login, Register } from "../pages"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/*" element={<Navigate to="/auth/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}