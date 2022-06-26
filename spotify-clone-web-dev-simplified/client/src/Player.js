import React, { useEffect, useState } from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
export default function Player(props) {
    const [play, setPlay] = useState(false)
    const { accessToken, trackUri } = props

    useEffect(() => {
        setPlay(true)
    }, [trackUri])

    if (!accessToken) return null
    return <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={state => {
            if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
    />
}
