import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import PropTypes from 'prop-types'

function RandomMovie(props) {
    const {film, isAnswered} = props;
    const movieImgSrc = isAnswered ? film.posterSrc : './images/popcorn.png';
    return(
    <section className='random-movie'>
    <img className='random-movie__img' src={movieImgSrc} alt='poster'/>
    <div className='random-movie__about'>
        <div className='random-movie__title'>{isAnswered ? film.name : '******'}</div>
        <div className='random-movie__audio'>
            <AudioPlayer
                src={film.audioSrc}
                onPlay={(e) => console.log(e)}
                layout='horizontal-reverse'
                // other props here
                autoPlayAfterSrcChange={false}
                showJumpControls={false} />
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