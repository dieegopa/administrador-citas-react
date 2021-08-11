import React from "react";
import { v4 as uuid } from "uuid";
import PropTypes from 'prop-types'

const Formulario = ({ crearCita }) => {
  const [cita, setCita] = React.useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = React.useState(false);

  const actualizarState = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    e.preventDefault();

    if (
      !mascota.trim() ||
      !propietario.trim() ||
      !fecha.trim() ||
      !hora.trim() ||
      !sintomas.trim()
    ) {
      setError(true);
      return;
    }

    setError(false);
    cita.id = uuid();
    crearCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Crear Cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={(e) => submitCita(e)}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          onChange={(e) => actualizarState(e)}
          value={mascota}
        />

        <label htmlFor="">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño Mascota"
          onChange={(e) => actualizarState(e)}
          value={propietario}
        />

        <label htmlFor="">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={(e) => actualizarState(e)}
          value={fecha}
        />

        <label htmlFor="">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={(e) => actualizarState(e)}
          value={hora}
        />

        <label htmlFor="">Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          cols="30"
          rows="10"
          onChange={(e) => actualizarState(e)}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario;
