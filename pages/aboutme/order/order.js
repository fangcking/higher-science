// pages/aboutme/order/order.js
Page({
  data: {
    selectgoods :[
      {
        name:'门锁',
        more: {
          name: ["门厚度", "导向片长度", "导向片宽度", "导向片类型"],
          image :''
        }
      },
      {
        name: '猫眼',
        more: {
          name: ["maoyan门厚度", "导向片长度", "导向片宽度", "导向片类型"],
          image: ''
        }
      },
      {
        name: '三相表',
        more: {
          name: ["sanxiang门厚度", "导向片长度", "导向片宽度", "导向片类型"],
          image: ''
        }
      },
      {
        name: '整套安装方案',
        more: {
          name: ["zhengtao门厚度", "导向片长度", "导向片宽度", "导向片类型"],
          image: ''
        }
      },
    ],
    goodsindex : 2,
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  changeGoods(res){
    console.log(res.detail.value)
  this.setData({
    goodsindex :res.detail.value
  })
  }
})