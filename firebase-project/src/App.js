import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './page/Home';
import FireStoreTest from './page/FireStoreTest';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/firestore' element={<FireStoreTest/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
