import React from 'react'
import './Results.scss'

export default function Results({gameScore, resetStates}) {
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

}