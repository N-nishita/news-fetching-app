import { useState } from "react";
import { twMerge } from "tailwind-merge";

const Image = ({
  src,
  alt,
  onError,
  radius = 0,
  fit = "cover",
  fallbackSrc = "https://placehold.co/600x400?text=Alt%20Image",
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = (event) => {
    if (onError) {
      onError(event);
    }
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      style={{ objectFit: fit, borderRadius: radius }}
      className={twMerge("w-full h-full")}
      alt={alt}
      {...props}
    />
  );
};

export default Image;