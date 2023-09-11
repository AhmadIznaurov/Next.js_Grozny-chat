import React, { useContext } from 'react'
import {useRouter} from 'next/router';
import axios from 'axios';
import { Context } from '@/context'

export default function Auth() {
  const {username, setUsername, secret, setSecret} = useContext(Context);
  const router = useRouter()

  function onSubmit(e) {
    e.preventDefault();
    if(username.length === 0 || secret.length === 0) return

    axios
      .put(
      'https://api.chatengine.io/users/',
      {username, secret},
           {headers: {"Private-key": "4c2ab7cb-31a9-406c-ae6c-829efcddcaa5"}}
    )
      .then((r) => router.push("/chats"));
  }

  return (
    <div className="background">
      <div className='auth-container'>
        <form className='auth-form'
              onSubmit={(e) => onSubmit(e)}>
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
