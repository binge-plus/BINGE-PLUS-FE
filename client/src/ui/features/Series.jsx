import HeroCarousel from "../components/base/hero-carousel"
import MovieCarousel from "../components/base/movie-carousel"
import Navbar from "../components/Navbar"
import { useState } from "react"

// Sample data
const continueWatching = [
  {
    id: 1,
    title: "Breaking Bad",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Crime", "Drama", "Thriller"],
    rating: "9.5",
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine.",
    year: "2008",
  },
  {
    id: 2,
    title: "The Witcher",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: "8.2",
    description:
      "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    year: "2019",
  },
  {
    id: 3,
    title: "Dune",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Drama"],
    rating: "8.0",
    description:
      "Paul Atreides leads nomadic tribes in a revolt against the galactic emperor and his father's evil nemesis.",
    year: "2021",
  },
  {
    id: 4,
    title: "House of Cards",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Drama", "Thriller"],
    rating: "8.7",
    description: "A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
    year: "2013",
  },
  {
    id: 5,
    title: "Blade Runner 2049",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Drama", "Mystery"],
    rating: "8.0",
    description:
      "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard.",
    year: "2017",
  },
  {
    id: 6,
    title: "The Crown",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Biography", "Drama", "History"],
    rating: "8.7",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    year: "2016",
  },
]

const latestUploads = [
  {
    id: 7,
    title: "Wednesday",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Comedy", "Crime", "Family"],
    rating: "8.1",
    description:
      "Follows Wednesday Addams' years as a student at Nevermore Academy, where she attempts to master her emerging psychic ability.",
    year: "2022",
  },
  {
    id: 8,
    title: "Top Gun: Maverick",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Drama"],
    rating: "8.3",
    description:
      "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past.",
    year: "2022",
  },
  {
    id: 9,
    title: "The Batman",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Crime", "Drama"],
    rating: "7.8",
    description:
      "When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate.",
    year: "2022",
  },
  {
    id: 10,
    title: "Euphoria",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Drama"],
    rating: "8.4",
    description:
      "A look at life for a group of high school students as they grapple with issues of drugs, sex, and violence.",
    year: "2019",
  },
  {
    id: 11,
    title: "Spider-Man: No Way Home",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Fantasy"],
    rating: "8.2",
    description:
      "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    year: "2021",
  },
  {
    id: 12,
    title: "Squid Game",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Drama", "Mystery"],
    rating: "8.0",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
    year: "2021",
  },
]

const actionMovies = [
  {
    id: 13,
    title: "John Wick",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Crime", "Thriller"],
    rating: "7.4",
    description: "An ex-hit-man comes out of retirement to track down the gangsters that took everything from him.",
    year: "2014",
  },
  {
    id: 14,
    title: "Mad Max: Fury Road",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Sci-Fi"],
    rating: "8.1",
    description:
      "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland.",
    year: "2015",
  },
  {
    id: 15,
    title: "Mission: Impossible",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Thriller"],
    rating: "7.1",
    description:
      "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.",
    year: "1996",
  },
  {
    id: 16,
    title: "The Matrix",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Sci-Fi"],
    rating: "8.7",
    description:
      "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about his reality.",
    year: "1999",
  },
  {
    id: 17,
    title: "Avengers: Endgame",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Adventure", "Drama"],
    rating: "8.4",
    description:
      "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions and restore balance to the universe.",
    year: "2019",
  },
  {
    id: 18,
    title: "Die Hard",
    poster: "/placeholder.svg?height=300&width=200",
    genre: ["Action", "Thriller"],
    rating: "8.2",
    description:
      "A New York police officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party.",
    year: "1988",
  },
]

export default function Home() {
  const [isNavHovered, setIsNavHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex">
      {/* Navigation */}
      <div className="relative z-50">
        <Navbar onHoverChange={setIsNavHovered} />
      </div>

      {/* Main Content */}
      <div 
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isNavHovered 
            ? 'ml-64 blur-sm brightness-50' 
            : 'ml-20'
        }`}
      >
        {/* Overlay when nav is hovered */}
        {isNavHovered && (
          <div className="fixed inset-0 bg-black/20 z-10 pointer-events-none" 
               style={{ left: '256px' }} />
        )}
        
        <main className="relative z-0">
          <HeroCarousel />

          <div className="container mx-auto px-6 py-8 space-y-8">
            <MovieCarousel title="Continue Watching" movies={continueWatching} />
            <MovieCarousel title="Latest Uploads" movies={latestUploads} />
            <MovieCarousel title="Action Movies" movies={actionMovies} />
          </div>
        </main>
      </div>
    </div>
  );
}