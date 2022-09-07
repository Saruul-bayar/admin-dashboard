import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Home from './pages/home/Home';
import List from './pages/list/List'
import Login from './pages/login/Login'
import New from './pages/login/Login'
import Single from './pages/single/Single'
import './App.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />}></Route>
            <Route path='users' >
              <Route index element={<List />}></Route>
              <Route path=':userId' element={<Single />}></Route>
              <Route path='new' element={<New />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
