const getState = ({ getStore, setStore }) => {
	return {
		store: {
			inputsDePrueba:[{
				Nombre: "Titulo",
				Apellido: "CheckBox",
				Detalles: "Icono",
				FechaVencimiento: "2018-04-25"
			},
			{
				Nombre: "ProbandoNombreDos",
				Apellido: "ProbandoApellido",
				Detalles: "ProbandoDetalles",
				FechaVencimiento: "2018-04-25"
			},
			{
				Nombre: "ProbandoNombreTres",
				Apellido: "ProbandoApellido",
				Detalles: "ProbandoDetalles",
				FechaVencimiento: "2018-04-25"
			}]
		},
		actions: {

		}
	};
};

export default getState;
