import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions'
import Context from '../utils/context'

const HooksContainer1 = () => {

  const context = useContext(Context)

  //const stateValue = useState(0)[0]
  //const setValue = useState(0)[1]
  //const [state, dispatch] = useReducer(reducer, initial state)
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)
  const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  useEffect(() => {
    setTimeout(() => 
      setUseEffectValue('useEffect Worked'), 3000)
  }, [stateValue])

  const incrementValue = () => {
    setValue(stateValue + 1)
  }

  const decrementValue = () => {
    setValue(stateValue -1)
  }

  const changeuseEffectValue = () => {
    setUseEffectValue('Some string')
  }

  const handleDispatchtrue = () => {
    //dispatch(ACTIONS.SUCCESS)
    //dispatch(type: "SUCESS")
    dispatch(ACTIONS.success())
  }

  const handleDispatchfalse = () => {
    //dispatch(ACTIONS.FAILURE)
    //dispatch(type: "FAILURE")
    dispatch(ACTIONS.failure())
  }

    return(
      <div>
        React Hooks
        <br/>
        <button onClick = { () => incrementValue()}> Inc Local State </button>
        <button onClick = { () => decrementValue()}> Dec Local State </button>
        <button onClick = { () => changeuseEffectValue()}> Change Use Effect </button>
        <button onClick = { () => handleDispatchtrue()}> Dispatch True </button>
        <button onClick = { () => handleDispatchfalse()}> Dispatch False </button>
        <button onClick = { () => context.addGlobalValue()}> Add Global Value </button>
        <button onClick = { () => context.decGlobalValue()}> Dec Global Value </button>
        <button onClick = { () => context.dispatchContextTrue()}> Dispatch context True </button>
        <button onClick = { () => context.dispatchContextFalse()}> Dispatch context False </button>
        <div>
          <p>
            {useEffectValue?<p> {useEffectValue}</p>:<p> No value </p>
            }
          </p>
          <p>
            {state.stateprop1
            ?<p> Local state prop1 is true</p>
            :<p> Local state prop1 is false </p>}
          </p>
          <p>
            Local State: {stateValue}
          </p>
          <p>
            Global State: {context.valueGlobalState}
          </p>
          <p>
            {context.reducerGlobalState
            ? <p> Global state prop1 is true </p>
            : <p> Global state prop is false </p>
            }
          </p>
        </div>
      </div>
    )
}

export default HooksContainer1;

