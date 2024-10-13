import React from 'react';
import OXModal from './OXModal.jsx';
import WrongImg from '../../assets/images/quiz/Wrong.svg';

const Wrong1 = ({isOpen, onRequestClose}) => {
  
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
        question="KORAD는 안전한 방폐물 관리를 위한 준정부기관입니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Wrong1;
