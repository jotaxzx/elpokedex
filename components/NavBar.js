import Image from 'next/image'
import React from 'react'
import { ActiveLink } from './ActiveLink'

export const NavBar = () => {
  return (
    <>
      <nav
        style={{ display: 'flex',  justifyContent: 'space-between', backgroundColor: '#FF6347', position: 'fixed', width: '100%', zIndex: 1 }}
      >
        <Image src="/pokemon.png" alt="Vercel Logo" width={92} height={20} style={{ cursor: 'pointer' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', minWidth: '400px' }} >
          <ActiveLink title="Home" href="/" />
          <ActiveLink title="Favorites" href="/favorites" />
          {/* <ActiveLink title="Contact" href="/contact" /> */}
        </div>

        <div>
        </div>
        
      </nav>
    </>
  )

}


