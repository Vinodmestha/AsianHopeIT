export const H1 = ({ className, children }) => {
    return (
        <h2 className={`text-center text-3xl font-axiBold font-bold tracking-tight text-slate-900 md:text-4xl ${className}`}>
            {children}
        </h2>
    )
}