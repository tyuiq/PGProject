var express = require('express');
var router = express.Router();
const { getList,
        getDetail,
        newNotice,
        updataNotice,
        delNotice} = require('../controller/notice')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取通知列表
router.get('/list', (req, res, next) => {
    const result = getList(req.query.limit)
    return result.then(listData => {
        res.json(
            new SuccessModel(listData)
        )
    })
})

// 获取详情
router.get('/detail', (req, res, next) => {
    const result = getDetail(req.query.id)
    return result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
})

// 新建
router.post('/new', (req, res, next) => {
    req.body.author = '刘老师'
    const result = newNotice(req.body)
    return result.then(data => {
        res.json(
            new SuccessModel(data)
        )
    })
})

// 更新
router.post('/update', (req, res, next) => {
    const result = updataNotice(req.query.id, req.body)
    return result.then(val => {
        if(result){
            res.json(
                new SuccessModel()
            )
        }
    })
})

// 删除
router.post('/del', (req, res, next) => {
    const result = delNotice(req.query.id)
    return result.then(val => {
        if(result){
            res.json(
                new SuccessModel()
            )
        }else{
            res.json(
                new ErrorModel("删除失败")
            )
        }
    })
})

module.exports = router;
