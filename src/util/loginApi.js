import axios from 'axios'

function loginApi({eamil, password}) {
axios({
    method: 'post',
    url: 'http://106.10.53.116:8099/login',
    headers: { 'Content-Type': 'application/json' },
    data: {
        email: eamil,
        password: password
    }
})
}

export default loginApi