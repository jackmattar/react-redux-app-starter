import React, { useState, useReducer, useContext} from 'react';
import * as ACTIONS from '../store/actions/actions';
import * as UserReducer from '../store/hooks_state/user_input_hooks_reducer'
import Context from '../utils/context'

const HooksForm = () => {

    const context = useContext(Context)

    const[valueChange, setValueChange] = useState('');
    const[valueSubmit, setValueSubmit] = useState('');

    const [state, dispatch] = useReducer(UserReducer.UserReducer, UserReducer.initialState);
    
    const handleuseStateChange = (event) => {
        setValueChange(event.target.value)
    };

    const handleuseStateSubmit = (event) => {
        event.preventDefault()
        setValueSubmit(event.target.useState.value)
    };

    const handleuseReducerChange = (event) => {
        dispatch(ACTIONS.user_input_change(event.target.value))
        
    };
    
    const handleuseReducerSubmit = (event) => {
        event.preventDefault();
        event.persist();
        dispatch(ACTIONS.user_input_submit(state.user_textChange))
    };

    return (
        <div>
            <h2>React useState </h2>
            <form onSubmit={handleuseStateSubmit}>
                <label> React useState: </label>
                <input id='useState' type='text' onChange={handleuseStateChange}/>
                <button>Submit</button>
            </form>
            <br/>
            <p> Change: {valueChange} </p>
            <p> Submit: {valueSubmit} </p>
            <br/>
            <h2>React useReducer </h2>
            <form onSubmit={handleuseReducerSubmit}>
                <label> React useReducer: </label>
                <input id='useReducer' type='text' onChange={handleuseReducerChange}/>
                <button>Submit</button>
            </form>
            <p> Change: {state.user_textChange} </p>
            <p> Submit: {state.user_textSubmit} </p>
            <br/>
            <h2>React useContext </h2>
            <form onSubmit={context.useContextHandleSubmit}>
                <label> React useContext: </label>
                <input id='useReducer' type='text' onChange={context.useContextHandleChange}/>
                <button>Submit</button>
            </form>
            <p> Change: {context.useContextChange} </p>
            <p> Submit: {context.useContextSubmit} </p>
        </div>
    )
}

export default HooksForm;
