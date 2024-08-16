import { useState, useEffect } from "react";
import { useGetNewsListQuery } from "../features/news/newsApi";
import CategoryList from "../components/CategoryList"; // Assuming CategoryList can handle light background
import NewsList from "../components/NewsList"; // Assuming NewsList can handle light background

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("General");

  const { data, error, isLoading, isFetching } = useGetNewsListQuery({
    page,
    category: selectedCategory,
  });

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  return (
    <div
      className="bg-white"
      style={{ minHeight: "100vh" }}
    >
      <div className="pt-4 px-4 ">
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <NewsList
        articles={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default HomePage;
