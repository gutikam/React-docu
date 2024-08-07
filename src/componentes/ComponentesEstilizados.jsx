import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from "styled-components";

export default function CompnentesEstilizados() {
    let mainColor = "blue";
    let mainAlphaColor80 = "aqua";

    const fadeIn = keyframes`
        0% {
            opacity:0;
        }
        100%{
            opacity:1;
        }
    `;

    let setTransitionTime = (time) => `all ${time} ease-in-out`;

    //en este componente estilizado usamos el & para hacer referencia al h3//
    const MyH3 = styled.h3`
        padding: 2rem;
        text-align:center;
        background-color: ${mainColor};
        color: ${(props) => props.color};
        color: ${({ color }) => color || "red"};
        transition: ${setTransitionTime("1s")};
        animation: ${fadeIn} 5s ease-out;

        ${({ isButton }) => isButton && css`
            margin: auto;
            max-width: 50%;
            border-radius: 0.25rem;
            cursor: pointer;
        `}

        &:hover {
        background-color: ${mainAlphaColor80}
        }
    `;

    const light = {
        color: "#222",
        bgColor: "#DDD"
    };

    const dark = {
        color: "#DDD",
        bgColor: "#222"
    };

    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    //para heredar los estilos de Box y ya desde alli le vamos dando mas estilos//
    const BoxRounded = styled(Box)`
        border-radius:1rem;
    `;

    //global style q afecta de manera global y es recomendado usarse en componentes principales
    //esto afectara a todo lo q ya tenia estilo por eso es global//
    const GlobalStyle = createGlobalStyle`
        h2 {
            padding: 2rem;
            background-color: #fff;
            color: black;
            text-transform: uppercase;
        }
    `;


    return (
        <>  
            <GlobalStyle/>
            <h2>componentes estilizados</h2>
            <MyH3>h3 con componente estilizado</MyH3>
            <MyH3 color="black">h3 con componente estilizado</MyH3>
            <MyH3 isButton>h3 estilizado como boton</MyH3>
            <ThemeProvider theme={light}>
                <Box>soy una caja light</Box>
                <BoxRounded>caja redondeada light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>soy una caja dark</Box>
                <BoxRounded>caja redondeada dark</BoxRounded>
            </ThemeProvider>
        </>
    )
}