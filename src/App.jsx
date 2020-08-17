import React, { useState } from 'react';
import Header from './Header/Header'
import Main from './Main/Main'

// const AddTodo = React.lazy(() => import('./toDo/AddTodo'));


function App() {
  const [totalScore, setTotalScore] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ['Драмы', 'Фантастика', 'Триллеры', 'Комедии', 'Мультфильмы', 'Сериалы'];
    return (
      <div className='wrapper'>
        <Header score={totalScore} activeCategory={activeCategory} categories={categories} />
        <Main activeCategory={categories[activeCategory]} setActiveCategory={setActiveCategory} activeCategoryNumber={activeCategory} totalScore={totalScore} setTotalScore={setTotalScore}/>
      </div>
    )
}

export default App;
