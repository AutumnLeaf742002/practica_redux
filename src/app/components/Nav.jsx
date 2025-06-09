import { NavItem } from "./NavItem"

export const Nav = () => {
    return (
        <nav className="flex gap-3">
            <NavItem path="/products" text="Productos" />
            <NavItem path="/cart" text="Carrito" />
            <NavItem path="/users" text="Usuarios" />
        </nav>
    )
}