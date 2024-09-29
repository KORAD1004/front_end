import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/quiz/quizModal.module.css';
import Correct from '../../assets/images/quiz/Correct.png';
import Wrong  from '../../assets/images/quiz/Wrong.png';

Modal.setAppElement('#root');

const QuizModal = ({ isOpen, onRequestClose, question, onCorrect, onWrong }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalHeader}>
      <div className={styles.titleFirst}>
            KORAD 퀴즈 풀고
        </div>
        <div className={styles.titleSecond}>
            AI 맞춤 추천 코스 확인하자!
        </div>
      </div>

      <div className={styles.modalBody}>
        <h2>Q,</h2>
        <p>{question}</p>
      </div>

      <div className={styles.modalActions}>
        <img 
            className={styles.correctButton} 
            src={Correct}
            alt="Correct" 
            onClick={onCorrect} 
        />
        <img 
            className={styles.wrongButton} 
            src={Wrong}
            alt="Wrong" 
            onClick={onWrong} 
        />
      </div>
    </Modal>
  );
};

export default QuizModal;