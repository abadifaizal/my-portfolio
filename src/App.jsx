import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Collections from './Pages/Collections';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='collections' element={<Collections/>}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

const root = document.getElementById('root')

createRoot(root)
  .render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )