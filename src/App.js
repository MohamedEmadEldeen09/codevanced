import { BrowserRouter , Routes ,Route ,Link} from "react-router-dom";
import { QueryClient , QueryClientProvider } from "react-query";


//user pages
import Home from './userInterface/components/Home.js'
import Result from './userInterface/components/Result'
import LogIn from './userInterface/components/LogIn.js'
import Questionare from './userInterface/components/Questionare.js'
import Footer from "./userInterface/components/Footer.js";
import Library from "./userInterface/components/Library.js";
import SignUp from "./userInterface/components/SignUp.js";
import UserProfile from "./userInterface/components/UserProfile.js";
import Not_found  from './userInterface/components/not_found.js'


function App() {
  
  const queryClient = new QueryClient()

  return (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/codevanced" element={<Footer />}>
          <Route exact index element={<Home />}/>
          <Route exact path="/codevanced/user_view" element={<Home />}/>
          <Route exact path="/codevanced/user_view/join" element={<SignUp />}/>
          <Route exact path="/codevanced/user_view/test" element={<Questionare />}/>
          <Route exact path="/codevanced/user_view/result" element={<Result />}/>   
          <Route exact path="/codevanced/user_view/library" element={<Library />}/>
          <Route exact path="/codevanced/user_view/log_in" element={<LogIn />}/>
          <Route exact path="/codevanced/user_view/user_profile" element={<UserProfile />}/>  

        </Route>
        <Route  path="*"  element={<Not_found />}/>  
      </Routes>     
    </BrowserRouter>
  </QueryClientProvider>
   
  );
}

export default App;
