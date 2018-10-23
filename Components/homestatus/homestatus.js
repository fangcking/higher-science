// Components/homestatus/homestatus.js
const app = getApp()
Component({

  properties: {
    oriData: Array,
    title: String,
    howshow: String,
    storgename:String,
    needSetMore:Boolean,
    setMoreMsg:Array
  },
  data: {
    needhide: true,
    selected: false,
    current_item: null,

  },
  methods: {
    sethomestatus(e) {
      // +1 防止判断位置0时无法判断
      let cuu = e.currentTarget.dataset.key + 1
      let a = this.data.selected
      this.setData({
        current_item: cuu,
        selected: true
      })
      console.log(this.data.current_item + '是按得值' + a + '判断结果')
      if (cuu && a) {
        // 页面跳转加载跳转路由
        console.log("打开成功")

        wx.request({
          url: '',
          method: 'POST',
          success: res => {

          },
          fail: res => {
            console.log('失败')
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
    }
  }
})