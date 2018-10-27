// Components/homestatus/homestatus.js
const app = getApp()
Component({
  properties: {
    oriData: Array,
    title: String,
    howshow: String,
    storgename: String,
    needSetMore: Boolean,
    setMoreMsg: Array,
  },
  data: {
    needhide: true,
    selected: false,
    current_item: null,
    lastedStatus:null
  },
  methods: {
    sethomestatus(e) {
      // +1 防止判断位置0时无法判断
      let cuu = e.currentTarget.dataset.key + 1
      let a = !this.data.selected
      let homeStatusItems = this.data.statusItems
      let currentStatus = homeStatusItems[cuu - 1].name
      let lastedStatus = this.data.lastedStatus
      console.log(cuu + '是按得值' + a + '判断结果')
      this.setData({
        current_item: cuu,
        selected: a,
      })
      if (cuu && a) {
        // 页面跳转加载跳转路由
        console.log("打开成功")
        this.setData({
          lastedStatus: currentStatus
        })
        let sendData = {
          key: "currentstatus",
          name: currentStatus
        }
        // 防止重复恶意设置
        if (lastedStatus ==null ||lastedStatus !=currentStatus){
          wx.request({
            url: app.globalData.requestUrl,
            method: 'POST',
            data: sendData,
            success: res => {
            },
            fail: res => {
              console.log('设置失败')
              wx.showToast({
                title: '设置失败',
                image: '/images/err.png'
              })
              // this.setData({
              //   selected :false
              // })
            }
          })
        }
      }
    },
    addstatusslot(e) {
      var a = !this.data.selected
      this.setData({
        needhide: false,
      })
    },
    setstatus(e) {
      this.setData({
        statusItems: e.detail,
      })
    },
  delete(res){
    let id =res.currentTarget.dataset.key
    this.selectComponent("#setting").delete(id)
  }
  }
})
