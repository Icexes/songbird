/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classes from 'classnames'

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
            <span className={classes('movie-list__indicator', { 'movie-list__indicator--incorrect': indicatorState === 'red' }, { 'movie-list__indicator--correct': indicatorState === 'green' })} />
            <span className='movie-list__film-name'>{movie.name}</span>
        </li>
    )
}

AnswerElement.propTypes = {
    handleMovieClick: PropTypes.func.isRequired,
    movie: PropTypes.shape({
        name: PropTypes.string
    }),
    index: PropTypes.number.isRequired,
    setRoundScore: PropTypes.func.isRequired,
    isAnswered: PropTypes.bool.isRequired,
    isCorrect: PropTypes.bool.isRequired
}

AnswerElement.defaultProps = {
    movie: {}
}
export default AnswerElement;