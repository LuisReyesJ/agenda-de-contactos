
const Error = ({ mensaje }) => {
    return (
        <div className="p-3 w-full mb-10 bg-red-700 rounded-lg text-center text-white 
        uppercase font-bold">
            <h1>{mensaje}</h1>
        </div>
    )
}

export default Error;