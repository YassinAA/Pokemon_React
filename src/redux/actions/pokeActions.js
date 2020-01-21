import * as types from "./actionsTypes";

export function togglePokemon(data) {
  return {
    type: types.TOGGLE_CART,
    data: data
  }
}