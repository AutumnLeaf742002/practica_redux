export const Button = ({ text="no text" }) => {
    return (
        <button className="bg-blue-600 hover:bg-blue-700 transition-all p-2 rounded-md w-full text-white font-semibold cursor-pointer">
            {text}
        </button>
    )
}