import { FETCH_CURRENT_USER } from '../actions'

//asilnya pakai es5
//export default (state = null, action) => {
export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false
    default:
      return state
  }
}
