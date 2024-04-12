import React from 'react'
import { Link } from 'react-router-dom' 

function Signup() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>Sign-Up</h2>
                <form action="">
                    <div className='mb-3'>
                        <label><strong>Name</strong></label>
                        <input type="text" placeholder='Enter name' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label><strong>Email</strong></label>
                        <input type="email" placeholder='Enter email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3'>
                        <label><strong>Password</strong></label>
                        <input type="Password" placeholder='Enter password' className='form-control rounded-0' />
                    </div>
                    <button className='btn btn-success w-100 rounded-0'>Sign up</button>
                    <p>you are agree out t&c.</p>
                    <Link to="/" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none '>Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;
