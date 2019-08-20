const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsDeMap:[],
			inputsFinal:{
				actividadTodo:"",
				fechaVencimiento:""
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
			funcionAux: evento => {
				const store = getStore();
				let oldStore = store.inputsFinal;
				setStore( store.inputsDeMap.push(oldStore) );
			}
		}
	};
};

export default getState;
