import axios from 'axios'

const baseUrl = '/psysh/baike'

export default {

    // 获取百科列表
    fetchList(params) {
        return axios({
            url: baseUrl + `/list`,
            method: 'get',
            params: params
        })
    },

    // 查看百科详情
    getObj(id) {
        return axios({
            url: baseUrl + `/detail?id=${id}`,
            method: 'get'
        })
    },

    // 新增
    addObj(data) {
        return axios({
            url: baseUrl + `/new`,
            method: 'post',
            data: data
        })
    },

    // 更新
    putObj(id, data) {
        return axios({
            url: baseUrl + `/update?id=${id}`,
            method: 'post',
            data: data
        })
    },

    // 删除列表
    DelObj(id) {
        return axios({
            url: baseUrl + `/del?id=${id}`,
            method: 'post'
        })
    }
}