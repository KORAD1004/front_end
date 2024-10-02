import React from 'react';
import Modal from 'react-modal';
import styles from '../../styles/quiz/oxModal.module.css';


Modal.setAppElement('#root');

const OXModal = ({ isOpen, onRequestClose, oxImage, ox, question, onCourse }) => {
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
            경주 관광 페이지 적극 활용하자!
        </div>
      </div>

      <div className={styles.modalBody}>
        <img 
            className={styles.correctImg} 
            src={oxImage}
            alt="oxImage" 
        />
        <h2>{ox}</h2>
        <p>{question}</p>
      </div>
      <div className={styles.modalActions}>
        <button className={styles.courseButton} onClick={onCourse}>코스 바로 살펴보기</button>
      </div>
    </Modal>
  );
};

export default OXModal;