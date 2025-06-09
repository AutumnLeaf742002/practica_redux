import { NavLink } from "react-router"
import { useSelector, useDispatch } from "react-redux"

import { closeSession } from "../../store"

import { Nav } from "./Nav"

export const Header = () => {

    const userName = useSelector(item => item.session.userLogged.name)
    const dispatch = useDispatch()

    const onClose = () => {

        dispatch( closeSession() )
    }

    return (
        <header className="w-full min-h-12 bg-neutral-800 text-white flex items-center justify-between px-4">
            <h1 className="font-semibold">
                <NavLink to="/" className="cursor-pointer">
                    No company name
                </NavLink>
            </h1>
            <Nav />
            <div>
                <details className="text-sm cursor-pointer relative flex flex-col">
                    <summary>
                        {userName}
                    </summary>
                    <div className="absolute bg-neutral-800 p-1 flex flex-col gap-1">
                        <NavLink to="/perfil">
                            Perfil
                        </NavLink>
                        <button className="cursor-pointer" onClick={onClose}>
                            Cerrar sesion
                        </button>
                    </div>
                </details>
            </div>
        </header>
    )
}