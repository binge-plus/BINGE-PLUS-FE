import HeroCarousel from "../components/base/hero-carousel";
import MovieCarousel from "../components/base/movie-carousel";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import api from '../lib/axios';
import Modal from "../components/Modal";


const transformMovieData = (movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.vPoster, // Using vertical poster
    genre: movie.genres || movie.genre, // Fallback to genre if genres is not available
    rating: movie.rating,
    description: movie.description,
    year: movie.releaseDate ? movie.releaseDate.substring(0, 4) : null,
});

// IDs for continue watching (from your original data)
// const continueWatchingIds = [1, 2, 3, 4];

// IDs for latest uploads (from your original data)
// const latestUploadsIds = [7, 8, 9, 10, 11, 12, 15];

export default function Home() {
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [movies, setMovies] = useState([])

    useEffect(() => {
    const fetchMovies = async () => {
        try {
            const res = await api.get("/movies");
            setMovies(res.data);
        } 
        catch (error) {
            console.log(error);
            toast.error("Failed to load movies")
        }
        };
        fetchMovies();
    }, []);


    // Filter and transform continue watching movies
    const latestUploads = movies
        .map(transformMovieData);

    // // Filter and transform latest uploads movies
    // const latestUploads = Movie
    //     .filter((movie) => latestUploadsIds.includes(parseInt(movie.id)))
    //     .map(transformMovieData);

    // Filter action movies based on genre
    const actionMovies = movies
        .filter((movie) => movie.genres.includes("ACTION"))
        .map(transformMovieData);

    // Filter adventure movies based on genre
    const adventureMovies = movies
        .filter((movie) => movie.genres.includes("ADVENTURE"))
        .map(transformMovieData);

    // Filter drama movies based on genre
    const dramaMovies = movies
        .filter((movie) => movie.genres.includes("DRAMA"))
        .map(transformMovieData);

    // Filter mystery movies based on genre
    const mysteryMovies = movies
        .filter((movie) => movie.genres.includes("MYSTERY"))
        .map(transformMovieData);

    // Filter horror movies based on genre
    const horrorMovies = movies
        .filter((movie) => movie.genres.includes("HORROR"))
        .map(transformMovieData);

    // Filter comedy movies based on genre
    const comedyMovies = movies
        .filter((movie) => movie.genres.includes("COMEDY"))
        .map(transformMovieData);

    // Filter crime movies based on genre
    const crimeMovies = movies
        .filter((movie) => movie.genres.includes("CRIME"))
        .map(transformMovieData);

    // Filter fantasy movies based on genre
    const fantasyMovies = movies
        .filter((movie) => movie.genres.includes("FANTASY"))
        .map(transformMovieData);

    // Filter thriller movies based on genre
    const thrillerMovies = movies
        .filter((movie) => movie.genres.includes("THRILLER"))
        .map(transformMovieData);
    
    // Filter sci-fi movies based on genre
    const sciFiMovies = movies
        .filter((movie) => movie.genres.includes("SCI_FI"))
        .map(transformMovieData);

    // Filter romance movies based on genre
    const romanceMovies = movies
        .filter((movie) => movie.genres.includes("ROMANCE"))
        .map(transformMovieData);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex">
            {/* Navigation */}
            <div className="relative z-50">
                <Navbar onHoverChange={setIsNavHovered} />
            </div>

            {/* Main Content */}
            <div
                className={`flex-1 transition-all duration-300 ease-in-out ${
                    isNavHovered ? "ml-64 blur-sm brightness-50" : "ml-20"
                }`}
            >
                <Modal />
                {/* Overlay when nav is hovered */}
                {isNavHovered && (
                    <div
                        className="fixed inset-0 bg-black/20 z-10 pointer-events-none"
                        style={{ left: "256px" }}
                    />
                )}

                <main className="relative z-0">
                    <div className="absolute inset-0 bg-gray-900 h-20" />

                    <div className="container mx-auto px-6 py-8 space-y-8">
                        {/* {continueWatching.length > 0 && (
                            <MovieCarousel title="Continue Watching" movies={continueWatching} />
                        )} */}
                        {latestUploads.length > 0 && (
                            <MovieCarousel title="Latest Uploads" movies={latestUploads} />
                        )}
                        {actionMovies.length > 0 && (
                            <MovieCarousel title="Action Movies" movies={actionMovies} />
                        )}
                        {adventureMovies.length > 0 && (
                            <MovieCarousel title="Adventure Movies" movies={adventureMovies} />
                        )}
                        {dramaMovies.length > 0 && (
                            <MovieCarousel title="Drama Movies" movies={dramaMovies} />
                        )}
                        {mysteryMovies.length > 0 && (
                            <MovieCarousel title="Mystery Movies" movies={mysteryMovies} />
                        )}
                        {horrorMovies.length > 0 && (
                            <MovieCarousel title="Horror Movies" movies={horrorMovies} />
                        )}
                        {comedyMovies.length > 0 && (
                            <MovieCarousel title="Comedy Movies" movies={comedyMovies} />
                        )}
                        {crimeMovies.length > 0 && (
                            <MovieCarousel title="Crime Movies" movies={crimeMovies} />
                        )}
                        {fantasyMovies.length > 0 && (
                            <MovieCarousel title="Fantasy Movies" movies={fantasyMovies} />
                        )}
                        {thrillerMovies.length > 0 && (
                            <MovieCarousel title="Thriller Movies" movies={thrillerMovies} />
                        )}
                        {sciFiMovies.length > 0 && (
                            <MovieCarousel title="Sci-Fi Movies" movies={sciFiMovies} />
                        )}
                        {romanceMovies.length > 0 && (
                            <MovieCarousel title="Romance Movies" movies={romanceMovies} />
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}