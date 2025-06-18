/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { BUTTON_TYPES } from "../../constants";
import { fetchMovieGenres } from "../../services/movies";

function Search({ handleSearchedMovies, resetMoviesData }) {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      const result = await fetchMovieGenres();
      setGenres(result?.genres);
    }
    fetchGenres();
  }, []);

  function handleSelectedGenre(genreId) {
    setSelectedGenres((prevState) => {
      if (prevState.includes(genreId)) {
        return [...prevState.filter((id) => id !== genreId)];
      } else {
        return [...prevState, genreId];
      }
    });
  }

  function handleClearSearch() {
    setSelectedGenres([]);
    resetMoviesData();
  }

  return (
    <div className="w-52">
      <div>
        <GenresList
          genres={genres}
          handleSelectedGenre={handleSelectedGenre}
          selectedGenres={selectedGenres}
        />
      </div>
      <Button
        type={BUTTON_TYPES.GRADIENT}
        onClick={() => handleSearchedMovies({ genres: selectedGenres })}
      >
        Search
      </Button>
      <Button type={BUTTON_TYPES.DEFAULT} onClick={handleClearSearch}>
        Clear Search
      </Button>
    </div>
  );
}

function GenresList({ genres, handleSelectedGenre, selectedGenres }) {
  return (
    <>
      <h3>Genres</h3>

      <div className="flex flex-wrap">
        {genres?.map((genre) => (
          <span
            key={genre.id}
            className={`text-xs py-1 px-2 rounded-full hover:bg-secondary-500 hover:text-white hover:cursor-pointer m-1 border ${
              selectedGenres.includes(genre.id)
                ? "bg-secondary-500 text-white border-secondary-500"
                : ""
            }`}
            onClick={() => handleSelectedGenre(genre.id)}
          >
            {genre.name}
          </span>
        ))}
      </div>
    </>
  );
}

export default Search;
