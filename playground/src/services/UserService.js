
import cookie from 'react-cookies'

// simulate api request
const timeout = (data) => new Promise(resolve => setTimeout(() => resolve(data), 2000))

class UserService {
    login = async (email, password) => {
        return timeout({ id: 1, email, password })
    }

    authenticate = async () => {

        // const token = cookie.load('authorization')

        // if (!token) return Promise.reject()

        return Promise.resolve()
    }

}

export default UserService