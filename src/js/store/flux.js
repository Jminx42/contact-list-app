const getState = ({ setStore }) => {
  return {
    store: {
      contacts: [],
      
    },
    actions: {
      updateContacts: async () => {
        const response = await fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/my_super_pepe_agenda"
        );
        const data = await response.json();
        setStore({ contacts: data });
      },

      

     
    },
  };
};

export default getState;
