import React, { useState, useEffect, useReducer } from 'react';

const HooksContainer1 = () => {

  //const stateValue = useState(0)[0]
  //const setValue = useState(0)[1]
  //const [state, dispatch] = useReducer(reducer, initial state)
  const [stateValue, setValue] = useState(0)
  const [useEffectValue, setUseEffectValue] = useState(null)
  const [state, dispatch] = useReducer(reducer, initial state)

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

    return(
      <div>
        React Hooks
        <br/>
        <button onClick = { () => incrementValue()}> Inc Local State </button>
        <button onClick = { () => decrementValue()}> Dec Local State </button>
        <button onClick = { () => changeuseEffectValue()}> Change Use Effect </button>
        <div>
          <p>
            {useEffectValue?<p> {useEffectValue}</p>:<p> No value </p>
            }
          </p>
          <p>
            Local State: {stateValue}
          </p>
        </div>
      </div>
    )
}

export default HooksContainer1;

