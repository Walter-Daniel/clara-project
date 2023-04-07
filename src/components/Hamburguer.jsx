import React from 'react'

export const Hamburguer = ({openNav, handleClick }) => {
  return (
    <div>
        <div onClick={handleClick} 
            className={`hamburger ${ openNav ? 'is-active' : '' }`} 
            id="hamburger-6">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>
    </div>
  )
}
