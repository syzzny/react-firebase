import logo from './logo.svg';
import './App.css';
import {Routes, Router, Route} from 'react-router-dom'
import Home from './components/Home.jsx';
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/loginform' element={<LoginForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
