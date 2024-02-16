import React, { PropsWithChildren } from 'react'
import { NavBar } from '../NavBar'

export default function MainTemplate({children}:PropsWithChildren) {
  return (
    <>
    <NavBar/>
    <div>
        {children}
    </div>
    </>
  )
}
