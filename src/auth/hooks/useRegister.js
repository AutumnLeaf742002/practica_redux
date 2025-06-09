import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

import { addUser, startSession } from "../../store"

export const useRegister = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(state => state.user.users)

    const createUser = (newUser = {}) => {

        const { name, lastname, mail, user, password } = newUser
        
        if(users.find(user => user.mail === newUser.mail)){
            alert("Este mail ya esta en uso")
            return
        }
        if(users.find(user => user.user === newUser.user)){
            alert("Este nombre de usuario ya esta en uso")
            return
        }
        if (name.length <= 2 || lastname.length <= 2 || mail.length <= 2 || user.length <= 2 || password.length <= 2) {
            alert("Debe rellenar los datos correctamente")
            return
        }

        dispatch(addUser({ ...newUser, rol: 1 }))
        dispatch(startSession({

            id: newUser.id,
            name: newUser.name,
            lastname: newUser.lastname,
            mail: newUser.mail,
            user: newUser.user,
        }))

        alert("Registro exitoso")
        navigate("/")
    }

    return {
        createUser,
    }
}