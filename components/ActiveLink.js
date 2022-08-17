import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const style = {
  color: 'white',
  padding: '10px',
  backgroundColor: '#ff826c',
  cursor: 'pointer',
  width: '200px',
  textAlign: 'center'
}
const style2 = {
  color: 'white',
  padding: '10px',
  cursor: 'pointer',
  width: '200px',
  textAlign: 'center'
}

export const ActiveLink = ({ title, href }) => {

  const router = useRouter()
  const { asPath } = router;

  return (
    <Link href={href}>
      <div style={asPath === href ? style : style2}> {title} </div>
    </Link>
  )
}
