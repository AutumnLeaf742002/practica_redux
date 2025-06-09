import { NavLink } from "react-router"

export const NavItem = ({ path = "", text = "no text" }) => {

    return (
        <NavLink to={path} className={({isActive})=>`text-sm ${isActive?"text-blue-300":""}`}>
            {text}
        </NavLink>
    )
}