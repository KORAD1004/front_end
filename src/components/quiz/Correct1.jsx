import React from 'react';
import OXModal from './OXModal.jsx';
import CorrectImg from '../../assets/images/quiz/Correct.svg';

const Correct1 = ({ isOpen, onRequestClose }) => {

  const handleCourse = () => {
    onRequestClose();
  };

  return (
    <div>
      <OXModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={false}
        oxImage={CorrectImg}
        ox="정답은 O 입니다,"
        question="KORAD는 안전한 방폐물 관리를 위한 준정부기관입니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Correct1;
