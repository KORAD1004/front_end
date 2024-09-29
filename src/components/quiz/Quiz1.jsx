import React, { useState, useEffect } from 'react';
import QuizModal from './QuizModal.jsx';
import Correct from './Correct.jsx';
import Wrong from './Wrong.jsx';

const Quiz1 = () => {
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
        question="한국원자력환경공단은 방사성 폐기물의 안전한 관리를 중점적으로 운영되는 준정부기관이다."
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

export default Quiz1;
