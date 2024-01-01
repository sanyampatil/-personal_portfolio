import React from 'react'

const Header = () => {
  return (
    <nav>
   
      <NavContent/>
    </nav>
  )
}

const NavContent = () => {
 return(

  <>
    <h2>sanyam</h2>
    <div>
      <a href='#home'>home</a>
      <a href='#about'>skill</a>
      <a href='#services'>services</a>
      <a href='#contact'>contact</a>
    </div>
    <a href='mailto:patilsanyam869@gmail.com'>
      <button>Email</button>
    </a>
  </>
  )
}

export default Header
