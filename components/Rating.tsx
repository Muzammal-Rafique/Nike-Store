// Assuming you are using React
import React from "react";

interface props {
  value: number;
}

const Rating = ({ value }: props) => {
  const calculateOpacity = (index: number) => {
    // Calculate opacity for the last star based on the fractional part of the rating
    if (index === 4 && value % 1 !== 0) {
      return value % 1;
    }

    // For other stars or when there is no fractional part, set full opacity
    return 1;
  };

  const renderStars = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <input
        key={index}
        type="radio"
        className="mask mask-star"
        style={{ opacity: calculateOpacity(index) }}
        checked={Math.ceil(value) > index}
      />
    ));

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default Rating;
