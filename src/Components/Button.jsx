export const PrimaryBtn = ({ className, onClick, children }) => {
    return (
        <button className={`border-2 border-blue-500 dark:border-secondary text-blue-500 dark:text-secondary py-2.5 px-5 font-axiMedium font-semibold rounded-full hover:text-white hover:bg-blue-500 ${className}`} onClick={onClick} >{children}</button >
    )
}
export const SecondaryBtn = ({ className, onClick, children }) => {
    return (
        <button className={`border-2 bg-blue-500 text-white py-2.5 px-5 font-axiMedium font-semibold rounded-br-full rounded-tr-full rounded-tl-full hover:bg-white hover:border-blue-500 hover:text-blue-500 ${className}`} onClick={onClick} >{children}</button >
    )
}