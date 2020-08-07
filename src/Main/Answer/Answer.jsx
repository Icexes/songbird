/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import PropTypes from 'prop-types'
import './Answer.scss'
 import AnswerElement from './AnswerElement/AnswerElement'
// <AnswerElement movie={movie} index={index} randomFilmNumber={randomFilmNumber} handleMovieClick={handleMovieClick}/>

function Answer(props) {
    const { movies, randomFilmNumber, handleMovieClick, isAnswered} = props;
    return (   
        <ul className='movie-list'>
            {movies.map((movie, index) => {         
                return (
                    <AnswerElement movie={movie} index={index} key={movie.name} randomFilmNumber={randomFilmNumber} handleMovieClick={handleMovieClick} isAnswered={isAnswered}/>
                )
            })}
        </ul>
    )
}

Answer.propTypes = {
    handleMovieClick: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
    randomFilmNumber: PropTypes.number.isRequired,
    isAnswered: PropTypes.bool.isRequired
}

export default Answer;