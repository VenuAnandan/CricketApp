import logo from './logo.svg';
import './App.css';
import LOGIN from './components/Login';
// import NAVBAR from './components/Navbar';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Series from './pages/Series';
import Teams from './pages/Teams';
import Ranking from './pages/Rank';
import SignUp from './components/SignUp';
import Subscription from './pages/Subscription';
import Admin from './admin/admin';

function App() {
  const isAuthenticated = localStorage.getItem('authentication') == 'true';
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LOGIN/> }/>
        <Route path='/signup' element={ <SignUp/> }/>
        <Route path='/home' element={isAuthenticated ? <Home/> : <Navigate to="/"/>} />
        <Route path='/series' element={isAuthenticated ? <Series/> : <Navigate to="/"/>} />
        <Route path='/teams' element={isAuthenticated ? <Teams/> : <Navigate to="/"/>} />
        <Route path='/ranking' element={isAuthenticated ? <Ranking/> : <Navigate to="/"/>} /> 
        <Route path='/subscription' element={isAuthenticated ? <Subscription/> : <Navigate to="/"/>}/>
        <Route path='/admin' element={isAuthenticated ? <Admin/> : <Navigate to="/"/>} />
      </Routes>
    </Router>
  );
}

export default App;
