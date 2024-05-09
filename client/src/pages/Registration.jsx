import React from 'react';
import { FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Registration = () => {
return (
<div className="all flex justify-center w-screen h-screen  bg-stone-900">
  <div className='mb-10 col_1 flex flex-col justify-center items-center text-center text-3xl text-white'>
    <div className='flex w-96 justify-center items-center'>
      <img src="assets/images/usherlogo.png" alt="usher-logo" className='logo'/>
    </div>
    <p id='text'>USHER TECHNOLOGIES INC.</p>
    <p id='text'>“USHERing a safer world.”</p>
  </div>

  <div className="o-form relative">
    {/* <div className="backg absolute left-52 -right-80 -top-28 -bottom-10 inset-10 bg-gradient-to-b  from-[#439E03] to-[#046BE1] rounded-b-lg blur-3xl"></div> */}
    <div className='backg1'></div>
    <div className='backg2'></div>
    <div className='form1 relative col_2 flex justify-center text-center items-center '>  


      <div className='form relative'> 
        <form action="">
          <div className='flex justify-center text-center items-center'>
            <FaLock className='padlock' />
          </div>
          <div className="input-container pb-3">
            <input id="container" type="text" name='uname' required placeholder='Username' />
          </div>
          <div className="input-container pb-3">
            <input id="container" type="text" name='uname' required placeholder='Email' />
          </div>
          <div className="input-container pb-5">
            <input id="container" type="password" name='password' required placeholder='Password' />
          </div>
          <div className='flex flex-col'>
          <button className='text-lg mb-3 text-white font-medium rounded-sm p-2.5 px-2.5 bg-blue-700'>Register</button>
          <div>
            <Link to="/" className='but2 text-base text-white font-medium rounded-sm'>Back to Login</Link>
           </div>
          </div>
        </form>
      </div>
    </div>
  </div>

</div>
)
}

export default Registration