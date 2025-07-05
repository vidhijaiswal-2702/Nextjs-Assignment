
import React from 'react';
import styles from './PostDetail.module.css';

export default function PostDetail({ post, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <button className={styles.modalCloseButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
