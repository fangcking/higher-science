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
    input: '',
    disabled: 'disabled',
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
    formSubmit(e){
      // 本地存储 name value
      let stdinvalue = e.detail.value.input
      let dataname = this.properties.dataname
      let localdata = this.data.localdata.datavalue
      let state =[]
      for (let localdatavalue of localdata){
        state.push(localdatavalue.name) 
      }
      if (state.indexOf(stdinvalue) != -1) {
        wx.showToast({
          title: '请勿重复',
          image: "/images/err.png"
        })
        // 输入后无论结果如何， 情况输入框内容
        this.setData({
          input: '',
        })
      } else {
        let valueidlists = []
        for( let value of localdata){
          valueidlists.push(value.id)
        }
        let lastid = Math.max.apply(null,valueidlists) +1
        let a ={
          name :stdinvalue,
          id : lastid
        }
        localdata.push(a)
        this.setData({
          input: '',
        })
        let that = this
        // 本地存入的同时，向后台提交数据
        wx.setStorage({
          key: dataname,
          data: localdata,
          success: ()=> {
            wx.showToast({
              title: '本地保存成功'
            }),
              that.setData({
                disabled: "disabled"
              })
          },
          fail:() =>{
            wx.showToast({
              title: '本地保存失败',
              image: '/images/err.png'
            })
          },
          complete: ()=> {
            // 为测试方便 在这里调用
            that.update()
            wx.request({
              url: 'http://localhost:8083/',
              data: '',
              success: res => {
                // 触发get组件 更新数据 对比本地存储 修改本地数据
                that.update()

              },
              fail: res=> {
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