import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
     <div className="container">
        <section id="sign-up" className="">
            <div className="sign-up-class">
                <form className="information">
                <label htmlFor="fn">First Name :</label>
                <input type="text" placeholder="first name" id="fn" required />
                <label htmlFor="fl">Last Name :</label>
                <input type="text" placeholder="Last name" id="fl" required />
                <label htmlFor="em">Email :</label>
                <input type="email" placeholder="email" id="em" required />
                <label htmlFor="pa">Passward :</label>
                <input type="password" placeholder="password" id="pa" required />
                <label htmlFor="c-pa">Confirm Passward :</label>
                <input type="password" placeholder="password" id="c-pa" required />
                <button type="submit" className="btn">Sign Up</button>
                </form>               
                <footer className="sign-up-footer">
                    <p>if you already have an account 
                    <Link to="/codevanced/user_view/log_in">log in</Link></p>
                </footer>   
            </div>                 
        </section>
     </div>
     </>
  )
}

export default SignUp