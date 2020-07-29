var express = require('express');
var router = express.Router();
const { getList,
        getDetail,
        newTeacher,
        updataTeacher,
        delTeacher} = require('../controller/notice')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取通知列表
router.get('/list', (req, res, next) => {
    const result = getList()
    return result.then(listData => {
        res.json(
            new SuccessModel(listData)
        )
    })
})

module.exports = router;
