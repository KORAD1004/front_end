import React, { useState, useEffect } from 'react';
import QuizModal from './QuizModal.jsx';
import Correct from './Correct2.jsx';
import Wrong from './Wrong2.jsx';

const Quiz2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCorrectModalOpen, setIsCorrectModalOpen] = useState(false);
  const [isWrongModalOpen, setIsWrongModalOpen] = useState(false);
  
  useEffect(() => {
    // 컴포넌트가 마운트될 때 모달 열기
    setIsModalOpen(true);
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
        info="고준위방폐물이란 열과 방사능의 준위가 높은 폐기물을 말합니다."
        question="우리나라의 경우 고준위방사성폐기물은 사용 후 핵연료가 대부분입니다."
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

export default Quiz2;
