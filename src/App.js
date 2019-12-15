import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as UserReducer from './store/hooks_state/user_input_hooks_reducer'
import * as ACTIONS from './store/actions/actions'

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0)
  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)
  const [stateUser, dispatchUser] = useReducer(UserReducer.UserReducer, UserReducer.initialState)

  const incrementGlobalState = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementGlobalState = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const handleContextDispatchtrue = () => {
    //dispatch(ACTIONS.SUCCESS)
    //dispatch(type: "SUCESS")
    dispatchContextGlobal(ACTIONS.success())
  }

  const handleContextDispatchfalse = () => {
    //dispatch(ACTIONS.FAILURE)
    //dispatch(type: "FAILURE")
    dispatchContextGlobal(ACTIONS.failure())
  }

  const handleuseContextChange = (event) => {
    dispatchUser(ACTIONS.user_input_change(event.target.value))
    
  };

  const handleuseContextSubmit = (event) => {
    event.preventDefault();
    dispatchUser(ACTIONS.user_input_submit(stateUser.user_textChange))
  };

    return(
      <div>
      React
        <Context.Provider
          value={{
            valueGlobalState: stateGlobal,
            addGlobalValue: () => incrementGlobalState(),
            decGlobalValue: () => decrementGlobalState(),

            reducerGlobalState: stateContextGlobal.stateprop2,
            dispatchContextTrue: () => handleContextDispatchtrue(),
            dispatchContextFalse: () => handleContextDispatchfalse(),

            useContextChange: stateUser.user_textChange,
            useContextSubmit: stateUser.user_textSubmit,
            useContextHandleChange: (event) => handleuseContextChange(event),
            useContextHandleSubmit: (event) => handleuseContextSubmit(event)
          }}>
        <Routes />
        </Context.Provider>
      </div>
    )
}


export default App;
