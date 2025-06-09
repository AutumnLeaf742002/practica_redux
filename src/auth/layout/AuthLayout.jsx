export const AuthLayout = ({ children, title = "no title" }) => {
    return (
        <section className="w-full h-full flex items-center justify-center">
            <div className="w-xl bg-white rounded-md p-10 min-h-60 shadow-lg border border-neutral-300">
                <header className="flex justify-center p-4">
                    <h1 className="text-xl font-bold">
                        {title}
                    </h1>
                </header>
                <div className="mt-2">
                    {children}
                </div>
            </div>
        </section>
    )
}