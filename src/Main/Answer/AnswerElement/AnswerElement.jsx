/* eslint-disable no-nested-ternary */
/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AnswerElement(props) {
    const { movie, index, handleMovieClick, isAnswered, isCorrect, setRoundScore } = props;
    const [indicatorState, setindicatorState] = useState('gray');

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li className='movie-list__item' onClick={() => {
            handleMovieClick(isCorrect, index);
            let newIndicatorState = 'gray';
            if (indicatorState === newIndicatorState) {
                if (!isAnswered) {
                    if (!isCorrect) {
                        newIndicatorState = 'red';
                        setRoundScore((prevScore) => prevScore - 1)

                    }
                    else {
                        newIndicatorState = 'green'
                    }
                }

                setindicatorState(newIndicatorState);
            }



        }}>
            <span className={`movie-list__indicator ${indicatorState === 'red' ? 'movie-list__indicator--incorrect' : indicatorState === 'green' ? 'movie-list__indicator--correct' : ''}`} />
            <span className='movie-list__film-name'>{movie.name}</span>
        </li>
    )
}

AnswerElement.propTypes = {
    handleMovieClick: PropTypes.func.isRequired,
    movie: PropTypes.object,
    index: PropTypes.number,
    setRoundScore: PropTypes.func,
    isAnswered: PropTypes.bool,
    isCorrect: PropTypes.bool.isRequired
}

export default AnswerElement;