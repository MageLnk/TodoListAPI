import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import { FaCheck, FaClock, FaTimesCircle, FaCommentDollar } from 'react-icons/fa';
import Box from "../components/box";
import "../style/home.css";
import Modali, { useModali } from 'modali';
import InputModal from "../components/inputModal"
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Home = props => {
	const [modalAgregar, toggleCompleteModal] = useModali({
		animated: true,
		title: 'Ingrese una actividad por hacer',
		message: <InputModal />,
		buttons: [
			<Modali.Button
				label="Cancelar"
				isStyleCancel
				onClick={() => toggleCompleteModal()}
			/>,
			<Modali.Button
				label="Agregar"
				isStyleDefault
				onClick={() => actioncontext.mandarTodo(storecontext.inputsFinal)}
			/>,
		],
	});
	useEffect(() => {
		actioncontext.obtenerTodo()
	  }, []);
	function checkIcon (fecha, estado, id) {
		//console.log("Debería recibir el tiempo, el estado y el ID antes de los IF", fecha, estado, id);
		if (actioncontext.compararFechas(fecha, estado, id) === "2") {
			return <FaTimesCircle />
		} else if (actioncontext.compararFechas(fecha, estado, id) === "1") {
			return <FaClock />
		}
	}
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				actioncontext = actions;
				storecontext = store;
				const TodoListArray = store.inputsDeMap.map((arrayTodo, index) => {
					return (
						<div className="contenedorcentral container" key={index}>
							<div className="row">
								<div className="col-md-12">
									<h6>Actividad Todo</h6>
									<p>{arrayTodo.usernametodo}</p>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4">
											<Box />
										</div>
										<div className="col-md-4">
											<h6>Tiene hasta el:</h6>
											<p>{arrayTodo.time}</p>
										</div>
										<div className="col-md-4">
											{checkIcon(arrayTodo.time, arrayTodo.estado, arrayTodo.id)}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				});
				return (
					<div className="row">
						<div className="col-md-4 offset-4">
							<h1>Todo List</h1>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-md-4">
								<button onClick={console.log("Llamar a la función")}>
									Completar actividades seleccionadas
      							</button>
								</div>
								<div className="col-md-2 offset-6">
									<p>Filtro</p>
								</div>
							</div>
						</div>
						<div className="col-md-12">
							{TodoListArray}
						</div>
						<div className="col-md-12">
							<div className="olakase">
								<button onClick={toggleCompleteModal}>
									Agregar una actividad
      							</button>
								<Modali.Modal {...modalAgregar} />
							</div>
						</div>
					</div>
				);
			}}
		</Context.Consumer>
	);
}
Home.propTypes = {
	match: PropTypes.any,
	history: PropTypes.any
};

export default Home;