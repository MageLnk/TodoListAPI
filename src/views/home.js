import React from "react";
import { Context } from "../store/appContext";
import "../style/home.css";
import Modali, { useModali } from 'modali';
import InputModal from "../components/inputModal"

const Home = () => {
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
				onClick={() => console.log("Funciona")}
			/>,
		],
	});
	return (
		<Context.Consumer>
			{({ store, actions }) => {
				const TodoListArray = store.inputsDePrueba.map((arrayTodo, index) => {
					return (
						<div className="contenedorcentral container" key={index}>
							<div className="row">
								<div className="col-md-12">
									<p>{arrayTodo.Nombre}</p>
								</div>
								<div className="row">
									<div className="col-md-4">
										<p>{arrayTodo.Apellido}</p>
									</div>
									<div className="col-md-4">
										<p>{arrayTodo.FechaVencimiento}</p>
									</div>
									<div className="col-md-4">
										<p>{arrayTodo.Detalles}</p>
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
						<div className="col-md-12">
							{TodoListArray}
						</div>
						
						<div className="col-md-12">
							<div className="app">
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

export default Home;