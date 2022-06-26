import React, { createContext, useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()

const socket = io('http://192.168.1.50:5000')

const ContextProvider = ({ children }) => {
    const [stream, setStream] = useState(null)
    const [selfId, setSelfId] = useState('')
    const [call, setCall] = useState(null)
    const [callAccepted, setCallAccepted] = useState(false)
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')

    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()
    console.log('firstt',myVideo,userVideo)
    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((currentStream) => {
                setStream(currentStream)
                myVideo.current.srcObject = currentStream
            })

        // listens 'connected' event
        socket.on('connected', (socketId) => {
            setSelfId(socketId)
        })

        socket.on('call', (callData) => {
            setCall({
                isReceivedCall: true,
                ...callData
            })
        })
    }, [])

    const callUser = (socketId) => {
        // create new webRTC peer connection
        const peer = new Peer({ initiator: true, trickle: false, stream })

        peer.on('signal', (signal) => {
            socket.emit('call', { from: selfId, to: socketId, callerName: name, signal })
        })

        peer.on('stream', (stream) => {
            userVideo.current.srcObject = stream
        })

        socket.on('callAccepted', (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer

    }


    const answerCall = () => {
        setCallAccepted(true)

        // create a new webrtc peer connection
        const peer = new Peer({ initiator: false, trickle: false, stream })

        peer.on('signal', (data) => {
            console.log('answering call signal')
            socket.emit('answerCall', { signal: data, to: call.from })
        })

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream
        })

        peer.signal(call.signal)

        connectionRef.current = peer
    }



    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()

        window.location.reload()
    }


    return (
        <SocketContext.Provider value={{
            call, callAccepted, myVideo, userVideo, stream, name, setName, callEnded, selfId, callUser, leaveCall, answerCall,
        }}>
            {children}
        </SocketContext.Provider>
    )
}


export { ContextProvider, SocketContext }

