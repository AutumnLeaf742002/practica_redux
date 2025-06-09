import { Navigate, Route, Routes } from "react-router"

import { AuthRoutes } from "../auth/routes"
import { MainRoutes } from "../app/routes"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/*" element={
                <PrivateRoutes>
                    <MainRoutes />
                </PrivateRoutes>
            } />
            <Route path="auth/*" element={
                <PublicRoutes>
                    <AuthRoutes />
                </PublicRoutes>
            } />
        </Routes>
    )
}