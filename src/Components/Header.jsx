import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
<>
    <nav>
        <h1>TurboG Star</h1>
        <main>
            <Link to={'/#home'}>Home</Link>
            <Link to={'/Contact'}>Contact</Link>
            <HashLink to={'/#about'}>About</HashLink>
            {/*   why #  becuse id de hai taki us hi page me scrooll kr payge  that why scroll down smoot h rkha hai */}
             <HashLink to={'/#brands'}>Brands</HashLink>
          
        </main>
    </nav>
</>
  )
}

export default Header
