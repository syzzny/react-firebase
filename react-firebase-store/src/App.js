import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import Login from './page/Login';
import FireStoreTest from './page/FireStoreTest';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/firestore' element={<FireStoreTest/>}></Route>
    </Routes>
  );
}

export default App;
