import { NavLink } from "react-router"

export const NoAccountLink = ({ text = "no text", linkText = "no link text", to }) => {
    return (
        <div className="flex gap-1">
            <span>
                {text}
            </span>
            <NavLink to={to} className="text-blue-600">
                {linkText}
            </NavLink>
        </div>
    )
}