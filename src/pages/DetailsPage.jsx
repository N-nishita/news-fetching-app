import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import useFetchNews from "../hooks/useFetchNews";
import Image from "../components/Image";
import { formatTime } from "../utils/helperFns";

export default function DetailsPage() {
  const { encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);

  const { loading, error, data: article } = useFetchNews(url);

  console.log(article);

  const sanitizeHtml = DOMPurify.sanitize(article?.content, {
    FORBID_TAGS: ["ul", "li", "a", "header"],
  });
  const authorsLength = article?.authors.length;

  if (loading) return <div>Fetching...</div>;
  if (error) {
    console.log(error);
    return (
      <>
        <div>Error occurred: {error?.message}</div>
      </>
    );
  }

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={article?.thumbnail}
          alt={article?.title}
          title={article?.title}
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
          {/* content header */}
          <div className="space-y-2">
            {/* title */}
            <Link
              rel="noopener noreferrer"
              to={article?.url}
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {article?.title}
            </Link>
            {/* publisher */}
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center gap-2"
                to={article?.publisher?.url}
                target="_blank"
              >
                <span className="h-6 sm:h-8 w-6 sm:w-8 rounded-full overflow-hidden">
                  <Image
                    src={article?.publisher?.favicon}
                    alt={article?.publisher?.name}
                    title={article?.publisher?.name}
                  />
                </span>
                <span>{article?.publisher?.name}</span>
              </Link>
              <span>{formatTime(article.date)}</span>
            </div>
            <p className="text-xs text-gray-600">
              By{" "}
              {article?.authors?.map((author, idx) => (
                <span key={author}>
                  {author}
                  {idx === authorsLength - 1 ? "" : ","}
                </span>
              ))}
            </p>
          </div>

          {/* article content */}
          <article
            className="article_content text-gray-800"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml }}
          ></article>

          {/* keywords */}
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
            {article?.keywords.map((keyword, idx) => (
              <Link
                key={idx}
                rel="noopener noreferrer"
                to={`/search/${keyword}`}
                className="px-3 py-1 rounded-sm hover:underline bg-white text-gray-50"
              >
                <span>#{keyword}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
