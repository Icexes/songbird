/* eslint-disable no-debugger */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState} from 'react'
import PropTypes from 'prop-types'

function AnswerElement(props) {
    // eslint-disable-next-line no-debugger
    debugger;
    const { movie, index, handleMovieClick, randomFilmNumber, isAnswered } = props;
    const [elemIsClicked, setElemIsClicked] = useState(false);
    let indicatorClasses = 'movie-list__indicator';
    debugger;
    console.log(handleMovieClick)
    if (elemIsClicked) {
        if (!isAnswered) {
            if (index !== randomFilmNumber) {
                indicatorClasses += ' movie-list__indicator--incorrect'

            }
        }
        else if (index === randomFilmNumber) {
            indicatorClasses += ' movie-list__indicator--correct';
        }
    }
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li className='movie-list__item' onClick={() => {
            handleMovieClick(index === randomFilmNumber, index);
            setElemIsClicked(true);

        }} >
            <span className={indicatorClasses} />
            <span className='movie-list__film-name'>{movie.name}</span>
        </li>
    )
}

AnswerElement.propTypes = {
    handleMovieClick: PropTypes.func.isRequired,
    movie: PropTypes.object,
    index: PropTypes.number,
    randomFilmNumber: PropTypes.number,
    isAnswered: PropTypes.bool
}

export default AnswerElement;