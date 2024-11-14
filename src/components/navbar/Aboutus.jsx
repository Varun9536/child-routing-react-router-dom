import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Aboutus() {
  return (
    <>Aboutus

      <div>
        <Link to="details"> details</Link>
      </div>
      <Outlet />

    </>
  )
}
