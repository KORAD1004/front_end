import React, { useState, useEffect } from 'react';
import QuizModal from './QuizModal.jsx';
import Correct from './Correct3.jsx';
import Wrong from './Wrong3.jsx';
import cookie from 'js-cookie';

const Quiz3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  
  useEffect(() => {
    // 컴포넌트가 마운트될 때 모달 열기
    if(cookie.get("test")==="false"||cookie.get("test")===undefined) setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCorrect = () => {
    setIsModalOpen(false);
    setIsCorrectModalOpen(true);
  };

  const handleWrong = () => {
    setIsModalOpen(false);
    setIsWrongModalOpen(true);
    cookie.set("test", true);
  };

  const handleCloseCorrectModal = () => {
    setIsCorrectModalOpen(false);
  };

  const handleCloseWrongModal = () => {
    setIsWrongModalOpen(false);
  };

  return (
    <div>
      <QuizModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        info="중저준위방사성폐기물은"
        question="사용 용도에 따라 '중준위', '저준위', '극저준위' 방사성폐기물로 구분됩니다."
        onCorrect={handleCorrect}
        onWrong={handleWrong}
      />

      <Correct
        isOpen={isCorrectModalOpen}
        onRequestClose={handleCloseCorrectModal}
      />
      <Wrong
        isOpen={isWrongModalOpen}
        onRequestClose={handleCloseWrongModal}
      />
    </div>
  );
};

export default Quiz3;
