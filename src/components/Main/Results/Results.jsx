import React from 'react'
import PropTypes from 'prop-types'
import './Results.scss'

function Results({ gameScore, resetStates }) {
    const MAX_SCORE = 30;
    if (MAX_SCORE > gameScore) {
        return (
            <section className='results'>
                <h2 className='results__gratitute'>Поздравляем!</h2>
                <p className='results__description'>Вы прошли викторину и набрали <span className='results__score'>{gameScore}</span> из 30 возможных баллов!</p>
                <button className='results__try-again-btn' type='button' onClick={resetStates}>Попробовать еще раз!</button>
            </section>
        )
    }
    return (
        <section className='results'>
            <img className='results__img' src='/images/success.gif' alt='result' />
            <h2 className='results__gratitute'>Поздравляем!</h2>
            <p className='results__description'>Вы прошли викторину и не совершили ни единой ошибки, Вы настоящий киноман!</p>
        </section>
    )
}

Results.propTypes = {
    gameScore: PropTypes.number.isRequired,
    resetStates: PropTypes.func.isRequired
}
export default Results;