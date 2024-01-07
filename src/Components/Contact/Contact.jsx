// import React from 'react'
import '../../index.css';
import { useState } from 'react'

function Contact({addContact}) {
  const [ firstname, setFirstName ] = useState('')
  const [ lastname, setLastName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ inquires, setInquires ] = useState('')
  const [ message, setMessage ] = useState(null);

  function handleClick(e) {
    e.preventDefault()
    const newContact = {
      firstname,
      lastname,
      email,
      inquires
    }
    if (firstname === '' || lastname === '' || email === '') {
      setMessage('Please fill out all starred information')
    } else {
      addContact(newContact)
      clearInputs()
      setMessage(null)
    }
  }
  
  function clearInputs() {
    console.log("hello!")
    setFirstName('')
    setLastName('')
    setEmail('')
    setInquires('')
  }

  return (
    <div>
      <h2>Contact Me</h2>
      <form>
        <label>First Name*</label>
        <input
        type='text'
        placeholder='First name...'
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        ></input>

        <label>Last Name*</label>
        <input
        type='text'
        placeholder='Last name...'
        value={lastname}
        onChange={(e) => setLastName(e.target.value)}
        ></input>

        <label>Email*</label>
        <input
        type='text'
        placeholder='Enter a valid email address...'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Inquires or Comments (optional):</label>
        <input
        className='inquires'
        type='text'
        placeholder='...'
        value={inquires}
        onChange={(e) => setInquires(e.target.value)}
        ></input>   
      </form>
      { message && <h2>{message}</h2>}
      <button type='button' onClick={(e)=> handleClick(e)}>Submit</button>
    </div>
  )
}

export default Contact
