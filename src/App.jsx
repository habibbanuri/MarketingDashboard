import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css'
import Login from './Auth/Login';
import Layout from './Layout/Layout';
import DashBoard from './Pages/DashBoard';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Layout/>}>
      <Route  path='/login' element={<Login/>}/>
      <Route  path='/dashboard' element={<DashBoard/>}/>
      </Route>
    </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
