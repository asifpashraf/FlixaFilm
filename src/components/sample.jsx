import React, { useEffect, useState } from "react";

function LatestTvShow() {
  const [tvShow, setTvShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestTvShow = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/tv/latest?api_key=5ef212dfa67e7d4937c0cda7fd1362f6&language=en-US"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTvShow(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchLatestTvShow();
  }, []); // Empty dependency array means this runs once on component mount

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {tvShow ? (
        <div>
          <h1>{tvShow.name}</h1>
          <p>{tvShow.overview}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default LatestTvShow;
