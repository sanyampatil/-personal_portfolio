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
      <a href='#skills'>skill</a>
      <a href='#services'>services</a>
      <a href='#contact'>contact</a>
    </div>
    <a href='mailto:patilsanyam869@gmail.com'>
      <button>Email</button>
      <div className='bg-red-500 w-50px h-50px rounded-full'></div>
      <div></div>
      <div></div>
      <div></div>

    </a>
  </>
  )
}

export default Header
