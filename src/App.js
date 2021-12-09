import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Header from "./components/Header";
import Error from "./components/Error";

function App() {
  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  //para controlar la consulta y que no se ejecute cada vez que se escribe una letra
  const [consultar, guardarConsultar] = useState(false);

  const [resultado, guardarResultado] = useState({});

  //Manejar cuando no encuentra la ciudad
  const [error, guardarError] = useState(false);

  //extraer ciudad y pais
  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        //en un proyecto 100% funcional esa apikey se deberia consumir de un servidor
        const appId = "96e33cb77d792043f61b079efcb9e450";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        guardarResultado(resultado);
        //debo volver el guardarConsultar a False para poder hacer otra petición
        guardarConsultar(false);

        if (resultado.cod === "404") {
          guardarError(true);
        } else {
          guardarError(false);
        }
      }
    };
    consultarAPI();
    //esto es para que se ejecuyte la funcion cuando cambie consultar
    //eslint-disable-next-line
  }, [consultar]);

  let componente
  if (error){
    componente= <Error mensaje="No hay resultados" />
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>
      <Header titulo="ClimApp" />
      <div className="contenedor-form">
        <div className="row">
          <div className="col m6 s12">
            <Formulario
              busqueda={busqueda}
              guardarBusqueda={guardarBusqueda}
              guardarConsultar={guardarConsultar}
            />
          </div>
          <div className="col m6 s12">
            {componente}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
