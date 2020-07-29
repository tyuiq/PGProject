const { exec } = require('../db/mysql')

// 获取咨询老师列表
const getList = () => {
    let sql = `select*from teacher order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

// 获取咨询老师详情
const getDetail = (id) => {
    const sql = `select * from teacher where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]      // 将数组处理为对象
    })
}

// 新增一条咨询老师
const newTeacher = (teacherData = {}) => {
    // blogData 是一个对象，包含 title content 属性
    const teachername = teacherData.teachername
    const introduce = teacherData.introduce
    const createTime = Date.now()

    const sql = `
        insert into teacher (teachername, introduce, createTime)
        values ('${teachername}', '${introduce}', '${createTime}')
    `
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })
}

// 更新一条咨询老师
const updataTeacher = (id, teacherData = {}) => {
    const teachername = teacherData.teachername
    const introduce = teacherData.introduce

    const sql = `
        update teacher set teachername='${teachername}', introduce='${introduce}' where id=${id}
    `
    return exec(sql).then(updateData => {
        if(updateData.affectedRows > 0){
            return true
        }
        return false
    })
}

// 删除一条咨询老师
const delTeacher = (id) => {
    const sql = `delete from teacher where id ='${id}';`
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
    newTeacher,
    updataTeacher,
    delTeacher
}