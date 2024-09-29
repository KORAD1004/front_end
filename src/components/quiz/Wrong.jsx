import React, { useState } from 'react';
import OXModal from './OXModal.jsx';
import WrongImg from '../../assets/images/quiz/Wrong.png';

const Wrong = ({isOpen, onRequestClose}) => {
  
  const handleCourse = () => {
    onRequestClose();
  };

  return (
    <div>
      <OXModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={false}
        oxImage={WrongImg}
        ox="이제부터 정답을 알아가요!"
        question="KORAD는 안전한 방폐물 관리를 위한 준정부기관이 아닙니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Wrong;