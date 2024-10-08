

import React from 'react'
import { Route, Navigate, Routes} from 'react-router-dom'
import Home from '../Pages/Home'
import Tours from '../Pages/Tours'
import TourDetails from '../Pages/TourDetails'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import SearchResultList from '../Pages/SearchResultList'

const Routers = () => { 
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tour/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tours/search' element={<SearchResultList />} />

    </Routes>
    
  );
};

export default Routers;