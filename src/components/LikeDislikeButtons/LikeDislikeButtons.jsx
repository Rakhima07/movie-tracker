import React from 'react';
import styles from "./LikeDislikeButton.module.css";
import likeActive from "../../assets/icons/Like_active.svg";
import likeDefault from "../../assets/icons/Like_default.svg";
import dislikeActive from "../../assets/icons/Dislike_active.svg";
import dislikeDefault from "../../assets/icons/Dislike_default.svg";

const LikeDislikeButton = ({ likeStatus, onLike, onDislike }) => {
  return (
    <div className={styles['like-dislike-buttons']}>
      <button
        className={likeStatus === 'liked' ? styles.active : ''}
        onClick={onLike}
      >
        <img 
          src={likeStatus === 'liked' ? likeActive : likeDefault} 
          alt="Like" 
        />
      </button>

      <button
        className={likeStatus === 'disliked' ? styles.active : ''}
        onClick={onDislike}
      >
        <img 
          src={likeStatus === 'disliked' ? dislikeActive : dislikeDefault} 
          alt="Dislike" 
        />
      </button>
    </div>
  );
};

export default LikeDislikeButton;
