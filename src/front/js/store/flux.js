const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
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
			favorites:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},

			isIn: (favorites,name)=> {
				let isIn = false;
				for ( let favorite of favorites) {
					if(favorite.name === name){
						isIn = true
					}
				}
				return (isIn)


			},

			manageFavorites: (name)=> {
				const store = getStore()
				let oldFavorites = [...store.favorites]
				let isIn = getActions().isIn(oldFavorites,name)
				let newFavorites;

				for ( let favorite of oldFavorites) {
					if(favorite.name === name){
						isIn = true
					}
					
				}
				if (isIn) {
					newFavorites = oldFavorites.filter(favorite => favorite.name !== name)
					
				} else {
					newFavorites= [...store.favorites,{name:name}]
					
				}

				setStore({
					favorites:newFavorites
				})
			},

			getPlanets: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/planets");
				  const data = await response.json();
				  setStore({ planets: data.results });
				} catch (error) {
				  console.log(error);
				}
			  },
			getPeople: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/people");
				  const data = await response.json();
				  setStore({ people:data.results });
				} catch (error) {
				  console.log(error);
				}
			  },
			  getVehicles: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/vehicles");
				  const data = await response.json();
				  setStore({ vehicles:data.results });
				} catch (error) {
				  console.log(error);
				}
			  },
			  getFilms: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/films");
				  const data = await response.json();
				  setStore({ films: data.results });
				} catch (error) {
				  console.log(error);
				}
			  },
			  getStarships: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/starships");
				  const data = await response.json();
				  setStore({ starships: data.results });
				} catch (error) {
				  console.log(error);
				}
			  },
			  getSpecies: async () => {
				try {
				  const response = await fetch("https://swapi.dev/api/species");
				  const data = await response.json();
				  setStore({ species: data.results });
				} catch (error) {
				  console.log(error);
				}
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
			}
		}
	};
};

export default getState;
