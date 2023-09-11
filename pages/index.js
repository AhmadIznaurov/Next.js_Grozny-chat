import React, { useContext } from 'react'
import {Context} from '../context';
import {useRouter} from 'next/router';
import axios from 'axios';

export default function Auth() {

  const { setUsername, setSecret} = useContext(Context);

  return (
    <div className="background">
      <div className='auth-container'>
        <form className='auth-form'
              onSubmit={(e) =>
                e.preventDefault()}>
        </form>
        <div className='auth-title'>Grozny Chat on NextJS</div>
        <div className='input-container'>
          <input placeholder='Email'
                 className='text-input'
                 onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='input-container'>
          <input placeholder='Password'
                 type='password'
                 className='text-input'
                 onChange={(e) => setSecret(e.target.value)}
          />
        </div>

        <button className='submit-button' type='submit'>
          Login / Sign Up
        </button>
      </div>
    </div>
  )
}
