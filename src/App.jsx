import React from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, setCitas] = React.useState(citasIniciales);

  React.useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>
              {citas.length === 0 ? "No hay citas" : "Administra tus citas"}
            </h2>
            {citas.map((item) => {
              return (
                <Cita key={item.id} cita={item} eliminarCita={eliminarCita} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
