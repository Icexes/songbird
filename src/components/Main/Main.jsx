import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import RandromMovieSection from './RandromMovie'
import Description from './Description'
import movieData from '../../DataFiles/movieData'
import Answer from './Answer'
import Results from './Results'
import './Main.scss'

function Main(props) {
    const ROUNDS = 6;
    const { activeCategory, setActiveCategoryNumber, isOver, setIsOver, totalScore, setTotalScore, activeCategoryNumber } = props;
    const [roundScore, setRoundScore] = useState(5);
    const [randomFilmNumber, setRandomFilmNumber] = useState(Math.floor(Math.random() * 6));
    const [isAnswered, setIsAnswered] = useState(false);
    const [clickedMovie, setClickedMovie] = useState(undefined);
    const movies = movieData[activeCategory];
    const randomFilm = movies[randomFilmNumber];
    const playerEl = useRef(null);

    const playAudioResult = (isCorrectAnswer) => {
        const audio = new Audio();

        audio.src = isCorrectAnswer ? '/audio/Notification/correct-answer.mp3' : '/audio/Notification/wrong-answer.mp3';
        audio.volume = 0.65;
        audio.play();
    }

    const handleMovieClick = (isCorrectAnswer, index) => {
        if (!isAnswered) {
            if (isCorrectAnswer) {
                playerEl.current.audio.current.pause();
                setTotalScore((prevTotalScore) => prevTotalScore + roundScore);
                setIsAnswered(true);

            }
            playAudioResult(isCorrectAnswer);
        }
        setClickedMovie(movies[index]);
    }
    
    const handleNextBtnClick = () => {
        if (activeCategoryNumber + 1 < ROUNDS) {
            setRandomFilmNumber(Math.floor(0 + Math.random() * 6));
            setActiveCategoryNumber((prevVal) => prevVal + 1);
            setRoundScore(5);
            setIsAnswered(false);
            setClickedMovie(undefined);
        }
        else setIsOver(true);
    }

    const resetStates = () => {
        setActiveCategoryNumber(0);
        setTotalScore(0);
        setIsAnswered(false);
        setIsOver(false);
        setClickedMovie(undefined);
    }

    if (!isOver) {
        return (
            <main className='main'>
                <RandromMovieSection film={randomFilm} isAnswered={isAnswered} playerEl={playerEl} />
                <div className='answer-block'>
                    <Answer handleMovieClick={handleMovieClick} movies={movies} randomFilmNumber={randomFilmNumber} isAnswered={isAnswered} setRoundScore={setRoundScore} />
                    <Description clickedMovie={clickedMovie} />
                    <button type='button' disabled={!isAnswered} className='answer-block__next-level' onClick={() => handleNextBtnClick()}>Next Level</button>
                </div>
            </main>
        )
    }
    return (
        <main className='main'>
            <Results gameScore={totalScore} resetStates={resetStates} />
        </main>
    )

}

Main.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    setActiveCategoryNumber: PropTypes.func.isRequired,
    totalScore: PropTypes.number.isRequired,
    setTotalScore: PropTypes.func.isRequired,
    activeCategoryNumber: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired,
    setIsOver: PropTypes.func.isRequired
}

export default Main

