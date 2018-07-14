import types from "../actions/types";

const DEFAULT_STATE = {
	routes: []
};

function itineraryReducer(state = DEFAULT_STATE, action) {
	switch (action.type) {
		case types.ADD_ROUTE_TO_ITINERARY:
			let isUnique = true;

			state.routes.map( route => {
				if(route.id === action.payload.id){
					isUnique = false;
				}
			});
			console.log('ACTION PAYLOAD', action.payload)
			console.log('STATE.ROUTES', state.routes)
			if(isUnique){
				return { ...state, routes: [...state.routes, action.payload] };
			}

			return state;
		case types.REMOVE_ROUTE_FROM_ITINERARY:
			console.log('action, and s.routes', action, 'state.routes', state.routes)
			return { ...state, routes: state.routes.filter(route => route.id !== action.payload) } 
		default:
			return state;
	}
}

export default itineraryReducer;