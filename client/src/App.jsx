import React from 'react';
import { Route, Routes } from "react-router";

import Home from './ui/features/Home';
import View from './ui/features/View';
import SeriesDetail from './ui/features/SeriesDetail';
import Series from './ui/features/Series';
import Login from './ui/features/Login';
import Profile from './ui/features/Profile';
import Register from './ui/features/Register';
import CastCrewDetails from './ui/features/CastCrewDetails';
import Search from './ui/features/Search';
import Setting from './ui/features/Setting';
import MovieDetail from './ui/features/MovieDetail';
import Movie from './ui/features/Movie';
import PageNotFound from './ui/features/PageNotFound';
import ComingSoon from './ui/features/ComingSoon';



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<ComingSoon />} />
            <Route path="/profile" element={<ComingSoon />} />
            <Route path="/register" element={<ComingSoon />} />
            <Route path="/view" element={<ComingSoon />} />
            <Route path="/settings" element={<ComingSoon />} />
            <Route path="/movies" element={<Movie />} />
            <Route path="/series" element={<ComingSoon />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/series/:id" element={<ComingSoon />} />
            <Route path="/cast-crew/:id" element={<ComingSoon />} />
            <Route path="/search" element={<ComingSoon />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes>
    );
};

export default App;