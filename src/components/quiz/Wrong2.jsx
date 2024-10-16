import React from 'react';
import OXModal from './OXModal.jsx';
import WrongImg from '../../assets/images/quiz/Wrong.svg';

const Wrong2 = ({isOpen, onRequestClose}) => {
  
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
        question="국내 고준위방사성폐기물의 대부분은 사용 후 핵연료입니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Wrong2;
