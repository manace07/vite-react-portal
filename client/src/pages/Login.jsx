import React from 'react';
import { FaLock } from "react-icons/fa6";

const Login = () => {
return (
<div className="flex justify-center w-screen h-screen items-center bg-stone-900">
  <div className='col_1 flex flex-col justify-center items-center text-center text-3xl text-white'>
    <div className='flex w-20 justify-center items-center'>
      <img src="assets/images/usherlogo.png" alt="usher-logo" />
    </div>
    <p>USHER TECHNOLOGIES INC.</p>
    <p>“USHERing a safer world.”</p>
  </div>
  {/* <div className='col_2 flex bg-stone-500 justify-left text-left items-center w-96 h-96'>
    <div className='justify-center ml-8'>
      <FaLock />
      <p className="text-3xl text-white">Email</p>
      <p className="text-3xl text-white">Password</p>
    </div>
    <button className='text-lg mt-40 border-solid border-2 rounded-lg px-2 border-'>Log In</button>
  </div> */}
  <div className="relative">
    <div className="absolute left-10 -right-72 -top-28 -bottom-28 inset-10 bg-gradient-to-b from-green-500 to-blue-900  rounded-e-full blur-3xl"></div>
    <div className='relative col_2 flex bg-stone-500 justify-center text-center items-center w-96 h-96 '>


      <div className='form relative'>
        <form action="">
          <div className='flex justify-center text-center items-center'>
            <FaLock />
          </div>
          <div className="input-container p-2">
            <input type="text" name='uname' required placeholder='Email' />
          </div>
          <div className="input-container p-2">
            <input type="password" name='uname' required placeholder='Password' />
          </div>
          <div><button className='text-lg border-solid border-2 rounded-lg px-2 border-'>Log In</button></div>
        </form>

      </div>
    </div>
  </div>

</div>
)
}

export default Login