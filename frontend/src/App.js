import Home from "./Components/Home";
import Loginform from "./Components/Loginform";
import SignUpform from "./Components/Signupform";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    {/* jai shree ram */}
    
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUpform />} />
          <Route path="/login" element={<Loginform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
