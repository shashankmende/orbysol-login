
import './App.css';
import Login from './components/Login'
import ForgotPassword from './components/forgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;
