import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ contactos, setContactos, contacto, setContacto }) => {

    const [ numero, setNumero ] = useState('');
    const [ nombre, setNombre ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ fecha, setFecha ] = useState('');

    const [ error, setError ] = useState(false);

    useEffect( () => {
        setNumero(contacto.numero)
        setNombre(contacto.nombre)
        setEmail(contacto.email)
        setFecha(contacto.fecha)
    }, [contacto] )

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar los campos
        if( [numero, nombre, email, fecha].includes('') ){
            setError(true)
            return;
        }
        setError(false)

        // ObjetoContacto
        const objetoContacto = {
            numero, 
            nombre, 
            email, 
            fecha
        }

        if( contacto.id ){
            // Editando Contacto
            objetoContacto.id = contacto.id;
            const contactoActualizado = contactos.map( contactoState => contactoState.id === contacto.id ? objetoContacto : contactoState )

            setContactos(contactoActualizado)
            setContacto({})
        } else {
            objetoContacto.id = generarId()
            setContactos([...contactos, objetoContacto])
        }

        // Reiniciando los campos
        setNumero('')
        setNombre('')
        setEmail('')
        setFecha('')
    }

    return (
        <div className="lg:w-2/5">
            <form 
                onSubmit={handleSubmit}
                className="border-cyan-500 mx-2 border-2 mb-10 bg-gray-900 rounded-xl py-10 px-5"
            >
                { error && <Error mensaje='Todos los campos son obligatorios' /> }
                { contacto.id ? (
                    <h1 className="text-white text-center font-medium text-3xl">Edita tus Contactos</h1>
                ) : (
                    <h1 className="text-white text-center font-medium text-3xl">Agrega a tus Contactos</h1>
                )}
                <div className="flex mt-3 justify-center">
                    <div className="w-3 h-2 bg-cyan-500 rounded-md"></div>
                    <div className="w-28 h-2 bg-cyan-500 rounded-md mx-2"></div>
                    <div className="w-3 h-2 bg-cyan-500 rounded-md"></div>
                </div>

                <div className="mt-20 mb-5">
                    <label 
                        htmlFor="numero"
                        className="text-white text-lg"
                    >Número de Teléfono:</label>
                    <input 
                        id="numero"
                        type='number'
                        className="w-full mt-3 bg-slate-900 border-cyan-500 border-2 
                        rounded-lg p-2 placeholder-gray-500 text-white"
                        placeholder="Ingrese el Número de Teléfono"
                        value={numero}
                        onChange={ (e) => setNumero(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="nombre"
                        className="text-white text-lg"
                    >Nombres y Apellidos:</label>
                    <input 
                        id="nombre"
                        type='text'
                        className="w-full mt-3 bg-slate-900 border-cyan-500 border-2 
                        rounded-lg p-2 placeholder-gray-500 text-white"
                        placeholder="Ingrese el Nombre y Apellido"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="text-white text-lg"
                    >Email:</label>
                    <input 
                        id="email"
                        type='email'
                        className="w-full mt-3 bg-slate-900 border-cyan-500 border-2 
                        rounded-lg p-2 placeholder-gray-500 text-white"
                        placeholder="Ingrese el Correo Electrónico"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="cumpleaños"
                        className="text-white text-lg"
                    >Fecha de Cumpleaños:</label>
                    <input 
                        id="cumpleaños"
                        type='date'
                        className="w-full mt-3 bg-slate-900 border-cyan-500 border-2 
                        rounded-lg p-2 text-white"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>

                <input 
                    type='submit'
                    className="bg-cyan-600 transition-colors hover:bg-cyan-500 cursor-pointer text-lg w-full p-3 mt-4 rounded-lg uppercase text-white font-bold"
                    value={ contacto.id ? 'Guardar Cambios' : 'Agregar Contacto' }
                />
            </form>
        </div>
    )
}

export default Formulario;