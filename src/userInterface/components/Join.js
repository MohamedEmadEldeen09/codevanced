import { Link } from "react-router-dom"

function Join() {
  return (  
    <div className="container">
      <section id="sign-up" className="">
          <div className="sign-up-className">
              <form className="information">
                  <label htmlFor="em">Email :</label>
                  <input type="email" placeholder="email" id="em" required />
                  <label htmlFor="pa">Passward :</label>
                  <input type="text" placeholder="name" id="pa" required />
                  <button type="submit" className="btn">join</button>
              </form>               
              <footer className="sign-up-footer">
                  <p>if you do not have an account 
                    <Link to="/codevanced/user_view/join">Sign-up</Link></p>
              </footer>   
          </div>              
      </section>
    </div>   
  )
}

export default Join