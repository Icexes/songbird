import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import '../AudioPlayer/AudioPlayer.scss'

function RandomMovie(props) {
    const {film, isAnswered} = props;
    const movieImgSrc = isAnswered ? film.posterSrc : './images/popcorn.png';
    return(
    <section className='random-movie'>
    <img className='random-movie__img' src={movieImgSrc} alt='poster'/>
    <div className='random-movie__about'>
        <div className='random-movie__title'>{isAnswered ? film.name : '******'}</div>
        <div className='random-movie__audio'>
        <AudioPlayer audioSrc = {film.audioSrc}/>
        </div>
    </div>
</section>
    )
}

RandomMovie.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    film : PropTypes.object.isRequired,
    isAnswered : PropTypes.bool.isRequired
}

export default RandomMovie;