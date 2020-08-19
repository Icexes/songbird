import React from 'react'
import PropTypes from 'prop-types'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import '../AudioPlayer/AudioPlayer.scss'
import './RandomMovie.scss'

function RandomMovie(props) {
    const {film, isAnswered, playerEl} = props;
    const movieImgSrc = isAnswered ? film.posterSrc : './images/unnamed.png';
    console.log(film.name)
    return(
   
    <section className='random-movie'>
    <img className='random-movie__img' src={movieImgSrc} alt='poster'/>
    <div className='random-movie__about'>
        <div className='random-movie__title'>{isAnswered ? film.name : '******'}</div>
        <div className='random-movie__audio'>
        <AudioPlayer audioSrc = {film.audioSrc} playerEl={playerEl}/>
        </div>
    </div>
</section>
    )
}

RandomMovie.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    film : PropTypes.object.isRequired,
    isAnswered : PropTypes.bool.isRequired,
    playerEl: PropTypes.shape({
        currect : PropTypes.object
    })
}
RandomMovie.defaultProps = {
    playerEl: {}
}

export default RandomMovie;