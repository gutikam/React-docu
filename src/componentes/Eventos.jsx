import { useState } from "react";

export default function Eventos(){
    const [mostrarSaludo, setMostrarSaludo] = useState(false);
    return(
        <>
            <button onClick={() => setMostrarSaludo(!mostrarSaludo)}>
                {mostrarSaludo ? "ocultar Saludo" : "mostrar Saludo"}
            </button>

            {mostrarSaludo && <p>hola mundo</p>}
        </>
    )
}