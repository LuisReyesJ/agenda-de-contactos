
const Contacto = ({ contacto, setContacto, eliminarContacto }) => {

    const { numero, nombre, email, fecha, id } = contacto;

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este contacto?')

        respuesta && eliminarContacto(id)
    }

    return (
        <div className="bg-gray-900 border-2 h-fit border-cyan-500 py-5 px-5 
        rounded-lg mr-2 mb-2">
            <h2 className="text-cyan-500 font-bold text-center text-2xl">{numero}</h2>

            <div className="flex mt-5 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-4 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white">{nombre}</p>
            </div>

            <div className="flex gap-2 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-white">{email}</p>
            </div>

            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
                <p className="text-white">{fecha}</p>
            </div>

            <div className="mt-5 flex justify-between">
                <input 
                    type='submit'
                    className="bg-cyan-600 transition-colors hover:bg-cyan-500 cursor-pointer py-2 px-5 mr-2 rounded-lg uppercase text-white font-bold"
                    value='Editar'
                    onClick={ () => setContacto(contacto) }
                />

                <input 
                    type='submit'
                    className="bg-red-600 transition-colors hover:bg-red-500 cursor-pointer py-2 px-5 rounded-lg uppercase text-white font-bold"
                    value='Eliminar'
                    onClick={ handleEliminar }
                />
            </div>
        </div>
    )
}

export default Contacto;