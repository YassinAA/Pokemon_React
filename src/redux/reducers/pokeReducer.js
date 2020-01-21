import * as types from "../actions/actionsTypes";

let initialState = {
  cartPokemon: []
}

const pokeReducer = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case types.TOGGLE_CART:
      const cartPokemonIndex = state.cartPokemon.findIndex(item => item.id === action.data.id)
      if (cartPokemonIndex !== -1) {
        nextState = {
          ...state,
          cartPokemon: state.cartPokemon.filter( (item, index) => index !== cartPokemonIndex)
        }
      }
      else {
        nextState = {
          ...state,
          cartPokemon: [...state.cartPokemon, action.data]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default pokeReducer;