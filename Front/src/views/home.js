import React from "react";
import { Context } from "../store/appContext";
import { FaCheck, FaClock, FaTimesCircle } from 'react-icons/fa';
import "../style/home.css";
import Modali, { useModali } from 'modali';
import InputModal from "../components/inputModal"
let actioncontext = null;
let storecontext = null;
let startDate = "";

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
				onClick={() => actioncontext.funcionAux()}
			/>,
		],
	});
	function compareDate() {  
		let todayDate = new Date(); //Today Date  
		let dateOne = new Date(storecontext.inputsFinal.fechaVencimiento);  
		if (todayDate > dateOne) {  
			 alert("Today Date is greater than Date One.");
		 }else {
			 alert("Date One is greater.");
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
									{console.log("Algo", compareDate())}
									<h6>Actividad Todo</h6>
									<p>{arrayTodo.actividadTodo}</p>
								</div>
								<div className="container">
									<div className="row">
										<div className="col-md-4">
											<input type="checkbox" name="vehicle" value="1"></input>
										</div>
										<div className="col-md-4">
											<h6>Tiene hasta el:</h6>
											<p>{arrayTodo.fechaVencimiento}</p>
										</div>
										<div className="col-md-4">
											<FaClock />
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
									<p>Seleccionador</p>
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

export default Home;