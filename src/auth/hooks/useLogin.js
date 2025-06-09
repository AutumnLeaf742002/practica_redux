import { useNavigate } from "react-router"
import { useSelector, useDispatch } from "react-redux"

import { startSession } from "../../store"

export const useLogin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)

    const loginUser = (user, password) => {

        if (!user || !password) {

            alert("Debe rellenar los campos")
            return
        }

        const userExist = users.find(prevUser => prevUser.user === user && prevUser.password === password)

        if (!userExist) {

            alert("Usuario o Contraseña incorrectos")
            return
        }

        dispatch( startSession({
            id: userExist.id,
            name: userExist.name,
            lastname: userExist.lastname,
            mail: userExist.mail,
            user: userExist.user,
        }) )

        navigate("/")

    }

    return {

        loginUser,
    }
}