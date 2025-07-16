import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/movieDetails/Hero';
import Title from '../components/movieDetails/Title';
import Cast from '../components/movieDetails/Cast';
import Clips from '../components/movieDetails/Clips';
import Review from '../components/movieDetails/Review';
import MovieCarousel from '../components/base/movie-carousel';
import Modal from '../components/Modal';
import api from '../lib/axios';

const transformRecommendedMovie = (recmovie) => ({
  id: recmovie.id,
  title: recmovie.title,
  poster: recmovie.vPoster,
  rating: recmovie.rating,
  year: recmovie.releaseDate ? recmovie.releaseDate.substring(0, 4) : 'Unknown',
  genre: recmovie.genres || [],
});


const transformMovieData = (movie) => ({
  id: movie.id,
  title: movie.title,
  poster: movie.vPoster,
  genre: movie.genres,
  rating: movie.rating,
  description: movie.description,
  trailerUrl: movie.trailerLink,
  movieUrl: movie.movieLink,
  image: movie.hPoster,
  duration: movie.duration,
  releaseDate: movie.releaseDate ? movie.releaseDate.substring(0, 4) : null,
});

const transformClipsData = (clip) => ({
  id: clip.id,
  title: clip.title,
  clipUrl: clip.clipLink,
  duration: clip.duration,
})

const MovieDetail = () => {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [movies, setMovies] = useState();
  const [castData, setCastData] = useState({ cast: [], crew: [] });
  const [clipsData, setClipsData] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [genreSet, setGenreSet] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const id = window.location.pathname.split('/').pop();
        const res = await api.get(`/movies/${id}`);
        setMovies(transformMovieData(res.data));
        setGenreSet(res.data.genres || []);
      } catch (error) {
        console.log(error);
        setError("Failed to load movie details");
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchCastAndCrew = async () => {
      try {
        setLoading(true);
        const id = window.location.pathname.split('/').pop();
        const res = await api.get(`/movies/${id}/cast`);
        
        // Handle the response structure from backend
        if (res.data && res.data.cast && res.data.crew) {
          setCastData({
            cast: res.data.cast,
            crew: res.data.crew
          });
        } else {
          // Fallback for old response structure
          setCastData({
            cast: res.data.transformedCast || [],
            crew: []
          });
        }
      } catch (error) {
        console.error("Error fetching cast and crew:", error);
        setError("Failed to load cast and crew");
        setCastData({ cast: [], crew: [] });
      } finally {
        setLoading(false);
      }
    };
    fetchCastAndCrew();
  }, []);

  useEffect(() => {
    const fetchClips = async () => {
      try {
        const id = window.location.pathname.split('/').pop();
        const res = await api.get(`/clips/${id}`);

        if (res.data) {
          setClipsData(res.data.map(transformClipsData));
        }
      } catch (error) {
        console.error("Error fetching clips:", error);
        setError("Failed to load clips");
        setClipsData([]);
      }
    };
    fetchClips();
  }, []);

  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      if (!movies) return; // wait for the main movie to be loaded

      try {
        const res = await api.get(`/movies`);
        const allMovies = res.data;

        const currentGenres = genreSet.length > 0 ? genreSet : movies.genres || [];

        const recMovies = allMovies
          .filter(movie => 
            movie.id !== movies.id && // exclude current movie
            movie.genres.some(genre => currentGenres.includes(genre))
          )
          .map(transformRecommendedMovie); // transform each one

        setRecommendedMovies(recMovies);
      } catch (error) {
        console.error("Error fetching recommended movies:", error);
        setError("Failed to load recommended movies");
        setRecommendedMovies([]);
      }
    };

    fetchRecommendedMovies();
  }, [movies]); // re-run when movie details are available


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex">
      {/* Navigation */}
      <div className="relative z-50">
        <Navbar onHoverChange={setIsNavHovered} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isNavHovered ? 'ml-64 blur-sm brightness-50' : 'ml-20'
        }`}
      >
        <Modal />
        {/* Overlay when nav is hovered */}
        {isNavHovered && (
          <div
            className="fixed inset-0 bg-black/20 z-10 pointer-events-none"
            style={{ left: '256px' }}
          />
        )}

        <main className="relative z-0 px-10 py-4">
          <Hero {...movies}/>

          <div className="container mx-auto py-2 flex flex-row gap-8">
            <div className="w-full md:w-[70%] flex flex-col gap-4">
              <Title {...movies}/>
              <Cast 
                cast={castData.cast} 
                crew={castData.crew} 
                loading={loading} 
                error={error}
              />
              <Clips clips={clipsData} />
              <div className="container mx-auto space-y-8">
                <MovieCarousel title="Recommended Movies" movies={recommendedMovies} />
              </div>
            </div>

            <div className="w-full md:w-[30%]">
              <Review />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MovieDetail;