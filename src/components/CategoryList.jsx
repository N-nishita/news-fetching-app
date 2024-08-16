import { useRef, useState } from "react";
import { category } from "../utils/constants";

export default function CategoryList({
  selectedCategory,
  setSelectedCategory,
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 3;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div mt-18
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="categorylist flex gap-2 overflow-x-auto bg-white text-gray-700 p-3 mt-16 fixed top-0 left-0 right-0 z-50" // Adjusted top margin to push it down below the fixed header
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {category.map((cat) => (
        <button
          key={cat}
          className={`px-2 py-2.5 rounded ${
            selectedCategory === cat ? "bg-orange-400 text-white" : ""
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
