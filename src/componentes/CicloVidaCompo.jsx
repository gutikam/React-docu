import React, { Component } from 'react';

class CicloVidaCompo extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Lógica para actualizar el estado basado en los props
    return null;
  }

  componentDidMount() {
    // Lógica de inicialización, como llamadas a APIs
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Controlar si el componente debe actualizarse
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Capturar alguna información del DOM antes de aplicar cambios
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Lógica después de que el componente se actualiza
  }

  componentWillUnmount() {
    // Tareas de limpieza
  }

  render() {
    return (
      <div>
        <h3>ciclo vida componente</h3>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>
          Incrementar
        </button>
      </div>
    );
  }
}

export default CicloVidaCompo


/* """EXPLICACION""" El ciclo de vida de un componente en React se divide en tres fases principales: montaje (mounting), actualización (updating) y desmontaje (unmounting). A continuación se describen los métodos principales del ciclo de vida en cada una de estas fases en la versión actual de React:

Montaje (Mounting)
Esta fase ocurre cuando un componente es creado e insertado en el DOM. Los métodos principales en esta fase son:

constructor(): Se llama cuando se crea una instancia del componente. Se usa para inicializar el estado y enlazar métodos.

static getDerivedStateFromProps(props, state): Se llama antes de renderizar tanto en el montaje inicial como en las actualizaciones subsiguientes. Debe devolver un objeto para actualizar el estado o null para no actualizar nada.

render(): Es el único método requerido en una clase de componente. Examina this.props y this.state y devuelve un árbol de elementos React, componentes, fragmentos, portales, cadenas y números, o null.

componentDidMount(): Se invoca inmediatamente después de que un componente se monta. Se usa para realizar tareas de inicialización que requieran nodos DOM, como llamadas a APIs o configuraciones de suscripciones.

Actualización (Updating)
Esta fase ocurre cuando hay cambios en las propiedades o el estado de un componente. Los métodos principales en esta fase son:

static getDerivedStateFromProps(props, state): Se llama nuevamente en cada actualización. Ver explicación anterior.

shouldComponentUpdate(nextProps, nextState): Permite controlar si el componente debe actualizarse o no. Por defecto devuelve true, pero se puede optimizar devolviendo false si los nuevos props y estado no afectan al renderizado.

render(): Se llama para renderizar el componente nuevamente con los nuevos props o estado.

getSnapshotBeforeUpdate(prevProps, prevState): Se invoca justo antes de que los cambios del DOM sean aplicados. Permite capturar alguna información del DOM (como la posición del scroll) antes de que se aplique el cambio. Debe devolver un valor que luego se pasa a componentDidUpdate.

componentDidUpdate(prevProps, prevState, snapshot): Se invoca inmediatamente después de que el componente se actualiza. Se puede usar para realizar cualquier operación que dependa del DOM.

Desmontaje (Unmounting)
Esta fase ocurre cuando un componente se elimina del DOM. El método principal en esta fase es:

componentWillUnmount(): Se invoca inmediatamente antes de que un componente se desmonte y destruya. Se usa para realizar tareas de limpieza, como cancelar suscripciones, temporizadores, etc.
Manejo de Errores (Error Handling)
React también proporciona métodos para manejar errores en el ciclo de vida de un componente:

static getDerivedStateFromError(error): Se invoca cuando hay un error en un componente descendiente. Se puede usar para actualizar el estado para que el próximo renderizado muestre una UI alternativa.

componentDidCatch(error, info): Se invoca después de que un error haya sido lanzado por un componente descendiente. Se puede usar para registrar el error y mostrar una interfaz de usuario de respaldo. 
""CON HOOKS ES LA FORMA NORMAL DE ESCRIBIR PQ LO SIMPLIFICA"""
*/