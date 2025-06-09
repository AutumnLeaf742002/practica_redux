import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export const PrivateRoutes = ({ children }) => {

    const logged = useSelector(state => state.session.logged)
    
    return logged ? children : (<Navigate to="/auth" />)
}