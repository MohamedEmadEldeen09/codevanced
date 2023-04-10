import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Admin_header({isLogin , current_Admin}) {
  return (
    <>
    <header className="main_header">
      <Link to="/codevanced/admin_view/questions">
        <h1>
          &lt; Codvanced /&gt;
        </h1> 
      </Link>
      <div className="profile_admin">
          { isLogin ? <Link to="/codevanced/admin_view/profile_admin" title="profile">
              <label className="admin_name">{current_Admin.name}</label>        
              <i className='bx bx-user-pin'></i>
           </Link> :
            <Link to="/codevanced/admin_view/admin_login">
              <button className="btn_login">log in</button>
            </Link>
          }         
      </div>
     </header>
     <div className="container_admin">
              <header className="header_admin">
                  <Link to="/codevanced/admin_view/questions">Questions</Link>
                  <Link to="/codevanced/admin_view/addQ">Add</Link>
              </header>
              <hr/>
          <main className="main_admin">
            <Outlet/>         
          </main>
      </div>    
    </>
  )
}

export default Admin_header