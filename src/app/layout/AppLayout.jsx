import { Header } from "../components/Header"

export const AppLayout = ({ children }) => {

    return (
        <main className="w-screen h-screen flex flex-col overflow-x-hidden">
            <Header />
            <section className="flex-1 p-4">
                {children}
            </section>
        </main>
    )
}