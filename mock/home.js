const Mock = require('mockjs');
const express = require('express');
const router = express.Router();
router.use("/all", (req,res)=>{
    const data = Mock.mock({
        'list|1-10': [{
            'id|+1':1
        }]
    })
    return res.json(data)
})
module.exports = router;
