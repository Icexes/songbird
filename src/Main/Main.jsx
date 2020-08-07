/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RandromMovieSection from './RandromMovie/RandomMovie'
// import AnswerSection from './AnswerSection/AnswerSection'
import Description from './Description/Description'
import movieData from '../DataFiles/movieData'
import Answer from './Answer/Answer'
import './Main.scss'

function Main(props) {
    // eslint-disable-next-line no-debugger
    const { activeCategory, setActiveCategory, activeCategoryNumber, totalScore, setTotalScore } = props;
    const [roundScore, setRoundScore] = useState(5);
    const [randomFilmNumber, setRandomFilmNumber] = useState(Math.floor(0 + Math.random() * 6));
    const [isAnswered, setIsAnswered] = useState(false);
    const movies = movieData[activeCategory];
    const randomFilm = movies[randomFilmNumber];
    const [clickedMovie, setClickedMovie] = useState(undefined);
    console.log(roundScore, totalScore, setTotalScore)
    const handleMovieClick = (result, index) => {
        if (!isAnswered) {
            if (result) {
                setTotalScore(totalScore + roundScore);
                setIsAnswered(true);
            }
            else {
                setRoundScore(roundScore - 1);
            }
        }
        setClickedMovie(movies[index])
    }

    const handleNextBtnClick = () => {
        setRandomFilmNumber(Math.floor(0 + Math.random() * 6));
        setActiveCategory(activeCategoryNumber + 1);
        setRoundScore(5);
        setIsAnswered(false);
        setClickedMovie(undefined);
    }

    return (
        <main className='main'>
            <RandromMovieSection film={randomFilm} isAnswered={isAnswered} />
            <div className='answer-block'>
                <Answer handleMovieClick={handleMovieClick} movies={movies} randomFilmNumber={randomFilmNumber} isAnswered={isAnswered} />
                <Description clickedMovie={clickedMovie} />
                <button type='button' disabled={!isAnswered} className='answer-block__next-level' onClick={() => handleNextBtnClick()}>Далее</button>
            </div>
        </main>
    )
}

Main.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    activeCategoryNumber: PropTypes.number.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    totalScore: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired
}

export default Main

