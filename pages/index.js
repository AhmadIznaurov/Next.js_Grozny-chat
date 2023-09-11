import React from "react";
import {Context} from '../context';
import {useRouter} from 'next/router';
import axios from 'axios';

export default function Auth() {
  return (
    <div className="background">
      <div className='auth-container'>
        <form className='auth-form'
              onSubmit={(e) =>
                e.preventDefault()}>
        </form>
      </div>
    </div>
  )
}
