export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TO_BASKET':
      // Logic adding to basket
      return { ...state, basket: [...state.basket, action.item] };
    case 'REMOVE_TO_BASKET':
      // Logic removing to basket
      return { state };
    default:
      return state;
  }
};

export default reducer;
