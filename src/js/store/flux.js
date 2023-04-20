const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      person: [],
      editedPerson: [],
    },
    actions: {
      getContacts: async () => {
        const response = await fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/my_super_pepe_agenda"
        );
        const data = await response.json();
        setStore({ contacts: data });
      },

      createContact: async () => {
        const response = await fetch("");
      },

      getPerson: (id) => {
        const contacts = getStore().contacts;
        const personFound = contacts.find((contact) => contact.id === id);
        setStore({ person: personFound });
      },

      sendEditedPerson: () => {},
    },
  };
};

export default getState;
