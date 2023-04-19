const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			getContacts: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_super_pepe_agenda")
				const data = await response.json();
				setStore({contacts: data});
				console.log(data)
			}


			
		}
	};
};

export default getState;
