import Contacto from "./Contacto";

const ListadoContactos = ({ contactos, setContacto, eliminarContacto }) => {
    return (
        <div className="lg:w-3/5 mx-2 py-5 px-5 md:h-screen overflow-y-scroll bg-gray-900 border-cyan-500 border-2 rounded-xl items-start">
            <div className="md:grid md:grid-cols-2 2xl:grid-cols-3">
                { contactos.map( contacto => (
                    <Contacto 
                        key={contacto.id}
                        contacto={contacto}
                        setContacto={setContacto}
                        eliminarContacto={eliminarContacto}
                    />
                ) ) }
            </div>
        </div>
    )
}

export default ListadoContactos;