// pages/aboutme/order/order.js
Page({
  data: {
    selectgoods :[
      {
        name:'门锁',
        more: {
          name: ["门厚度", "导向片长度", "导向片宽度", "导向片类型","数量"],
          image :'/images/all.png'
        }
      },
      {
        name: '猫眼',
        more: {
          name: ["猫眼门厚度", "导向片长度", "导向片宽度", "导向片类型", "数量"],
          image: ''
        }
      },
      {
        name: '三相表',
        more: {
          name: ["三相表门厚度", "导向片长度", "导向片宽度", "导向片类型", "数量"],
          image: ''
        }
      },
      {
        name: '整套安装方案',
        more: {
          name: ["zhengtao门厚度", "导向片长度", "导向片宽度", "导向片类型", "数量"],
          image: ''
        }
      },
    ],
    goodsindex : 2,
    region:['山东省','青岛市','崂山区']
  },
  changeGoods(res){
  this.setData({
    goodsindex :res.detail.value
  })
  },
  iscorrectphone(e) {
    let a = /^1(?:3\d|4[4-9]|5[0-35-9]|6[67]|7[013-8]|8\d|9\d)\d{8}$/g
    return a.test(e)
  },
  regionChange(res){
   this.setData({
     region: res.detail.value
   })
  },
  formSubmit(res){
    let data =res.detail.value
    // 满足所有必要条件时post后台
    if(this.iscorrectphone(data.userphone) && data.username && data.moreadress){
      wx.request({
        url: 'http://localhost:8083',
        method: 'POST',
        data: {
          "order-mess": data
        },
        success: res => {

        },
        fail: res => {
          console.log("请检查网络环境，或直接联系我们")
        }
      })
    }else{
      wx.showToast({
        title: '请填入必填信息',
        image:'/images/err.png'
      })
    }
    console.log(data)
  },
  formReset(res){
    console.log(res)
  }
})