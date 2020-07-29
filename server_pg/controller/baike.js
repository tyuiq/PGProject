const { exec } = require('../db/mysql')

// 获取心理百科列表
const getList = (page) => {
    let sql = `select*from baike order by createtime desc `  // where 1=1 防止报错
    if(page){
        sql += `limit ${page} `
    }

    // 返回 promise
    return exec(sql)
}

// 获取心理百科详情
const getDetail = (id) => {
    const sql = `select * from baike where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]      // 将数组处理为对象
    })
}

// 新增一条心理百科
const newBaike = (baikeData = {}) => {
    // blogData 是一个对象，包含 title content 属性
    const title = baikeData.title
    const content = baikeData.content
    const author = baikeData.author
    const createTime = Date.now()

    const sql = `
        insert into baike (title, content, createTime, author)
        values ('${title}', '${content}', '${createTime}', '${author}')
    `
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

// 更新一条百科
const updataBaike = (id, baikeData = {}) => {
    const title = baikeData.title
    const content = baikeData.content

    const sql = `
        update baike set title='${title}', content='${content}' where id=${id}
    `
    return exec(sql).then(updateData => {
        if(updateData.affectedRows > 0){
            return true
        }
        return false
    })
}

// 删除一条百科
const delBaike = (id) => {
    const sql = `delete from baike where id ='${id}';`
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
    newBaike,
    updataBaike,
    delBaike
}