import React from 'react'
import PropTypes from 'prop-types'
import AnswerElement from './AnswerElement'
import './Answer.scss'

function Answer(props) {
    const { movies, randomFilmNumber, handleMovieClick, isAnswered, setRoundScore } = props;
    return (
        <ul className='movie-list'>
            {movies.map((movie, index) => {
                return (
                    <AnswerElement movie={movie} index={index} key={movie.name} randomFilmNumber={randomFilmNumber} handleMovieClick={handleMovieClick} isAnswered={isAnswered} isCorrect={index === randomFilmNumber} setRoundScore={setRoundScore} />
                )
            })}
        </ul>
    )
}

Answer.propTypes = {
    handleMovieClick: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    randomFilmNumber: PropTypes.number.isRequired,
    isAnswered: PropTypes.bool.isRequired,
    setRoundScore: PropTypes.func.isRequired
}

export default Answer;