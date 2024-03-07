import React, { PropsWithChildren } from 'react'
import { NavBar } from '../NavBar'

export default function MainTemplate({children}:PropsWithChildren) {
  return (
    <>
    <div>
        {children}
    </div>
    </>
  )
}
