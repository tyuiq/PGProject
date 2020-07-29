
import axios from 'axios'

const baseUrl = '/psysh/user'

export default {

    // 登录
    userLogin(data) {
        return axios({
            url: baseUrl + `/login`,
            method: 'post',
            data: data
        })
    }
}