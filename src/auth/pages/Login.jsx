import { useSelector } from "react-redux"

import { useForm } from "../../hooks"
import { useLogin } from "../hooks"

import { MainLayout } from "../../layout"
import { AuthLayout } from "../layout"
import { Button, Input, NoAccountLink } from "../components"

export const Login = () => {

    const { user, password, onChange } = useForm({
        user: "",
        password: "",
    })
    const { loginUser } = useLogin()

    const onLogin = (e) => {

        e.preventDefault()

        loginUser(user, password)
    }

    return (
        <MainLayout>
            <AuthLayout title="Iniciar sesion">
                <form className="pt-4" onSubmit={onLogin}>
                    <div className="flex flex-col gap-4">
                        <Input type="text" label="User" value={user} name="user" onChange={onChange} />
                        <Input type="password" label="Contraseña" value={password} name="password" onChange={onChange} />
                    </div>
                    <div className="mt-4">
                        <NoAccountLink to="/auth/register" text="¿No tienes una cuenta?" linkText="Crea una" />
                    </div>
                    <div className="mt-8">
                        <Button text="Iniciar Sesion" />
                    </div>
                </form>
            </AuthLayout>
        </MainLayout>
    )
}