// ./src/reducers/shoppingListItemReducer
 
export default function shoppingListItemReducer(
	state = {
	  items: []
	},
	action
  ) {
	console.log(action);
	switch (action.type) {
	  case 'INCREASE_COUNT':
		console.log('Current state.items length %s', state.items.length);
		console.log('Updating state.items length to %s', state.items.length + 1);
		return {
		  ...state,
		  items: state.items.concat(state.items.length + 1)
		};
   
	  default:
		console.log('Initial state.items length: %s', state.items.length);
		return state;
	}
  }

//Ok so effectively, our reducer is just producing a counter. It adds a new item to the list each time it is called, 
//and that item is one more than the last item.