import { useState } from "react";


export default function ContadorHooks ({titulo}){
    const [contador, setContador] = useState(0)

    const sumar= () => setContador(contador + 1);
    const restar= () => setContador(contador - 1);
    return(
        <>
            <h2>hooks-usestate</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <p>Contador de {titulo}</p>
            <h3>{contador}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
};