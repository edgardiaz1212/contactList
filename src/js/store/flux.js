const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      BASEURL: `https://assets.breatheco.de/apis/fake/contact`,

	  
	

      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },

	  //para traer todos los contactos
      allContacts: async () => {
        try {
          let response = await fetch(`${getStore().BASEURL}/agenda/newPulco`);

          if (response.ok) {
            let data = await response.json();
            setStore({ contacts: data });
            console.log(data);
          } else console.log("error al traer contactos");
        } catch (err) {
          console.log(err);
        }
      },
      addNewContact: async (newContact) => {
        try {
          let response = await fetch(`${getStore().BASEURL}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(...store.contacts, {
              id: "",
              agenda_slug: "",
              full_name: "newContact.full_name",
              email: "newContact.email",
              phone: "newContact.phone",
              address: "newContact.address",
              created_at: new Date().toISOString(),
            }),
          });
          if (response.ok) {
            getActions().allContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },

	  updateContatc : async () =>{
		try {
			
		} catch (error) {
			console.log(error)
		}
	  }
    },
  };
};

export default getState;
