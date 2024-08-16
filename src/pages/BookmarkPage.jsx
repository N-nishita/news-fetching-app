import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { twMerge } from "tailwind-merge";

// import { addBookmark, removeBookmark } from "../features/news/newsSlice";

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("newsly_bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, []);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Bookmarked News</h1>
        {bookmarks.length === 0 ? (
          <p>No bookmarks found.</p>
        ) : (
          <ul>
            {bookmarks.map((bookmark, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={`/news/${encodeURIComponent(bookmark.url)}`}
                  className="text-gray-700"
                >
                  {bookmark.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default BookmarkPage;
