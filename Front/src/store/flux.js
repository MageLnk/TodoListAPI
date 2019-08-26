const enlace = "http://localhost:3000/todo/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inputsDeMap: [],
			inputsFinal: {
				usernametodo: "",
				time: "",
				estado: "1"
			}
		},
		actions: {
			obtenerInfo: e => {
				const store = getStore();
				const name = e.target.name;
				let oldStore = store.inputsFinal;
				oldStore[name] = e.target.value;
				setStore({ inputsFinal: oldStore });
			},
			obtenerTodo: e => {
				// const store = getStore();
				fetch(enlace, {
					method: "GET",
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							inputsDeMap: resp
						});
						//console.log("Lo que trae el fetch get de la lista todo", resp);
					});
			},
			mandarTodo: evento => {
				const store = getStore();
				const actions = getActions();
				//console.log("Lo que va a mandar el post", store.inputsFinal)
				fetch(enlace, {
					method: "Post",
					body: JSON.stringify(evento),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(resp => {
						//console.log("Lo que trae el post", resp);
					});
				actions.obtenerTodo();
			},
			editarTodo: (estado, id) => {
				const store = getStore();
				fetch(enlace + id, {
					method: "PUT",
					body: JSON.stringify(estado),
					headers: {
						"Content-Type": "application/json",
					}
				}).then(resp => {
					//console.log("Este console log, se muestra cuando se efectua el put", resp);
				});
			},
			compararFechas: (fecha, estado, id) => {
				const store = getStore();
				const actions = getActions();
				let fechaHoy = new Date();
				let fechaPuesta = new Date(fecha);
				if (fechaHoy > fechaPuesta) {
					let aux = { estado: "2" };
					//alert("Producto vencido, porque la fecha pasó la fecha límite.");
					actions.editarTodo(aux, id)
					return "2"
				} else {
					//alert("Aún no vence el producto, porque la fecha de hoy es menor.");
					return "1"
				}
			},
			resetInput: e => {
				const store = getStore();
				let oldStore = {
					usernametodo: "",
					time: "",
					estado: "1"
				}
				setStore({ inputsFinal: oldStore });
			},
			obtenerValorCajas : (length) =>{
				console.log(length);
				let check = document.getElementsByClassName('checks');
				let str = ' ';
				console.log(check);
				for (let i = 0; i<length;i++){
					//console.log(check);
				}
		//		for (let i = 0; i<length;i++){
		//			if(check[i].checked === true){
		//				str += check[i].value + " ";
		//			}
		//		}
				//alert (str)
			}
		}
	};
};

export default getState;
