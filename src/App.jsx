import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Propiedad from './componentes/Propiedad'
import Hooks from './componentes/Hooks'
import Eventos from "./componentes/Eventos"
import RenderizadoCondicional from './componentes/RenderizadoCondicional'
import RenderizadoElementos from './RenderizadoElementos'
import { CompoDesestruc, OtroCompDesest } from './componentes/CompoDesestruc'
import EventoPersonalizado from './componentes/EventoPersonalizado'
import CicloVidaCompo from './componentes/CicloVidaCompo'
import ContadorHooks from './componentes/ContadorHooks'
import './App.css'
import CicloVidaHook from './componentes/CicloVidaHook'
import RelojHooks from './componentes/RelojHooks'
import AyaxHooks from './componentes/AyaxHooks'
import HooksPersonalizados from './componentes/HooksPersonalizados'
import Referencias from './componentes/Referencias'



function App() {
  const [count, setCount] = useState(0)

  function handleClick (e, mensaje){
    console.log(e.target)
    console.log(mensaje)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <hr />
      <Propiedad msg="funciona la propiedad" />
      <hr />
      <Hooks></Hooks>
      <hr />
      <Eventos></Eventos>
      <hr />
      <RenderizadoCondicional/>
      <hr />
      <RenderizadoElementos/>
      <hr />
      <CompoDesestruc/>
      <hr />
      <OtroCompDesest/>
      <hr />
      <EventoPersonalizado myOnClick={(e) => handleClick(e, "evento")} />
      <hr />
      <CicloVidaCompo/>
      <hr />
      <ContadorHooks titulo="seguidores"/>
      <hr />
      <CicloVidaHook/>
      <hr />
      <RelojHooks/>
      <hr />
      <AyaxHooks/>
      <hr />
      <HooksPersonalizados/>
      <hr />
      <Referencias/>
    </>
  )
}

export default App
