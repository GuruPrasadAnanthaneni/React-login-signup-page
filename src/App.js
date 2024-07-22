// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login-SignUp/Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignUp from './Components/Login-SignUp/SignUp';
import ForgotPassword from './Components/Login-SignUp/ForgotPassword';
import ResetPassword from './Components/Login-SignUp/ResetPassword';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/forgot-password" element={<ForgotPassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
        </Router>
    </div>
  );
}

export default App;
