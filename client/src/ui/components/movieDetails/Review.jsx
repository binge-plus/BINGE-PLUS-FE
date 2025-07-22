import { useState } from "react"
import { Star, ThumbsUp, ThumbsDown, MessageCircle } from "lucide-react"

const Review = () => {
  const [userRating, setUserRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)

  const reviews = [
    {
      id: 1,
      user: "MovieBuff2024",
      rating: 5,
      date: "2 days ago",
      comment:
        "Absolutely phenomenal! Heath Ledger's performance as the Joker is legendary. The cinematography and direction are top-notch.",
      likes: 24,
      dislikes: 2,
    },
    {
      id: 2,
      user: "CinemaLover",
      rating: 4,
      date: "1 week ago",
      comment:
        "A masterpiece of filmmaking. The story is gripping and the action sequences are incredible. Highly recommended!",
      likes: 18,
      dislikes: 1,
    },
    {
      id: 3,
      user: "FilmCritic99",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "This movie redefined superhero films. The psychological depth and moral complexity make it a true work of art.",
      likes: 31,
      dislikes: 0,
    },
  ]

  const handleStarClick = (rating) => {
    setUserRating(rating)
  }

  return (
    <div className="space-y-6 py-4">
      <h2 className="text-2xl font-bold text-white">Reviews & Ratings</h2>

      {/* User Rating Section */}
      <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-semibold text-white mb-4">Rate this movie</h3>
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleStarClick(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-colors"
            >
              <Star
                size={32}
                className={`${star <= (hoverRating || userRating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
              />
            </button>
          ))}
          {userRating > 0 && <span className="text-white ml-2 font-semibold">{userRating}/5</span>}
        </div>

        <textarea
          placeholder="Write your review..."
          className="w-full bg-gray-700/50 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:border-red-400"
          rows={4}
        />

        <button className="mt-3 bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all">
          Submit Review
        </button>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800/30 backdrop-blur-md rounded-lg p-6 border border-gray-700/50">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {review.user[0]}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{review.user}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={16}
                          className={`${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">{review.comment}</p>

            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                <ThumbsUp size={16} />
                <span>{review.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                <ThumbsDown size={16} />
                <span>{review.dislikes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors">
                <MessageCircle size={16} />
                <span>Reply</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Review
