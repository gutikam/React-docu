import { useState } from "react";

export default function Formularios () {
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor] = useState("");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        alert("formulario enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} 
                onChange={(e) => setNombre(e.target.value)}  />
                

                <p>elige tu sabor favorito de js</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla"
                onChange={(e) => setSabor(e.target.value)} defaultChecked  />
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id="react" name="sabor" value="react"
                onChange={(e) => setSabor(e.target.value)}  />
                <label htmlFor="react">React</label>

                <input type="radio" id="angular" name="sabor" value="angular"
                onChange={(e) => setSabor(e.target.value)}  />
                <label htmlFor="angular">Angular</label>

                <input type="radio" id="vue" name="sabor" value="vue"
                onChange={(e) => setSabor(e.target.value)}  />
                <label htmlFor="vue">Vue</label>


                <p>elige tu lenguaje favorito</p>
                <select name="lenguaje" id="" 
                onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JS</option>
                    <option value="php">PHPp</option> //si quiero una por defecto se le puede poner defaultvalue aunque googlear mejor
                    <option value="py">PY</option>
                    <option value="go">GO</option>
                    <option value="rb">RB</option>
                </select>
                <br />
                <br />


                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" 
                onChange={(e) => setTerminos(e.target.checked)} />
                <br />
                <br />
                
                <input type="submit" />

            </form>
        </>
    )
}