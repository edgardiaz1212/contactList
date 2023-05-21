const getState = ({ getStore, getActions, setStore }) => {
	return {

		store: {
			BASEURL: `https://assets.breatheco.de/apis/fake/contact/agenda`,

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contact: {
				id: "473",
				agenda_slug: "eduuuuu",
				full_name: "Eduardo Puermas",
				email: "epuermas@gmail.com",
				phone: "305-423-3800",
				address: "66 W Flagler St #900, Miami, FL 33130",
				created_at: "2019-11-22 01:02:25"
			}
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
			saludar : () =>{
				console.log("hola")},

			
		allContacts: async () =>{ {
			 {
				try{
					let response = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda`);
					let data = await response.json();
					console.log(data)

				} catch (err) {
					console.log(err);
				}
			};
		}
	}

}
}};

export default getState;
