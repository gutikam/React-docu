import { useState, useEffect } from "react";

export default function CicloVidaHook () {
    const [scrollY, setScrollY] = useState(0)


    useEffect(() => {
        console.log("moviendo el scroll")
        
        const detectarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", detectarScroll);

        return () => window.removeEventListener("scroll", detectarScroll);
    }, [scrollY])

    useEffect(()=> {
        console.log("fase de montaje")
    }, [])

    useEffect(()=> {
        console.log("fase de actualizacion")
    })

    useEffect(()=> {
        return () => {
        console.log("fase de desmontaje")
        }
    })


    return(
        <>
            <h2>useEffect</h2>
            <p>scrolly del navegador {scrollY}px</p>
        </>
    )
}