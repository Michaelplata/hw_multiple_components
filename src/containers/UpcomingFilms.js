import React from 'react';
import FilmsList from '../components/FilmsList';
import ViewMore from '../components/ViewMore';

const UpcomingFilms = () => {
    
    return (
    <>
    <h1>Upcoming Film Releases for UK</h1>
    <FilmsList />
    <ViewMore />
    </>
    );
   
}

export default UpcomingFilms;