import {ACTIONS} from "./App"
/**
 * Given a dispatch function with a payload digit
 * It returns a Button, where on click it will dispatch a useReducer function with 
 * the type of action to take and the payload digit.
 * @param {*} param0 
 * @returns 
 */
export default function DigitButton({dispatch, digit}){
    return (
        <button onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
            {digit}
        </button>
    )
}