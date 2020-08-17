import React from 'react';
import PropTypes from 'prop-types'
import AudioPlayer from 'react-h5-audio-player'
import './AudioPlayer.scss'

 function CustomAudioPlayer(props) {
     const {audioSrc} = props;
    return (
        <AudioPlayer
            src={audioSrc}
            onPlay={(e) => console.log(e)}
            layout='horizontal-reverse'
            // other props here
            autoPlayAfterSrcChange={false}
            showJumpControls={false} />)
}

CustomAudioPlayer.propTypes = {
    audioSrc: PropTypes.string.isRequired
}

export default CustomAudioPlayer;


