import { createRef, useRef } from "react";


export default function Referencias() {
    let refMenu = useRef();
    let refMenuBtn = useRef();

    console.log(refMenu, refMenuBtn);
    
    const handleToggleMenu = (e) => {
       if(refMenuBtn.current.textContent === "Menu"){
        refMenuBtn.current.textContent = "Cerrar"
        refMenu.current.style.display = "block"
       }else {
        refMenuBtn.current.textContent = "Menu"
        refMenu.current.style.display = "none"
       }
    }

    return (
        <>
            <h2>referencias</h2>
            <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menu</button>
            <nav id="menu" ref={refMenu} style={{display:"none"}}>
                <a href="#">Seccion 1</a>
                <br />
                <a href="#">Seccion 2</a>
                <br />
                <a href="#">Seccion 3</a>
                <br />
                <a href="#">Seccion 4</a>
                <br />
                <a href="#">Seccion 5</a>

            </nav>
        </>
    )
}