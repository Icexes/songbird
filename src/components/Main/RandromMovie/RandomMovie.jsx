import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import './RandomMovie.scss'

function RandomMovie(props) {
    const { film, isAnswered, playerEl } = props;
    const movieImgSrc = isAnswered ? film.posterSrc : './images/default.png';

    useEffect(() => console.log('Правильный ответ: ',film.name), [film]);

    return (
        <section className='random-movie'>
            <img className='random-movie__img' src={movieImgSrc} alt='poster' />
            <div className='random-movie__about'>
                <div className='random-movie__title'>{isAnswered ? film.name : '******'}</div>
                <div className='random-movie__audio'>
                    <AudioPlayer audioSrc={film.audioSrc} playerEl={playerEl} />
                </div>
            </div>
        </section>
    )
}

RandomMovie.propTypes = {

    film: PropTypes.shape({
        posterSrc: PropTypes.string,
        name: PropTypes.string,
        audioSrc: PropTypes.string
    }),
    isAnswered: PropTypes.bool.isRequired,
    playerEl: PropTypes.shape({
        currect: PropTypes.object
    })
}
RandomMovie.defaultProps = {
    playerEl: {},
    film: {}
}

export default RandomMovie;