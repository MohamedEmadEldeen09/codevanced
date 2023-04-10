import React from 'react'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
    <Outlet />
    <footer className="footer">
        <h3> copy right 2023 &copy;</h3>
        <p>-- MIS Team</p>
    </footer>  
    </>
  )
}

export default Footer