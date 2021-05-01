import axios from 'axios'

function loginApi({email, password}) {
    console.log(email, password)
return axios({
    method: 'post',
    url: 'http://106.10.53.116:8099/login',
    headers: { 'Content-Type': 'application/json' },
    data: {
        email: email,
        password: password
    }
}).then((res) => res.data)
}

export default loginApi