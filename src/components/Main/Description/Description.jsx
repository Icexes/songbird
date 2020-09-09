import React from 'react';
import PropTypes from 'prop-types'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import './Description.scss';

function Description(props) {
    const { clickedMovie } = props;
    if (clickedMovie) {
        return (
            <div className='movie-description'>
                <img className='movie-description__img' src={clickedMovie.posterSrc} alt='movie' />
                <div className='movie-description__about'>
                    <div className='movie-description__film-name'>{clickedMovie.name}</div>
                    <div className='movie-description__film-name-translate'>{clickedMovie.translate}</div>
                    <div className='movie-description__audio'>
                        <AudioPlayer audioSrc={clickedMovie.audioSrc} />
                    </div>
                </div>
                <div className='movie-description__film-info'>{clickedMovie.description}</div>
            </div>
        )
    }
    return (
        <div className='movie-description'>
            <div className='movie-description__rules'>
                Прослушайте открывок из фильма.<br />
                Выберете подходящий фильм из предложенных вариантов.
            </div>
        </div>
    )
}
Description.propTypes = {
    clickedMovie: PropTypes.shape({
        posterSrc: PropTypes.string,
        name: PropTypes.string,
        translate: PropTypes.string,
        audioSrc: PropTypes.string,
        description: PropTypes.string
    })
}
Description.defaultProps = {
    clickedMovie: undefined
}
export default Description;