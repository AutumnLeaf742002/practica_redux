import { useForm } from "../../hooks"
import { useRegister } from "../hooks"

import { MainLayout } from "../../layout"
import { AuthLayout } from "../layout"
import { Input, Button, NoAccountLink } from "../components"

export const Register = () => {

    const { createUser } = useRegister()
    const { name, lastname, mail, user, password, onChange } = useForm({
        name: "",
        lastname: "",
        mail: "",
        user: "",
        password: "",
    })

    const onRegister = (e) => {
        e.preventDefault()
        createUser({
            id: new Date().getTime()+10,
            name,
            lastname,
            mail,
            user,
            password,
        })
    }

    return (
        <MainLayout>
            <AuthLayout title="Registrarse">
                <form className="pt-4" onSubmit={onRegister}>
                    <div className="flex flex-col gap-4">
                        <Input type="text" label="Nombre" name="name" value={name} onChange={onChange} />
                        <Input type="text" label="Apellido" name="lastname" value={lastname} onChange={onChange} />
                        <Input type="mail" label="Mail" name="mail" value={mail} onChange={onChange} />
                        <Input type="text" label="User" name="user" value={user} onChange={onChange} />
                        <Input type="password" label="Contraseña" name="password" value={password} onChange={onChange} />
                    </div>
                    <div className="mt-4">
                        <NoAccountLink to="/auth/login" text="¿Ya tienes una cuenta?" linkText="Inicia sesion" />
                    </div>
                    <div className="mt-8">
                        <Button text="Registrarse" />
                    </div>
                </form>
            </AuthLayout>
        </MainLayout>
    )
}