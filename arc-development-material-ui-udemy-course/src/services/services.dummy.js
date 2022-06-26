import axios from 'axios'


// Simulate api request
const timeout = (data) => new Promise(resolve => setTimeout(() => resolve(data), 2000))
const timeoutReject = (data) => new Promise((resolve, reject) => setTimeout(() => reject(data), 2000))

const sendEmail = (data) => {
    const {name,email,phone,message,total,service,platforms,features,
    customFeatures,users,category} = data

    console.log(data)
    return timeout("Message sent successfully")
}
const sendEmailReject = () => {
    return timeoutReject("Message was not sent")
}

const sendPlace = (data) => {
    const {name,email,phone,message,total,service,platforms,features,
    customFeatures,users,category} = data
    if(total) {

    } else {
        
    }
    console.log(data)
    return timeout("Message sent successfully")
}
export {
    sendEmail,
    sendEmailReject,
    sendPlace
}