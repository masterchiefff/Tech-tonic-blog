import { useState } from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/index.jsx';
import Menu from './components/sections/menu';
import Header from './components/header';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

const Root = () => {
  const [isLoggedIn] = useState(true);
  return (
    <div className='tt-container flex'>
      {isLoggedIn ?  
      <div className='tt-sidemenu pt-0 p-5 w-20 border-r-2 border-stone-200 h-screen'>
        <Menu />
      </div>
      : ''}

      <div className='grow-[4] p-8'>
        <Header />
        <Outlet />
      </div>

      <div className='p-8 grow border-l-2 border-stone-200 h-screen'>
        <p>last part</p>
      </div>
    </div>
  )
}

export default App;
