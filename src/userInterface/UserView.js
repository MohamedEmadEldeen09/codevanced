import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import Result from './components/Result'
import Join from './components/Join'

function UserView() {
  return (
    <>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/join" element={<Join />}/>
        {/* <Route exact path="/test"><Home /></Route> */}
        <Route exact path="/result" element={<Result />}/>
      
        <footer className="footer">
          <h3> copy right 2023 &copy;</h3>
          <p>-- MIS Team</p>
        </footer>  
    </>
  )
}

export default UserView