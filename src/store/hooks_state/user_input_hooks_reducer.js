import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  user_textChange: '',
  user_textSubmit: ''
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          user_textChange: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          user_textSubmit: action.payload          
        }
      default:
        return state
    }
}
