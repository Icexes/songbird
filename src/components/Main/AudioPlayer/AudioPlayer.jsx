import React from 'react';
import PropTypes from 'prop-types'
import AudioPlayer from 'react-h5-audio-player'
import './AudioPlayer.scss'

function CustomAudioPlayer(props) {
    // eslint-disable-next-line react/prop-types
    const { audioSrc, playerEl } = props;
    return (
        <AudioPlayer
            src={audioSrc}
            ref={playerEl}
            layout='horizontal-reverse'
            autoPlayAfterSrcChange={false}
            showJumpControls={false} />)
}

CustomAudioPlayer.propTypes = {
    audioSrc: PropTypes.string.isRequired
}

export default CustomAudioPlayer;


