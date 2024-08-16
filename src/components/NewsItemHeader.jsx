import { Link } from "react-router-dom";

import Image from "./Image";
import { formatTime } from "../utils/helperFns";

export default function NewsItemHeader({ article }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <Link className="flex items-center gap-2" to={article.publisher.url}>
          <span className="h-6 sm:h-8 w-6 sm:w-8 rounded-full overflow-hidden">
            <Image
              src={article.publisher.favicon}
              alt={article.publisher.name}
              title={article.publisher.name}
            />
          </span>
          <span>{article.publisher.name}</span>
        </Link>
        <span>{formatTime(article.date)}</span>
      </div>
    </>
  );
}
