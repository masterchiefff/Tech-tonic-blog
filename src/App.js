import { useState } from 'react';
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home/index.jsx';
import Menu from './components/sections/menu';
import Header from './components/header';
import Profile from './components/profile';
import OtherSection from './components/sections/others';

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
    <div className='tt-container flex relative'>
      {isLoggedIn ?  
      <div className='tt-sidemenu  border-r-2 border-stone-200 pt-0 p-5 w-20'>
        <Menu />
      </div>
      : ''}

      <div className='w-2/3 p-8'>
        <Header />
        <Outlet />
      </div>

      <div className='p-8 grow border-l-2 border-stone-200'>
        <div className='fixed'>
          <Profile />
          <OtherSection />
        </div>
      </div>
    </div>
  )
}

export default App;
