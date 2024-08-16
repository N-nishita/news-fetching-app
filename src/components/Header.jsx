import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaBookmark, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  function handleSearchVisible() {
    setSearchVisible((prev) => !prev);
  }

  return (
    <header className="bg-orange-500 text-white fixed top-0 left-0 right-0 z-50"> {/* Fixed position with orange background */}
      <nav className="flex items-center justify-between gap-4 p-3">
        {searchVisible ? (
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1">
              <SearchBar />
            </div>
            <button type="button" onClick={handleSearchVisible}>
              <FaArrowLeft />
            </button>
          </div>
        ) : (
          <>
            <Link to="/" className="text-2xl sm:text-3xl font-bold text-white">
              NeighborGood
            </Link>
            <div className="flex-1 max-sm:hidden">
              <SearchBar />
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                className="sm:hidden"
                onClick={handleSearchVisible}
              >
                <FaSearch />
              </button>
              <button
                type="button"
                onClick={() => navigate("/bookmarks")}
                className="px-4 py-2 font-semibold rounded-full bg-green-600 text-gray-100 max-sm:bg-transparent max-sm:text-black max-sm:p-3"
              >
                <span className="max-sm:hidden">Bookmark</span>
                <span className="sm:hidden">
                  <FaBookmark />
                </span>
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
