import React from 'react';
import OXModal from './OXModal.jsx';
import CorrectImg from '../../assets/images/quiz/Correct.svg';

const Correct2 = ({ isOpen, onRequestClose }) => {

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
        question="국내 고준위방사성폐기물의 대부분은 사용 후 핵연료입니다."
        onCourse={handleCourse}
      />
    </div>
  );
};

export default Correct2;
