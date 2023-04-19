const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			person: []
		},
		actions: {
			getContacts: async () => {
				const response = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/my_super_pepe_agenda")
				const data = await response.json();
				setStore({contacts: data});
	
			},

			editPerson: (id) =>{
					const contacts= getStore().contacts; 
					contacts.filter((contact, index)=>(contact[index]===id));
					setStore({person:contacts.filter((contact, index)=>(contact[index]===id))});
					console.log(contacts);
			}


			
		}
	};
};

export default getState;
