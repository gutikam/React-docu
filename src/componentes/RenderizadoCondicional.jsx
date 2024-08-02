import { useState } from "react";

function LoginForm({onLogin}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(username === "user" && password === "pass"){
            onLogin(true);
        }else{
            alert("Credenciales incorrectas")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

function WelcomeMessage({onLogout}){
    return (
        <>
            <h1>Bienvenido</h1>
            <button onClick={() => onLogout(false)}>Logout</button>
        </>
    )
}

export default function RenderizadoCondicional(){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return(
        <>
        {isAuthenticated ? (<WelcomeMessage onLogout={setIsAuthenticated} />) :
         (<LoginForm onLogin={setIsAuthenticated} />) }
        </>
    )
}