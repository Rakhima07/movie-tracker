import LikeDislikeButton from "../LikeDislikeButtons/LikeDislikeButtons";

import styles from './styles.module.css'
const MovieList = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.movies.map((movie, index) => (
        <div key={index}>
          {`${index + 1}. ${movie.name}`}
          <div className={styles.buttonsWrapper}>
            <input type={'checkbox'} onChange={() => props.toggleWatched(index)}
              checked={movie.watched} />
            <button className={styles.editButton} onClick={() => props.handleEditMovie
              (index)}>Edit</button>
            <button className={styles.deleteButton} onClick={() => props
              .handleDeleteMovie(index)}>Delete</button>
            {movie.watched && (
              <LikeDislikeButton
                likeStatus={movie.likeStatus}
                onLike={() => props.handleLike(index)}
                onDislike={() => props.handleDislike(index)}
              />
            )}

          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;