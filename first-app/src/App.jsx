import { useReducer, useState } from 'react'
import './App.css'
import DigitButton from './DigitButton'
import OperationButton from './operationButton'



export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}
/**
 * useReducer in React helps manage complex state logic. 
 * It's like having a switchboard where different actions trigger specific changes.
 * reducer(state, action)
State – The current setup (e.g., light is off).
Action – What you want to do (e.g., flip the switch).
Reducer – A function that decides how to update the state based on the action 
(e.g., switch light on/off).
 * @param {*} state 
 * @param {*} {type, payload} 
 * @returns 
 */
function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
    if (state.overwrite) {
      return {
        ...state,
        currentOperand: payload.digit
      }
    }
    /**
     * Ensuring there are no additional periods and extra zeroes where they shouldn't
     */
    if (payload.digit === "0" && state.currentOperand === "0") return state
    if (payload.digit ==='.' && state.currentOperand.includes(".")) return state
      return {
        /**
         * From the current state, return
         * currentOperand added with the payload digit.
         */
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      }
    case ACTIONS.CHOOSE_OPERATION:
      /**
       * When there are no operands
       */
      if (state.currentOperand == null && state.previousOperand == null){
        return state
      }
      /**
       * When There is a previous operand
       */
      if(state.currentOperand == null){
        return {
          ...state,
          operation:payload.operation
        }
      }
      /**
       * When There isn't a previous operand, typing in an operator will automatically
       * process it to be the previous operand
       */
      if (state.previousOperand == null){
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }
      /**
       * Default Case where both previous and current are present
       * Automatically evaluate, and change it to previous operand
       */
      return {
        ...state,
        previousOperand: evaluate(state),
        operation:payload.operation,
        currentOperand:null,
      }

       
    case ACTIONS.CLEAR:
      /**
       * Reverts it back to nothing
       */
      return {}
    
    case ACTIONS.DELETE_DIGIT:
      /**
       * When it is in overwrite state
       */
      if (state.overwrite) {
        return {
          ...state,
          overwrite:false,
          currentOperand:null,
        }
      }
      /**
       * When there is nothing to delete
       */
      if (state.currentOperand == null) return state
      /**
       * When there is only operand of length one
       */
      if (state.currentOperand.length === 1){
        return {...state, currentOperand:null}
      }
      /**
       * Default Case: There is operand of >1 length
       */
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0,-1)
      }


    case ACTIONS.EVALUATE:
      /**
       * If something is missing it isn't possible to evaluate
       */
      if(state.operation == null || 
        state.currentOperand == null || 
        state.previousOperand == null){
          return state
      }
      /**
       * else evaluate
       */
      return {
        ...state, 
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
  }
}

/**
 * The helper function that helps us to evaluate based on cases of operations
 * @param {*} param0 
 * @returns 
 */
function evaluate({currentOperand, previousOperand, operation}){
  const previous = parseFloat(previousOperand)
  const current = parseFloat(currentOperand)
  if(isNaN(previous) || isNaN(current)) return ""
  let computation =""
  switch (operation){
    case "+":
      computation = previous + current
      break
    case "-":
      computation = previous - current
      break
    case "*":
      computation = previous * current
      break
    case "÷": 
      computation = previous / current
      break
  }

  return computation.toString()
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

/**
 * Method that helps us to format an operand
 * Is used to format the Integer part of an operand with commas
 * 
 * @param {*} operand 
 * @returns 
 */
function formatOperand(operand){
  /**
   * There is nothing
   */
  if (operand == null) return

  const [integer, decimal] = operand.split(".")
  /**
   * If the decimal is empty just format the operand
   */
  if(decimal==null) return INTEGER_FORMATTER.format(integer)
  /**
   * If there is an integer part and a decimal part, format the integer
   * and add the decimal through string concatenation
   */
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

/**
 * This is where the DOM lives
 * @returns 
 */
function App() {
  /**
   *  dispatch is a function used to send actions to a reducer (when using useReducer or Redux).
      Think of it like this:
      You "dispatch" (send) an action, and the reducer decides how to update the state.
   */
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  
  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'>{formatOperand(previousOperand)} {operation}</div>
        <div className='current-operand'>{formatOperand(currentOperand)}</div>
      </div>
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
      <OperationButton operation="÷" dispatch={dispatch}></OperationButton>
      <DigitButton digit="1" dispatch={dispatch}></DigitButton>
      <DigitButton digit="2" dispatch={dispatch}></DigitButton>
      <DigitButton digit="3" dispatch={dispatch}></DigitButton>
      <OperationButton operation="*" dispatch={dispatch}></OperationButton>
      <DigitButton digit="4" dispatch={dispatch}></DigitButton>
      <DigitButton digit="5" dispatch={dispatch}></DigitButton>
      <DigitButton digit="6" dispatch={dispatch}></DigitButton>
      <OperationButton operation="+" dispatch={dispatch}></OperationButton>
      <DigitButton digit="7" dispatch={dispatch}></DigitButton>
      <DigitButton digit="8" dispatch={dispatch}></DigitButton>
      <DigitButton digit="9" dispatch={dispatch}></DigitButton>
      <OperationButton operation="-" dispatch={dispatch}></OperationButton>
      <DigitButton digit="." dispatch={dispatch}></DigitButton>
      <DigitButton digit="0" dispatch={dispatch}></DigitButton>
      
      <button className='span-two' onClick={() => dispatch({type: ACTIONS.EVALUATE})}>=</button>

      
    </div>
  )
}

export default App
