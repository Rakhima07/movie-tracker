import { useState } from "react";
import "./App.css";
import MovieInput from "./components/MovieInput/MovieInput.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddOrEditMovie = () => {
    if (movieName.trim() === "") return;
    if (editingIndex !== null) {
      const updatedMovies = [...movies];
      updatedMovies[editingIndex].name = movieName;
      setMovies(updatedMovies);
      setEditingIndex(null);
    } else {
      setMovies([...movies, { name: movieName, watched: false, likeStatus: null }]);
    }
    setMovieName("");
  };

  const handleDeleteMovie = (index) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  const handleEditMovie = (index) => {
    setMovieName(movies[index].name);
    setEditingIndex(index);
  };

  const handleCancelEditing = () => {
    setEditingIndex(null);
    setMovieName("");
  };

  const toggleWatched = (index) => {
    const updatedMovies = [...movies];
    updatedMovies[index].watched = !updatedMovies[index].watched;
    setMovies(updatedMovies);
  };

  const handleLike = (index) => {
    const updatedMovies = [...movies];
    if (updatedMovies[index].likeStatus === "liked") {
      updatedMovies[index].likeStatus = null;
    } else {
      updatedMovies[index].likeStatus = "liked";
    }
    setMovies(updatedMovies);
  };

  const handleDislike = (index) => {
    const updatedMovies = [...movies];
    if (updatedMovies[index].likeStatus === "disliked") {
      updatedMovies[index].likeStatus = null;
    } else {
      updatedMovies[index].likeStatus = "disliked";
    }
    setMovies(updatedMovies);
  };

  return (
    <div className="container">
      <h1>Movie Tracker</h1>
      <MovieInput
        movieName={movieName}
        setMovieName={setMovieName}
        handleAddOrEditMovie={handleAddOrEditMovie}
        editingIndex={editingIndex}
        handleCancelEditing={handleCancelEditing}
      />
      <MovieList
        movies={movies}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
        toggleWatched={toggleWatched}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
    </div>
  );
}
