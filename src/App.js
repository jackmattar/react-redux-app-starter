import React, {useState, useReducer} from 'react';
import Routes from './routes';
import Context from './utils/context'
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions'

const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0)

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

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
          }}>
        <Routes />
        </Context.Provider>
      </div>
    )
}


export default App;
