import {ACTIONS} from "./App"
/**
 * Given a dispatch function with a payload operation
 * It returns a Button, where on click it will dispatch a useReducer function with 
 * the type of action to take and the payload operation.
 * @param {*} param0 
 * @returns 
 */
export default function OperationButton({dispatch, operation}){
    return (
        <button onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}