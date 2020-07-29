const { exec, escape } = require('../db/mysql')

const login = (username, password) => {
    // 防止 sql 注入
    username = escape(username)
    password = escape(password)

    const sql = `
        select username, realname, sex from user where username=${username} and password=${password};
    `
    return exec(sql).then(rows => {
        return rows[0] || {}
    })
}

module.exports = {
    login
}