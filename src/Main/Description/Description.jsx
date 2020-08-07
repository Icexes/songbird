import React from 'react';
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
                </div>
                <div className='movie-description__film-info'>{clickedMovie.description}</div>
            </div>
        )
    }
    return 1;
}

export default Description;