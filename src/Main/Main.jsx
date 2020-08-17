/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RandromMovieSection from './RandromMovie/RandomMovie'
// import AnswerSection from './AnswerSection/AnswerSection'
import Description from './Description/Description'
import movieData from '../DataFiles/movieData'
import Answer from './Answer/Answer'
import Results from './Results/Results'
import './Main.scss'
import './AudioPlayer/AudioPlayer.scss'

function Main(props) {
    const ROUNDS = 6;
    const { activeCategory, setActiveCategory, totalScore, setTotalScore, activeCategoryNumber } = props;
    const [roundScore, setRoundScore] = useState(5);
    const [randomFilmNumber, setRandomFilmNumber] = useState(Math.floor(0 + Math.random() * 6));
    const [isAnswered, setIsAnswered] = useState(false);
    const [clickedMovie, setClickedMovie] = useState(undefined);
    const [isOver, setIsOver] = useState(false);
    const movies = movieData[activeCategory];
    const randomFilm = movies[randomFilmNumber];
    console.log(roundScore, totalScore, setTotalScore)
    
    const handleMovieClick = (result, index) => {
        if (!isAnswered) {
            if (result) {
                setTotalScore(totalScore + roundScore);
                setIsAnswered(true);
            }
        }
        setClickedMovie(movies[index])
    }

    const handleNextBtnClick = () => {
        if(activeCategoryNumber + 1 < ROUNDS) {
        console.log(ROUNDS);
        setRandomFilmNumber(Math.floor(0 + Math.random() * 6));
        setActiveCategory((prevVal) => prevVal + 1);
        setRoundScore(5);
        setIsAnswered(false);
        setClickedMovie(undefined);
        }
        else setIsOver(true);
    }

    const resetStates = () => {
        setActiveCategory(0);
        setTotalScore(0);
        setIsAnswered(undefined);
        setIsOver(false);
        setClickedMovie(undefined);
    }

    if(!isOver) {
    return (
        <main className='main'>
            <RandromMovieSection film={randomFilm} isAnswered={isAnswered} />
            <div className='answer-block'>
                <Answer handleMovieClick={handleMovieClick} movies={movies} randomFilmNumber={randomFilmNumber} isAnswered={isAnswered} setRoundScore={setRoundScore}/>
                <Description clickedMovie={clickedMovie} />
                <button type='button' disabled={!isAnswered} className='answer-block__next-level' onClick={() => handleNextBtnClick()}>Далее</button>
            </div>
        </main>
    )
    }
    return (
        <main className='main'>
        <Results gameScore={totalScore} resetStates={resetStates}/>
        </main>
    )

}

Main.propTypes = {
    activeCategory: PropTypes.string.isRequired,
   // activeCategoryNumber: PropTypes.number.isRequired,
    setActiveCategory: PropTypes.func.isRequired,
    totalScore: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired,
    activeCategoryNumber: PropTypes.number.isRequired
}

export default Main

