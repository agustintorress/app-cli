import personas from "./data/personas.json";
const App = () => {
  return (
    <div className="App">
      <p>Lorem ipsum dolor sit amet.</p>
      {
        personas.map(persona => (
          <div>
            <p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
