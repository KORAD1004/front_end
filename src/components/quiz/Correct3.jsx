import React from 'react';
import OXModal from './OXModal.jsx';
import CorrectImg from '../../assets/images/quiz/Correct.svg';

const Correct3 = ({ isOpen, onRequestClose }) => {

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
        ox="이제부터 정답을 알아가요!"
        question="중저준위방사성폐기물은 방사능 농도에 따라 구분됩니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Correct3;
