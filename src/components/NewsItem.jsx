import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { addBookmark, removeBookmark } from "../features/news/newsSlice";
import Image from "./Image";
import NewsItemHeader from "./NewsItemHeader";
import NewsItemFooter from "./NewsItemFooter";

const NewsItem = ({ article, index }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.news.bookmarks);
  const isBookmarked = bookmarks.some(
    (bookmark) => bookmark.url === article.url
  );

  const encodedUrl = encodeURIComponent(article.url);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(article.url));
    } else {
      dispatch(addBookmark(article));
    }
  };

  const flexDirection = index % 2 === 0 ? "mt-8 md:mt-16" : "mt-16 md:mt-12";

  return (
    <div className="mt-16 border-spacing-1 p-4 border bg-orange-100 flex flex-col gap-4 overflow-hidden rounded-lg shadow-sm">
      <Link to={`news/${encodedUrl}`} className="relative block w-full md:w-1/4 h-52 md:h-40 rounded-md overflow-hidden">
        <Image
          src={article.thumbnail}
          alt={article.title}
          title={article.title}
          className="object-cover w-full h-full"
        />
      </Link>
      <div className="flex flex-col flex-1 md:pl-4">
        <NewsItemHeader article={article} />
        <Link to={`news/${encodedUrl}`} className="flex-1 py-2">
          <h2 className="text-lg font-bold md:line-clamp-2">{article.title}</h2>
          <p className="line-clamp-3">{article.excerpt}</p>
        </Link>
        <NewsItemFooter
          article={article}
          handleBookmark={handleBookmark}
          isBookmarked={isBookmarked}
        />
      </div>
    </div>
  );
};

export default NewsItem;
