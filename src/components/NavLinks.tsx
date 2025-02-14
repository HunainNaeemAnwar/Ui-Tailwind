import Link from 'next/link'
import React from 'react'

const NavLinks = ({linkName,path}:{linkName:string,path:string}) => {
  return (
    <Link href={path}>{linkName}</Link>
  )
}

export default NavLinks