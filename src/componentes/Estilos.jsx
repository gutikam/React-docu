import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"

export default function Estilos() {
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth: "50%"
    }

    return (
        <section className="estilos">
            <h3>estilos css en react</h3>
            <h3 className="bg-react">estilos en hoja css externa</h3>
            <h3 className="bg-react" 
            style={{borderRadius: "25rem", margin:"1rem"}}>estilos en linea (atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>estilos en linea por variable</h3>
            <h3 className="bg-react">agregando normalize con <br/> 
                <code>@import-normalize</code></h3>

            <h3 className={moduleStyles.error}>estilos con modulos</h3>
            <h3 className={moduleStyles.success}>estilos con modulos</h3>

        </section>
    )
}