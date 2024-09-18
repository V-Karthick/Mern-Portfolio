import React from 'react'
import Profile from './pages/Profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Project from './pages/Project'
import WebLayout from './Layouts/WebLayout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout/>}>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App