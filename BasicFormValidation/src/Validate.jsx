import { useState } from 'react'
import "./style.css"


function Validate() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")

  // Errors
  const [errorUsername, setErrorUsername] = useState("")
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")
  const [errorConfirm, setErrorConfirm] = useState("")

  // Colors
  const [userColor, setUserColor] = useState("")
  const [emailColor, setEmailColor] = useState("")
  const [passwordColor, setPasswordColor] = useState("")
  const [confirmColor, setConfirmColor] = useState("")




  function validate(e){
    e.preventDefault()

    if (username.length > 8){
      setErrorUsername("")
      setUserColor("green")

    } else {
      setErrorUsername("Username must be 8 letters long")
      setUserColor("red")
    }

    if (email.includes("@gmail")){
      setErrorEmail("")
      setEmailColor("green")
    } else {
      setErrorEmail("Email should be gmail")
      setEmailColor("red")
    }


    if (password.length > 8){
      setErrorPassword("")
      setPasswordColor("green")

    } else {
      setErrorPassword("Password must be 8 characters long")
      setPasswordColor("red")
    }

    if (password != "" && password == confirm){
      setErrorConfirm("")
      setConfirmColor('green')
    } else {
      setErrorConfirm("Password didn't match or Password cannot be empty")
      setConfirmColor('red')
    }
  }

  return (
    <>
      <div className='card'>
        
        <div className='card-image'></div>


          <form>
            {/* UserName */}
            <input type='text' placeholder='Name'
             style={{borderColor: userColor}}
             value={username}
             onChange={(e) => setUsername(e.target.value)}></input>
             <p className='error'>{errorUsername}</p>

            {/* Email */}
             <input type='text' placeholder='Email'
             style={{borderColor: emailColor}}
             value={email}
             onChange={(e) => setEmail(e.target.value)}></input>
             <p className='error'>{errorEmail}</p>

            {/* Password */}
             <input type='password' placeholder='Password'
             style={{borderColor: passwordColor}}
             value={password}
             onChange={(e) => setPassword(e.target.value)}></input>
             <p className='error'>{errorPassword}</p>

              {/* Confirm Password */}
             <input type='password' placeholder='Confirm Password'
             style={{borderColor: confirmColor}}
             value={confirm}
             onChange={(e) => setConfirm(e.target.value)}></input>
             <p className='error'>{errorConfirm}</p>

            <button className='submit-btn' onClick={validate}>Submit</button>

          </form>
      </div>
    </>
  )
}

export default Validate
