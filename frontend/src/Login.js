import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './LoginValidation';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    event.preventDefault();
    const target = event.target;
    setValues(prev => ({ ...prev, [target.name]: [target.value] }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Log-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label><strong>Email</strong></label>
            <input type="email" placeholder='Enter email' name="email"
              onChange={handleInput} className='form-control rounded-0' />
              {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label><strong>Password</strong></label>
            <input type="Password" placeholder='Enter password' name="password"
              onChange={handleInput} className='form-control rounded-0' />
              {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
          <p>you are agree out t&c.</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
