import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

// import styles
import '../styles/careers.css'

export default function CareersLayout() {
  return (
    <div className="careers-main">
      <section className="careers-section">
        <NavLink className='career-link' to='careers' >Careers</NavLink>
        <NavLink className='career-link' to='add' >Add</NavLink>
      </section>

      <Outlet />
    </div>


  )
}
