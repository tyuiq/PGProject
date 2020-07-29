const { exec } = require('../db/mysql')

// 获取通知列表
const getList = () => {
    let sql = `select*from notice order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

// 获取通知详情
const getDetail = (id) => {
    const sql = `select * from notice where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]      // 将数组处理为对象
    })
}

// 新增一条通知
const newNotice = (noticeData = {}) => {
    // blogData 是一个对象，包含 title content 属性
    const title = noticeData.title
    const content = noticeData.content
    const author = noticeData.author
    const createTime = Date.now()

    const sql = `
        insert into notice (title, content, createTime, author)
        values ('${title}', '${content}', '${createTime}', '${author}')
    `
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

// 更新一条通知
const updataNotice = (id, noticeData = {}) => {
    const title = noticeData.title
    const content = noticeData.content

    const sql = `
        update notice set title='${title}', content='${content}' where id=${id}
    `
    return exec(sql).then(updateData => {
        if(updateData.affectedRows > 0){
            return true
        }
        return false
    })
}

// 删除一条通知
const delNotice = (id) => {
    const sql = `delete from notice where id ='${id}';`
    return exec(sql).then(delData => {
        if(delData.affectedRows > 0){
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newNotice,
    updataNotice,
    delNotice
}