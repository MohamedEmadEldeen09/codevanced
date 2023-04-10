import { BrowserRouter , Routes ,Route ,Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { QueryClient , QueryClientProvider } from "react-query";

//admin component
import EditQ  from "./adminstration/component/editQ.js";
import Questions from './adminstration/component/questions.js'
import AddQ from './adminstration/component/addQ.js'
import Admin_login from './adminstration/component/admin_login.js'
import Profile from './adminstration/component/profile.js'
import Admin_header  from './adminstration/component/admin_header.js'
import Not_found  from './adminstration/component/not_found.js'
import Start from "./Start.js";
//


import Home from './userInterface/components/Home.js'
import Result from './userInterface/components/Result'
import Join from './userInterface/components/Join'
import Questionare from './userInterface/components/Questionare.js'
import Footer from "./userInterface/components/Footer.js";
import Library from "./userInterface/components/Library.js";
import SignUp from "./userInterface/components/SignUp.js";


function App() {
  
  let questions = useSelector(state => state.admin.questions)
  let isLogin = useSelector(state => state.admin.admin_login)
  let current_Admin = useSelector(state => state.admin.current_Admin)
  
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/codevanced" element={<Start/>}/>
        <Route path="/codevanced/admin_view"  
         element={<Admin_header isLogin={isLogin} current_Admin={current_Admin} />}>              
            <Route exact index element={<Questions questions={questions} isLogin={isLogin}/>}/>       
            <Route path="/codevanced/admin_view/questions"  element={<Questions questions={questions} isLogin={isLogin}/>}/>
            <Route exact path="/codevanced/admin_view/editQ/:Qid"  element={<EditQ questions={questions} isLogin={isLogin}/>}/>
            <Route exact path="/codevanced/admin_view/addQ"  element={<AddQ  isLogin={isLogin}/>}/>
            <Route exact path="/codevanced/admin_view/profile_admin"  element={<Profile isLogin={isLogin} 
            current_Admin={current_Admin}/>}/>
            <Route exact path="/codevanced/admin_view/admin_login"  element={<Admin_login isLogin={isLogin}/>}/>
            
        </Route>
        <Route path="/codevanced/user_view" element={<Footer />}>
          <Route exact index element={<Home />}/>
          <Route exact path="/codevanced/user_view/join" element={<SignUp />}/>
          <Route exact path="/codevanced/user_view/test" element={<Questionare />}/>
          <Route exact path="/codevanced/user_view/result" element={<Result />}/>   
          <Route exact path="/codevanced/user_view/library" element={<Library />}/>
          <Route exact path="/codevanced/user_view/log_in" element={<Join />}/>                                                      
        </Route>
        <Route  path="*"  element={<Not_found />}/>  
      </Routes>     
    </BrowserRouter>
  </QueryClientProvider>
   
  );
}

export default App;
