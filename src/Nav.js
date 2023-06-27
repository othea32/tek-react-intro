import React from 'react'

function Nav() {

 const isLogged = "false";

  return (
    <div className='nav'>
    {isLogged && <h1>I'm visable</h1>}
    {isLogged ? <h1>I'm visable</h1> : <h1>Not visable</h1>}
    </div>
  )
}

export default Nav