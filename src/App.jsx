import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoContactos from "./components/ListadoContactos";

function App() {

  const [ contactos, setContactos ] = useState(JSON.parse(localStorage.getItem('contactos')) ?? []);
  const [ contacto, setContacto ] = useState({});

  /* LocalStorage */
  useEffect( () => {
    localStorage.setItem('contactos', JSON.stringify(contactos))
  }, [contactos] )
  /* FIN: LocalStorage */

  const eliminarContacto = id => {
    const contactosActualizados = contactos.filter( contactoAEliminar => contactoAEliminar.id !== id )

    setContactos(contactosActualizados);
  }

  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="lg:flex mt-12">
        <Formulario 
          contactos={contactos}
          setContactos={setContactos}
          contacto={contacto}
          setContacto={setContacto}
        />
        <ListadoContactos 
          contactos={contactos}
          setContacto={setContacto}
          eliminarContacto={eliminarContacto}
        />
      </div>
    </div>
  )
}

export default App;
