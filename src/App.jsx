import React, { useState } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'

function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [activeCategoryNumber, setActiveCategoryNumber] = useState(0);
  const CATEGORIES = ['Драмы', 'Фантастика', 'Триллеры', 'Комедии', 'Мультфильмы', 'Сериалы'];
  const [isOver, setIsOver] = useState(false);
  return (
    <div className='wrapper'>
      <Header score={totalScore} activeCategoryNumber={activeCategoryNumber} categories={CATEGORIES} isOver={isOver} />
      <Main isOver={isOver} setIsOver={setIsOver} activeCategory={CATEGORIES[activeCategoryNumber]} setActiveCategoryNumber={setActiveCategoryNumber} activeCategoryNumber={activeCategoryNumber} totalScore={totalScore} setTotalScore={setTotalScore} />
    </div>
  )
}

export default App;
