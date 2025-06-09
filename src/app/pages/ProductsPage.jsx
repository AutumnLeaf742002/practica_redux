import { NavLink, useNavigate, useSearchParams } from "react-router"

import { useForm } from "../../hooks"
import { useProducts } from "../hooks"

import { AppLayout } from "../layout"
import { Search, Select, ProductTable } from "../components"

export const ProductsPage = () => {

    const [searchParams] = useSearchParams()
    const { search, price, stock, onChange } = useForm({
        search: searchParams.get("s") ?? "",
        price: "",
        stock: ""
    })
    const { getProducts } = useProducts()
    const navigate = useNavigate()

    const products = getProducts(searchParams.get("s"), searchParams.get("p"), searchParams.get("st"))

    const onSearch = (e) => {

        e.preventDefault()

        if(!search && !stock && !price){
            navigate("/products")
            return
        }

        navigate(`?s=${search.trim().toLowerCase()}&p=${price.trim().toLowerCase()}&st=${stock.trim().toLowerCase()}`)
    }

    return (
        <AppLayout>
            <section className="w-full h-14 border-b border-neutral-300 flex items-center gap-4">
                <form className="flex items-center gap-2" onSubmit={onSearch}>
                    <Search placeholder="Nombre" name="search" value={search} onChange={onChange} />
                    <Search placeholder="Precio" name="price" value={price} onChange={onChange} type="number" />
                    <Search placeholder="Stock" name="stock" value={stock} onChange={onChange} type="number" />
                    <button className="bg-neutral-700 px-2 py-1 rounded-sm font-semibold text-white cursor-pointer hover:text-blue-300">
                        Buscar
                    </button>
                </form>
                <NavLink className="ml-auto text-blue-500 font-semibold flex items-center gap-1"
                    to="/add"
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </span>
                    Agregar
                </NavLink>
            </section>
            <section>
                {
                    products?.length >= 1 ? (
                        <table className="table-auto table__custom">
                            <thead>
                                <tr>
                                    <th>
                                        Producto
                                    </th>
                                    <th>
                                        Precio
                                    </th>
                                    <th>
                                        Disponible (unidades)
                                    </th>
                                    <th>
                                        Accion
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products?.map(product => (
                                        <ProductTable key={product.id} {...product} />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : <div className="flex justify-center w-full max-w-[99vw]">
                        <h1 className="p-2 text-neutral-500 text-center mt-4 border-dashed border rounded-sm border-neutral-300 truncate">No hay existencias con "{searchParams.get("s")}"</h1>
                    </div>
                }
            </section>
        </AppLayout>
    )
}