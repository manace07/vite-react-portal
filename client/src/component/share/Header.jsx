import React from 'react'

const Header = ({ title }) => {
  return (
    <div className='header text-white p-10 text-left'>
      <h1 id='headertitle'>{ title }</h1>
    </div>
  );
}

export default Header;
