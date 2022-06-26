import { sendEmail as _sendEmail, sendEmailReject as _sendEmailReject,
sendPlace as _sendPlace } from './services.dummy'

const isDevelopment = process.env.REACT_APP_ENV === 'development'

const sendEmail = isDevelopment ? _sendEmail : _sendEmail
const sendEmailReject = isDevelopment ? _sendEmailReject : _sendEmailReject
const sendPlace = isDevelopment ? _sendPlace : _sendPlace


export {
    sendEmail, sendEmailReject,sendPlace
}