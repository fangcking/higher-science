// Components/setGoods/setGoods.js
// 数据保存到本地和服务器
var getGoods = require('../getdatabehavior.js')
Component({
  behaviors: [getGoods],
  properties: {
    // 本地存储数据名字
    dataname: String,
    placeholder: String,
    hidden: Boolean
  },

  data: {
    //暂存数据数组
    lists: [],
    input: '',
    disabled: 'disabled',
    setvalue: {},
  },
  ready: function () {
  },
  methods: {
    // 按钮禁用
    caniuse(e) {
      if (e.detail.value.length >= 1) {
        this.setData({
          disabled: '',
        })
      } else {
        this.setData({
          disabled: 'disabled',
        })
      }
    },
    formSubmit(e) {
      // 本地存储 name value
      let stdinvalue = e.detail.value.input
      let dataname = this.properties.dataname
      let localdata = this.data.localdata.data
      if (localdata.indexOf(stdinvalue) != -1) {
        wx.showToast({
          title: '请勿重复',
          image: "/images/err.png"
        })
        this.setData({
          input: '',
          lists: localdata
        })
      } else {
        localdata.push(stdinvalue)
        this.setData({
          input: '',
          lists: localdata
        })
        let that = this
        // 本地存入的同时，向后台提交数据
        wx.setStorage({
          key: dataname,
          data: localdata,
          success: function () {
            wx.showToast({
              title: '本地保存成功'
            }),
              that.setData({
                disabled: "disabled"
              })
          },
          fail: function () {
            wx.showToast({
              title: '本地保存失败',
              image: '/images/err.png'
            })
          },
          complete: function () {
            // 为测试方便 在这里调用
            that.update()
            wx.request({
              url: 'http://localhost:8083/',
              data: '',
              success: function (res) {
                // 触发get组件 更新数据 对比本地存储 修改本地数据
                that.update()

              },
              fail: function (res) {
                console.log('保存到服务器失败')
              }
            })
          }
        })
      }
    },
    back() {
      this.setData({
        hidden: true
      })
      // 将隐藏的消息发出
      this.triggerEvent('returnpre')
    }
  }
})