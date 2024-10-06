import React from 'react';
import OXModal from './OXModal.jsx';
import WrongImg from '../../assets/images/quiz/Wrong.png';

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
        ox="정답은 X 입니다,"
        question="중저준위방사성폐기물은 방사능 농도에 따라 구분됩니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Wrong2;
