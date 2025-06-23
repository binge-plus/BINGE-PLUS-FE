import React from 'react';
import { Route, Routes } from "react-router";

import Home from './ui/features/Home';
import Login from './ui/features/Login';
import Profile from './ui/features/Profile';
import Register from './ui/features/Register';
import View from './ui/features/View';
import Setting from './ui/features/Setting';
import MovieDetail from './ui/features/MovieDetail';
import SeriesDetail from './ui/features/SeriesDetail';
import Movie from './ui/features/Movie';
import Series from './ui/features/Series';
import PageNotFound from './ui/features/PageNotFound';



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/view" element={<View />} />
            <Route path="/settings" element={<Setting />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/series" element={<Series />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/series/:id" element={<SeriesDetail />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default App;