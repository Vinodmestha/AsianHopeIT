export const H1 = ({ className, children }) => {
    return (
        <h2 className={`text-center text-3xl font-axiBold font-bold tracking-tight text-primary dark:text-white md:text-4xl ${className}`}>
            {children}
        </h2>
    )
}
export const H3 = ({ className, children }) => {
    return (
        <h2 className={`text-center text-xl md:text-2xl  font-axiBold font-bold tracking-tight text-slate-900 dark:text-white ${className}`}>
            {children}
        </h2>
    )
}


export const Desc = ({ className, children }) => {
    return (
        <h2 className={`text-base md:text-lg text-left leading-8 md:leading-10 text-gray-600 dark:text-gray-300 font-axiforma ${className}`}>
            {children}
        </h2>
    )
}