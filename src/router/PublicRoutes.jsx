import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export const PublicRoutes = ({ children }) => {

    const logged = useSelector(state => state.session.logged)
    
    return logged ? (<Navigate to="/" />) : children
}